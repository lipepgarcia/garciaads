# ES2


Documentação API


Inserção de usuario 

POST => https://engenhariasoftware2.herokuapp.com/api/user

{
	"user": {
		"nome": "teste",
		"email": "teste@teste"
	}
}

Retorna usuarios

GET => https://engenhariasoftware2.herokuapp.com/api/user


Altera Registro do usuario

PUT => https://engenhariasoftware2.herokuapp.com/api/user

{
	"user": {
        "id": 1,
		"nome": "teste",
		"email": "teste@teste"
	}
}

Deleta usuario

DELETE => https://engenhariasoftware2.herokuapp.com/api/user/id_do_usuario
