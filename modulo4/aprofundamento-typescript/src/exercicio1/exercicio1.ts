//A)
//B)

//C)

type Person = {
    name:string,
    age:number,
    color:string
}

type UserPerson = Person

const user: UserPerson={

    name:'Peterson',
    age: 33,
    color: ""
}

enum CorFavorita {
    COLORF = "Cores do Arco Iris"
}

console.log(user)