instalação necessária:
1 - Instale o NODE.jS
2 - abra o prompt de comando na pasta "raiz" do projeto e digite "npm install"
    Aqui será instalado tudo que foi necessário para realização do projeto

Para rodar o programa:
1 - abra o prompt de comando na pasta onde está o arquivo "server.js"
2 - digite no prompt "node server.js"
    Este comando já irá ler o arquivo 'q1_catalog.csv' e criar o banco de dados

Para dar o update no banco de dados
1 - coloque o arquivo desejado na pasta 'csvFiles"
2 - após o servidor estar funcionando utilize o método POST para atualizar o banco de dados
3 - POST - localhost:3000/api/update/"nome do arquivo inserido"
    Obs.: utilizar o nome do arquivo com a extensão, nesse caso ".csv"
    No challenge o arquivo utilizado foi o q2_clienteData.csv
4 - verificar a inserção dos dados no banco.


Usando Method GET da API

Procurando pelo NAME:
1 - GET - localhost:3000/api/name/"nome"

Procurando pelo ZIP:
1 - GET - localhost:3000/api/zip/"zip"
