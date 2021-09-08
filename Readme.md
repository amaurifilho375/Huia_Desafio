//obs o programa tem muitas rotas e com padrões bem parecido. Irei listar as principais


// 1) apenas digitar no insomnia
routes.get('/lotes', LoteController.index); 



//2) padrão ......................................

 end->  http://localhost:3333/users  Com POST

json:

{
	"name": "meunome",
	"email": "amauridev4@hotmail.com",
	"phone": 33333333
}


//3) padrão............................. 

end->  http://localhost:3333/users   com GET

sem entrada



//4) padrão............................. 

end->  http://localhost:3333/lotes/1/products  com GET

sem entrada

//5) padrão............................. 

end->  http://localhost:3333/lotes/1/products  com POST

json:{

  "nome": "violoes",
	"cor": "amaderado",
	"valor": 150,
	"descricao": "com melhores acusticas  "
		
}



//6) padrão............................. 

end-> http://localhost:3333/produtos/1/pedidos  com GET


sem entrada


//7) padrão............................. 

end-> http://localhost:3333/produtos/1/pedidos com POST


json:

{
	
   "cpf": "111.222.444",
  "valor_total" : 18200
	
}

//8) padrão............................. 

end-> http://localhost:3333/vendedores com POST


json:

{
	"nome": "Genilda",
	"email": "genilda@hotmail.com",
	"senha": "12345678"
	
}


//9) padrão............................. 

end-> http://localhost:3333/vendedores com GET


sem entrada



//9) padrão............................. 

end-> http://localhost:3333/login com POST

 JSON:

{
	
	"email": "genilda@hotmail.com",
	"senha": "12345678"
	
}


//10) padrao ..................................

 //nesse endponts tenho o   headers :
x-access-token  : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjMxMDQzNTgwLCJleHAiOjE2MzExMjk5ODB9.DH7McYPOhj7O67nXeDmPDcF3Ks7taKr4ctR0_Il0EpE

end-> http://localhost:3333/painel com GET

sem entrada


//11) padrao:

end->  http://localhost:3333/lista no GET


//possuo query para as paginação 







