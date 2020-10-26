# Data integration

## instalação necessária:
- Instale o NODE.jS.
- Ao clonar o arquivo certifique-se que exista um arquivo chamado ".env" na pasta "raiz", caso não haja, seguir os passos abaixo:
    - Crie um arquivo chamado "**.env**" e abra-o;
    - Escreva a seguinte linha de código: **NODE_ENV=test**;
    - Salve;
- Abra o prompt de comando na pasta "raiz" do projeto e digite "npm install".
    - Aqui será instalado tudo que foi necessário para realização do projeto.


## Para rodar o programa:
- Abra o prompt de comando na pasta "raiz" do projeto.
- Para iniciar no **Windows**: 
    - Digite no prompt "npm start"
- Para iniciar no **Linux**:
    - Digite no prompt "npm run-script linux"

    - Este comando já irá iniciar o servidor e ler o arquivo 'q1_catalog.csv' e criar o banco de dados.

## Para dar o update no banco de dados [somente update do website]
- Coloque o arquivo ".csv" desejado na pasta "csvFiles"
- Após o servidor estar funcionando utilize o método **POST** para atualizar o banco de dados
- **POST** - localhost:3000/api/update/**"nome do arquivo inserido"**
    - **Obs.:** Utilizar o nome do arquivo com a extensão, nesse caso ".csv"
    - No challenge o arquivo utilizado foi o **q2_clienteData.csv**
- Certificar a inserção dos dados no banco.


## Usando Method GET da API

### Procurando pelo NAME e ZIP:
- **GET** - localhost:3000/api/search?name=**VALUE**&zip=**VALUE**

### Procurando pelo NAME:
- **GET** - localhost:3000/api/name/**VALUE**

### Procurando pelo ZIP:
- **GET** - localhost:3000/api/zip/**VALUE**


# Teste

## Rodando o teste
- Abra o prompt de comando na pasta "raiz" do projeto.
- Digite no prompt "npm test"
    - Este comando já irá iniciar o servidor e ler o arquivo 'q1_catalog.csv' e criar o banco de dados.
    - Após isto realizará os testes de:
        - Entrada na API
        - Coletando informação utilizando a api pelo método GET pelo NAME
        - Coletando informação utilizando a api pelo método GET pelo ZIP
        - Coletando informação utilizando a api pelo método GET pelo NAME e ZIP
        - Inserindo arquivo teste.csv utilizando a api pelo método POST e verificando se o elemento consta no db
    
- Teste utilizou os seguintes parâmetros de busca:
    - NAME: "tola"
    - ZIP: "229"
    - WEBSITE: "teste.com"
    - CSV_FILE: "teste.csv"
    - URL: "http://localhost:3000"

#### Obs.: Testes precisam ser melhorados.
