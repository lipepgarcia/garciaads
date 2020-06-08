# ES2


Documentação API

Inserção de usuario 

POST => https://garciaads.herokuapp.com/api/user

{
	"user": {
		"nome": "teste",
		"email": "teste@teste"
	}
}

Retorna os usuarios

GET => https://garciaads.herokuapp.com/api/user


Altera os registros dos usuarios

PUT => https://garciaads.herokuapp.com/api/user

{
	"user": {
        "id": 1,
		"nome": "teste",
		"email": "teste@teste"
	}
}

Deleta usuario

DELETE => https://garciaads.herokuapp.com/api/user/id_do_usuario
