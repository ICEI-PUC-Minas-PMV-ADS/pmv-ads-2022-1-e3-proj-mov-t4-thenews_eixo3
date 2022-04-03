
# Metodologia

Nesta seção, apresentaremos a relação de ambientes de trabalho e as plataformas utilizadas, a gestão de código fonte e, por fim, o gerenciamento do projeto. 

## Relação de Ambientes de Trabalho


|   Ambiente   |  Plataforma  |    Link de Acesso    |
| :---         |     :---:      |          ---: |
| Repositório de códigofonte  | GitHub     | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e3-proj-mov-t4-thenews_eixo3    |



|   Ambiente   |  Plataforma  |     Link de Acesso    |
| :---         |     :---:      |          ---: |
|Documentos do projeto| OneDrive     | https://onedrive.live.com/view.aspxcid=0&resid=8A9B463EDDC34DF5!1659&origin=DigestEmail&extension=extension&e=QzUS16aUq0WfdCT91RUgFA&at=20    |


|   Ambiente   |  Plataforma  |     Link de Acesso    |
| :---         |     :---:      |          ---: |
| Projeto de Interface  | LucidApp     | https://lucid.app/lucidchart/757816aa-fd13-42c3-8b1e-5b94ed0e8986/edit?invitationId=inv_1a114228-9096-4c87-8885-d679f430d051&page=0_0#  |



|   Ambiente   |  Plataforma  |     Link de Acesso    |
| :---         |     :---:      |          ---: |
|Wireframes | Canva    | https://www.figma.com/file/lDmwJnp26j3yHD8165F2Iy/TheNews  |




|   Ambiente   |  Plataforma  |     Link de Acesso    |
| :---         |     :---:      |          ---: |
|Gerenciamento do Projeto | GitHub - Trello    | https://trello.com/b/nfIKyVMf/processo-de-produ%C3%A7%C3%A3o-mobile  |

## Gestão de Código Fonte

Para gestão do código fonte do software desenvolvido pela equipe, o grupo utiliza um processo baseado no Git Flow abordado por Vietro (2015), mostrado na Figura a seguir. Dessa forma, todas as manutenções no código são realizadas em branches separados, identificados como Hotfix, Release, Develop e Feature.



![image](https://user-images.githubusercontent.com/83511889/161430696-ce80b1b5-f13a-4b2d-bdf3-91101647040c.png)

Figura 2: Processo baseado no Git Flow
Fonte: Vietro (2015)

## Gerenciamento do Projeto

A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento. A organização acontece da seguinte forma:
● Scrum Master: Natália Gatti 
● Product Owner: Mateus Vitorino e Alfredo Latorre
● Equipe de Desenvolvimento: Denison Amaral e Mateus Vitorino
● Equipe de Design: Alfredo Latorre 

Para organização e distribuição das tarefas do projeto, a equipe está utilizando o GitHub e o Trello estruturado com as seguintes listas:

•	Backlog: recebe as tarefas a serem trabalhadas e representa o Product Backlog. Todas as atividades identificadas no decorrer do projeto também devem ser incorporadas à lista. 	
•	Para fazer: representa o Sprint Backlog - Sprint atual que estamos trabalhando. 
•	Fazendo: quando uma tarefa é iniciada, ela é movida para esta lista. 	
•	Teste: checagem de Qualidade (CQ). Quando as tarefas são concluídas, elas são movidas para o CQ. No final da semana, essa lista passa por revisão para garantir que tudo está correto. 	
•	Feito: nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontas para serem entregues ao usuário. Não há mais edições ou revisões a serem feitas. A tarefa está agendada e pronta para a ação.
•	Bloqueado: quando alguma coisa impede a conclusão da tarefa, ela é movida para esta lista juntamente com um comentário sobre o que está impedindo a realização da tarefa.




Segue abaixo uma imagem do nosso quadro no trello, que está disponibilizado na URL a seguir https://trello.com/b/nfIKyVMf/processo-de-produ%C3%A7%C3%A3o-mobile

![image](https://user-images.githubusercontent.com/83511889/161431398-246c5dd6-5af6-457c-a62a-c4d98d604857.png)

## Ferramentas

As ferramentas empregadas no projeto seguem listadas abaixo:
•	Editor de código: O editor escolhido foi o Visual Studio 2022 pela integração com o Framework ASP.NET e outras ferramentas utilizadas no projeto como Github e SQL.
•	Sistema Gerador de Banco de Dados:
•	Ferramentas de Comunicação: Whatsapp e Microsoft Teams, visto a facilidade em comunicação e a possibilidade de reuniões em vídeo.
•	Ferramentas de desenho: Utilizamos o Lucidchart pelo fato de criação de wireframes interativos e mais detalhados.
•	Ferramenta de Elaboração de Diagrama:
•	Ferramentas de Controle de Versão: Github
•	Ferramenta de Gerenciamento de projeto: PostgreSQL

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida




