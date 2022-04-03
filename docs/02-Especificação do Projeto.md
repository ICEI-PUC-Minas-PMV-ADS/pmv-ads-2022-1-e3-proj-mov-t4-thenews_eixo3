# Especificações do Projeto

Para que o projeto em desenvolvimento seja efetivo e resolutivo quanto às demandas do usuário, foi levantado, por meio de entrevistas realizadas por uma integrante do grupo com possíveis usuários da aplicação, os desejos e frustrações desses. Esses dados coletados foram explicitados na forma de personas para auxiliar-nos com um melhor escopo do projeto. 

## Personas

A partir das entrevistas, foram definidas as personas representadas a seguir: 


Miguel Dias


![image](https://user-images.githubusercontent.com/83511889/161438036-c483c9aa-cb1e-4b40-aeb1-175323903fc7.png)



Idade: 26
Descrição: Estudante de Jornalismo.  	Plataformas e apps utilizados:
•	Instagram
•	Netflix
•	Amazon Prime
•	Uber
•	Ifood
•	Spotify
Motivações
•	Divulgar no bairro as notícias mais relevantes para os moradores
•	Divulgar vagas de emprego e oportunidades de negócio na região.	Frustrações
Dificuldade em encontrar notícias, novidades e oportunidades em sua região	Hobbies
•	Filmes e séries


_______________________________________________________________________________________________________________________________________________________________________

Maura Regina


![image](https://user-images.githubusercontent.com/83511889/161437928-f6fe8f1e-59aa-4714-8715-58beab2c1cae.png)


Idade: 40
Ocupação: Funcionária Pública. 	Plataformas e apps utilizados:
•	Instagram
Whatsapp 
Motivações
•	Utilizar o aplicativo para encontrar prestadores de serviço no meu bairro. Ex: doméstica, passeador com cães.

	Frustrações
Dificuldade em encontrar prestadores de serviços perto da minha residência. 	Hobbies
•	Filmes e séries
•	Redes sociais

_______________________________________________________________________________________________________________________________________________________________________


Catarina Varskovic


![image](https://user-images.githubusercontent.com/83511889/161438003-d007946d-92f1-406c-bd8b-dad4b30e2c03.png)



 	Idade: 21
Ocupação: Proprietária de loja de roupas	Plataformas e apps utilizados: 
•	Whatsapp 
•	Instagram
•	Facebook

Motivações
Utilizar o aplicativo para divulgar ofertas e promoções da minha loja 
	Frustrações
Apenas a panfletagem no bairro não atinge a todos os moradores de forma efetiva.	Hobbies
•	Filmes e séries
•	Redes sociais

_______________________________________________________________________________________________________________________________________________________________________

Fabiana Marques

![image](https://user-images.githubusercontent.com/83511889/161438016-a3e938fd-60d8-44d4-a88d-46b71010bba8.png)



 	Idade: 17
Ocupação: Confeiteira	Plataformas e apps utilizados: 
•	Whatsapp 
•	Instagram
•	Facebook

Motivações
•	Utilizar o aplicativo para divulgar o meu trabalho;
•	Utilizar o aplicativo no primeiro contato com potenciais clientes
	Frustrações
Dificuldade de divulgação do meu trabalho na minha região, devido no momento não conseguir arcar com o custo da panfletagem.	Hobbies
•	Redes sociais
•	Ifood
•	Instagram

_______________________________________________________________________________________________________________________________________________________________________






## Histórias de Usuários

A partir da compreensão do cotidiano das pessoas identificadas para o projeto, foram registradas as seguintes histórias de usuários:

![image](https://user-images.githubusercontent.com/83511889/161438077-2dfe2140-cb0b-4057-9d18-f7651136176a.png)


## Requisitos do Projeto

De acordo com Canguçu (2021) - “requisito é a propriedade que um software exibe para solucionar problemas reais, é a conjuntura indispensável para satisfazer um objeto”. Nessa perspectiva, apresentaremos, nesta seção, as propriedades que descrevem a interação entre nossa aplicação e o usuário. Primeiramente, há a descrição dos requisitos funcionais, isto é, do agrupamento de funcionalidades que compõem nossa aplicação. Em seguida, há a descrição dos requisitos não funcionais. “Aqueles relacionados ao uso da aplicação em termos de desempenho, usabilidade, confiabilidade, disponibilidade, segurança e tecnologias envolvidas” (CANGUÇU, 2021). 

## Requisitos Funcionais


A seguir, apresentamos uma tabela que reúne e identifica os requisitos funcionais do projeto, bem como indica a prioridade em que esses devem ser executados.


|   ID   |  Descrição  |    Prioridade    |
| :---         |     :---:      |          ---: |
| RF-01   | Usuário deve poder realizar um cadastro e login no aplicativo  | Alta    |
| RF-02  | Usuário deve poder visualizar as últimas mensagens/ posts na home page. | Alta    |
| RF-03   | Usuário deve poder inserir e trocar mensagens com o comerciante via comentários da mensagem.  | Alta    |
| RF-04   | Usuários podem marcar como fakenews um post.  | Média    |
| RF-05   | Usuário poderá filtrar por bairro as notícias.  | Média    |
| RF-06   | O Comerciante deve poder postar novidades e ofertas do seu estabelecimento. | Alta    |
| RF-07    | UUsuário poderá filtrar por tipo de notícia: promoção, evento, utilidade pública  | Média    |



## Requisitos Não Funcionais

|   ID   |  Descrição  |    Prioridade    |
| :---         |     :---:      |          ---: |
| RF-01   | O aplicativo deverá ser thinclient.  | Alta    |
| RF-02  | O aplicativo deverá ter uma fonte padrão para todas as escritas, com alterações apenas no tamanho. | Alta    |
| RF-03   | O aplicativo deve ser compatível com os principais dispositivos móveis do mercado.  | Alta    |



## Matriz de Rastreabilidade de Requisitos

Abaixo segue a nossa matriz de rastreabilidade de requisitos. Essa matriz é fundamental para execução do nosso projeto, uma vez que caso seja feita uma alteração, sabe-se quais requisitos serão afetados com tal mudança.

Segue tabela detalhada da Matriz de Rastreabilidade

![image](https://user-images.githubusercontent.com/83511889/161438456-37bfe200-b8f3-4e29-8580-7ed70f9de140.png)
Fonte: Autoria  Própria

## Diagrama de Caso de Uso

Segue abaixo o diagrama de caso de uso do nosso projeto. Ele é usado para descrever graficamente um subconjunto do modelo para simplificar a comunicação.

![image](https://user-images.githubusercontent.com/83511889/161438478-f63b512e-0cd3-4d00-a00e-cad2eba85f04.png)

Fonte: Autoria  Própria

## Diagrama de Entidade e Relacionamento

O desenvolvimento do aplicativo, assim como a ideia inicial, tem como propósito a troca de informações através de mensagens. Com isso em mente, podemos analisar o diagrama a seguir onde, uma pessoa pode logar no sistema criando um usuário. Um usuário pode realizar postagens de muitas mensagens, assim como um usuário também pode realizar vários comentários. Uma mensagem pode ter vários comentários. E por último, um usuário pode ter vários grupos de bairros, assim como um bairro pode receber várias mensagens. Com base nesse diagrama o desenvolvimento da persistência de dados no banco será desenvolvido

![image](https://user-images.githubusercontent.com/83511889/161438504-27364937-28c0-4b63-aedd-6320bf8fda63.png)

Fonte: Autoria  Própria


## Gerenciamento e Planejamento de Cronograma, Custo e Pessoal do Projeto


O gerenciamento de custos do projeto, é exemplificado na tabela a seguir e inclui os processos envolvidos em estimativas, orçamento e controle dos custos, de modo que o projeto consiga ser finalizando dentro do orçamento aprovado.

![image](https://user-images.githubusercontent.com/83511889/161438537-1e678e0a-9e55-4f59-9645-2a44ac3f945c.png)


![image](https://user-images.githubusercontent.com/83511889/161438548-7bee200b-397d-4103-83f6-2ce18810f9b3.png)


Fonte: Autoria  Própria




