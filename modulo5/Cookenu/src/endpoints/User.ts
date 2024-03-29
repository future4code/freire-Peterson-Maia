import { Request, Response } from "express";
import UserData from "../data/UserData";
import { MissingFields } from "../error/MissingFields";
import IdGenerator from "../services/IdGenerator";
import User, { USER_ROLES } from "../model/User"
import HashManager from "../services/HashManager";
import Authenticator from "../services/Authenticator";
import { TokenNotPass } from "../error/TokenNotPass";
import RecipeData from "../data/RecipeData";

class UserEndpoint {

    async create(req: Request, res: Response) {
        try {
            const { nome, email, senha, role } = req.body

            if (!nome || !email || !senha || !role) {
                throw new MissingFields()
            }

            if (senha.length < 6) {
                throw new Error("A senha deve conter no minimo 6 caracteres")
            }

            if (role.toUpperCase() !== USER_ROLES.NORMAL && role.toUpperCase() !== USER_ROLES.ADMIN) {
                throw new Error("Usuario só pode ser do tipo normal ou admin")
            }

            const userData = new UserData()

            const emailAlreadyExit = await userData.getUserByEmail(email)

            if (emailAlreadyExit) {
                throw new Error("Email ja cadastrado")
            }

            const id = new IdGenerator().idGenerator();

            const hashPassword = await new HashManager().hash(senha)

            const user = new User(id, nome, email, hashPassword, role)

            const response = await userData.createUser(user)

            const token = new Authenticator().generateToken({ id, role })

            res.status(201).send({ message: response, token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async login(req: Request, res: Response) {
        try {

            const { email, senha } = req.body

            if (!email || !senha) {
                throw new MissingFields()
            }

            const userData = new UserData()

            const userDB = await userData.getUserByEmail(email)

            if (!userDB) {
                throw new Error("Email não cadastrado na aplicação")
            }

            const correctPassword = await new HashManager().compare(senha, userDB.getSenha())

            if (!correctPassword) {
                throw new Error("A senha esta incorreta")
            }

            const token = new Authenticator().generateToken({ id: userDB.getId(), role: userDB.getRole() })

            res.status(200).send({ message: "Usuario logado com sucesso", token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async getProfile(req: Request, res: Response) {
        try {

            const token = req.headers.authorization

            if (!token) {
                throw new TokenNotPass()
            }

            const id = new Authenticator().getTokenData(token)

            const userData = new UserData()

            const user = await userData.getUserById(id)

            res.status(200).send(user)

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async getAnotherProfile(req: Request, res: Response) {
        try {

            const token = req.headers.authorization
            const idAnotherPerson = req.params.id

            if (!token) {
                throw new TokenNotPass()
            }

            // verificar se o token é valido
            new Authenticator().getTokenData(token)

            const userData = new UserData();

            const searchPerson = await userData.getUserById(idAnotherPerson)

            if (!searchPerson) {
                throw new Error("Usuario não encontrado")
            }

            res.status(200).send(searchPerson)
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }

    }

    async followUser(req: Request, res: Response) {
        try {

            const token = req.headers.authorization
            const { idSeguido } = req.body

            if (!token) {
                throw new TokenNotPass()
            }

            // verificar se o token é valido
            const id = new Authenticator().getTokenData(token)

            const userData = new UserData();

            const followPerson = await userData.insertFollow(id, idSeguido)


            res.status(200).send({ message: followPerson })

        } catch (error: any) {
            if (error.sqlMessage.includes("Duplicate entry")) {
                res.status(500).send({ message: "Você ja esta seguindo esse usuario" })
            }
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async unfollowUser(req: Request, res: Response) {
        try {

            const token = req.headers.authorization
            const { idDeixarSeguir } = req.body

            if (!token) {
                throw new TokenNotPass()
            }

            // verificar se o token é valido
            const id = new Authenticator().getTokenData(token)

            const userData = new UserData();

            const followPerson = await userData.deleteFollow(id, idDeixarSeguir)


            res.status(200).send({ message: followPerson })

        } catch (error: any) {

            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async feed(req: Request, res: Response) {
        try {

            const token = req.headers.authorization

            if (!token) {
                throw new TokenNotPass()
            }

            // verificar se o token é valido
            const id = new Authenticator().getTokenData(token)

            const userData = new UserData();


            const searchFeed = await userData.selectFeed(id)

            res.status(200).send(searchFeed)
        } catch (error: any) {

            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async deleteAccount(req: Request, res: Response) {
        try {
            const token = req.headers.authorization // pessoa admin
            const id = req.params.id // id da pessoa a ser deletada

            if (!token) {
                throw new TokenNotPass()
            }

            // verificar se o token é valido
            const idPerson = new Authenticator().getTokenData(token)

            const userData = new UserData()

            const userId = await userData.getUserById(id)

            if (!userId) {
                throw new Error("Pessoa nao Encontrada")
            }

            // somente pessoas do tipo normal podem editar a propria receita
            if (idPerson.role === USER_ROLES.NORMAL && userId.id !== idPerson.id) {
                throw new Error("Somente administradores podem deletar usuarios")
            }

            const recipeData = new RecipeData()

            const recipes = await recipeData.getRecipeByUserId(userId.id)

            // verifica se a pessoa ja nao tem nenhuma receita
            if (!recipes) {
                throw new Error("Pessoa não tem nenhuma receita")
            }

            // deletar todas as receitas , percorrendo o array de receitas e deletando uma a uma
            if (recipes.length > 0) {
                for (const recipe of recipes) {
                    await recipeData.deleteRecipe(recipe.getId())
                }
            }

            // deletar todos os seguidores e pessoas que seguem o id em questão
            await userData.deleteFollowSeguir(userId.id)
            await userData.deleteFollowSeguido(userId.id)


            // deletar usuario
            await userData.deleteUser(userId.id)


            res.status(200).send({ message: "Usuario deletado com sucesso!" })
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}

export default UserEndpoint