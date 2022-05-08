# Plano de Testes de Software

|Caso de Teste            | CT-01 – Realizar login na tela inicial  |
|-------------------------|-----------------------------------------|
|Requisitos Associados    | RF-01                                   |
|Objetivo do teste        |O usuário deve poder realizar um cadastro e login no aplicativo |
|Passos                   | 1) Acessar o aplicativo 2) Clicar no botão CADASTRAR 3) Visualizar a tela de cadastro |
|Critérios de Êxito       |A página deve apresentar uma mensagem: “Usuário cadastrado com sucesso” |


|Caso de Teste            | CT-02 – Realizar login na tela inicial utilizando “3rd party”   |
|-------------------------|-----------------------------------------|
|Requisitos Associados    | RF-01                                   |
|Objetivo do teste        |Avaliar interação do usuário com login de facebook ou google.  |
|Passos                   | 1) Acessar o aplicativo  2) Clicar no botão fazer login  3) Visualizar a tela   |
|Critérios de Êxito       |A página deve apresentar uma mensagem: “Usuário cadastrado com sucesso” |


|Caso de Teste            | CT-03 – Visualizar mensagens do bairro    |
|-------------------------|-----------------------------------------|
|Requisitos Associados    | RF-02                                   |
|Objetivo do teste        |O usuário deve poder visualizar as últimas mensagens postadas no aplicativo   |
|Passos                   | 1) Acessar o aplicativo. 2) Realizar o login. 3) Clicar no menu “NEWS”   |
|Critérios de Êxito       |A página deve apresentar uma tela com as últimas mensagens postadas por usuários.  |


|Caso de Teste            | CT-04 – Inserir mensagens do bairro    |
|-------------------------|-----------------------------------------|
|Requisitos Associados    | RF-02                                   |
|Objetivo do teste        |O usuário deve poder inserir uma mensagem no aplicativo   |
|Passos                   | 1) Acessar o aplicativo. 2) Realizar o login. 3) Clicar no menu “NEWS” 4) Clicar no ícone inserir   |
|Critérios de Êxito       |A página deve apresentar uma a última mensagem inserida  |


|Caso de Teste            | CT-05 – Deletar mensagens do bairro     |
|-------------------------|-----------------------------------------|
|Requisitos Associados    | RF-02                                   |
|Objetivo do teste        |O usuário deve poder deletar uma mensagem no aplicativo    |
|Passos                   | 1) Acessar o aplicativo. 2) Realizar o login. 3) Clicar no menu “NEWS” 4) Clicar no ícone deletar    |
|Critérios de Êxito       |A página não deve mostrar a mensagem recém deletada.  |


|Caso de Teste            | CT-06 – Atualizar mensagens do bairro     |
|-------------------------|-----------------------------------------|
|Requisitos Associados    | RF-02                                   |
|Objetivo do teste        |O usuário deve poder atualizar uma mensagem no aplicativo     |
|Passos                   | 1) Acessar o aplicativo. 2) Realizar o login. 3) Clicar no menu “NEWS” 4) Clicar no ícone atualizar    |
|Critérios de Êxito       | A página deve mostrar a mensagem recém atualizada.   |


|Caso de Teste            | CT-07 – Inserir mensagens do bairro (Comerciante)     |
|-------------------------|-----------------------------------------|
|Requisitos Associados    | RF-03                                   |
|Objetivo do teste        | O comerciante deve poder inserir uma mensagem no aplicativo    |
|Passos                   | 1) Acessar o aplicativo. 2) Realizar o login como comerciante. 3) Clicar no menu “NEWS” 4) Clicar no ícone inserir    |
|Critérios de Êxito       | A página deve mostrar a mensagem recém inserida com o ícone de comerciante.    |


|Caso de Teste            | CT-08 – Trocar mensagens com o comerciante via comentários na mensagem.     |
|-------------------------|-----------------------------------------|
|Requisitos Associados    | RF-04                                  |
|Objetivo do teste        | O comerciante e o usuário devem poder trocar mensagens instantâneas no aplicativo     |
|Passos                   | 1) Acessar o aplicativo. 2) Realizar o login como comerciante ou usuário comum. 3) Clicar no menu “News” 4) Selecionar a mensagem 5) Clicar em comentar mensagem.    |
|Critérios de Êxito       | A página deve mostrar a mensagem recém inserida.    |


|Caso de Teste            | CT-09 – Marcar um post como fake news     |
|-------------------------|-----------------------------------------|
|Requisitos Associados    | RF-05                                   |
|Objetivo do teste        | Usuários podem marcar uma mensagem como fake news     |
|Passos                   | 1) Acessar o aplicativo. 2) Realizar o login como comerciante. 3) Clicar no menu “NEWS” 4) Clicar no ícone “FAKENEWS”     |
|Critérios de Êxito       | O post deve ser marcado e bloqueado temporariamente.    |

|Caso de Teste            | CT-10 – Filtrar por bairro      |
|-------------------------|-----------------------------------------|
|Requisitos Associados    | RF-06                                  |
|Objetivo do teste        | Usuários filtrar por bairro as notícias.     |
|Passos                   | 1) Acessar o aplicativo. 2) Realizar o login como comerciante. 3) Clicar no menu “NEWS” 4) Clicar no ícone “FILTRAR” 5) Selecionar o bairro      |
|Critérios de Êxito       | As mensagens devem ser filtradas e selecionadas por bairro.     |


|Caso de Teste            | CT-11 – Filtrar por tipo de noticia      |
|-------------------------|-----------------------------------------|
|Requisitos Associados    | RF-07                                   |
|Objetivo do teste        | Usuários filtrar o tipo de noticia      |
|Passos                   | 1) Acessar o aplicativo. 2) Realizar o login como comerciante. 3) Clicar no menu “NEWS” 4) Clicar no ícone “FILTRAR” 5) Selecionar os filtros: promoção, evento ou utilidade pública.    |
|Critérios de Êxito       | As mensagens devem ser filtradas e selecionadas pelo tipo de filtro escolhido.    |