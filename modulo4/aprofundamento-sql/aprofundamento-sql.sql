ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";


ALTER TABLE Actor DROP COLUMN salary; 

ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "1970-05-12"
WHERE id = "003";

UPDATE Actor
SET nome = "JULIANA PAES"
WHERE id = 005;

UPDATE Actor
SET nome = "Juliana Paes"
WHERE id = 005;

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

UPDATE Actor
SET nome = "Peterson Backender"
WHERE id = 30;

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;

SELECT max(Salary) from Actor;

SELECT min(Salary) from Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT id, name FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

ALTER TABLE Movie ADD playing_limit_date DATE;

ALTER TABLE Movie CHANGE rating rating FLOAT;

UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";

DELETE FROM Movie WHERE id = "001";



SELECT * FROM filmes;








