# fastfeet
Este projeto é para um sistema para uma transportadora fictícia. Ele foi desenvolvido como atividade final do Bootcamp Go Stack da RocketSeat, um bootcamp focado na stack React (JS e Native) e Node.js.

O projeto é composto de Frontend Web, Mobile e backend na forma de uma Api Rest. Nele, foram usadas diversas ferramentas e tecnologias, desde o backend (que utiliza o banco de dados PostgreSQL, o MongoDB e o Redis, ferramentas para envio automático de e-mails e mais), até o frontend que utiliza a Arquitetura Flux e foi implementado na como uma SPA através do Framework React.

Em toda a aplicação foi utilizado o ESLint para padronização da escrita.


# Backend
O backend foi desenvolvido em Node.js. Ele ficou responsável por manipular o banco de dados SQL (PostgreSQL) através do ORM (Object-Relational Mapper) Sequelize. Essa aplicação foi segmentada em MVC e rotas (algumas públicas outras privadas), junto do cors (para permitir eventualmente um controle de acesso ao backend), de modo que as rotas quando devidamente acessadas executa uma função específica do Controller correspondente.
1) Rotas e Controllers:
  - routes.post('/users', UserController.store);

  - routes.post('/sessions', SessionController.store);

  - routes.get('/recipients', jwtAuthorization, RecipientController.index);
  - routes.post('/recipients', jwtAuthorization, RecipientController.store);
  - routes.put('/recipients', jwtAuthorization, RecipientController.update);
  - routes.delete('/recipients', jwtAuthorization, RecipientController.delete);

  - routes.get('/deliverers', jwtAuthorization, DelivererController.index);
  - routes.post('/deliverers', jwtAuthorization, DelivererController.store);
  - routes.put('/deliverers', jwtAuthorization, DelivererController.update);
  - routes.delete('/deliverers', jwtAuthorization, DelivererController.delete);

  - routes.post('/files', upload.single('file'), FileController.store);

  - routes.get('/orders', jwtAuthorization, OrderController.index);
  - routes.post('/orders', jwtAuthorization, OrderController.store);
  - routes.put('/orders', jwtAuthorization, OrderController.update);
  - routes.delete('/orders', jwtAuthorization, OrderController.delete);

  - routes.get('/deliveryman/:id', DeliverymanController.index);
  - routes.get('/deliveryman/:id/deliveries', DeliverymanController.show);
  - routes.post('/deliveryman/:id', DeliverymanController.store);
  - routes.put('/deliveryman', DeliverymanController.update);

  - routes.get('/problems', jwtAuthorization, ProblemController.index);
  - routes.get('/problems/:id', ProblemController.show);
  - routes.post('/problems', ProblemController.store);
  - routes.delete('/problems', jwtAuthorization, ProblemController.delete);
  
Para realizar o login e autenticar o usuário e sua sessão de login (para, inclusive, mantê-lo logado caso o site seja fechado), foi utilizado o módulo jsonwebtoken para gerar um token caso o usuário realmente seja um user da aplicação.
Para lidar com arquivos de imagem, foi utilizado o Multer, uma vez que o backend precisava lidar com as fotos do entregadores e das assinaturas dos destinatários (uma vez que para confirmar o recebimento da encomenda, o entregador precisava tirar uma foto da assinatura do destinatário).
Entre as outras ferramentas utilizadas, pode-se destacar:
 - Mongoose: Para manipular o banco MongoDB utilizado na aplicação.
 - Nodemailer: Para envio automático de e-mails.
 - Bee-queue: Juntamente com o Redis, para implementar background jobs.

O banco SQL foi utilizado para armazenar dados da aplicação de maneira relacional, como entregas, dados de entregadores, destinatários, arquivos, problemas nas entregas e outros mais. O Mongo foi utilizado para armazenar dados de notificações, sendo que esses dados são utilizados nos e-mails enviados automaticamente pelo nodemailer através de SMTP. Esses envios ocorrem de maneira assíncrona com a aplicação, pois as ordens de envio são armazenadas no Redis e da maneira como a aplicação foi implementada, pode ser posta para rodar em um server ou processador (ou terminal) separado do restante da aplicação.
O PostgreSQL, o mongoDB e o Redis foram executados em containers no docker.

+ Problemas e aprendizados que gostaria de destacar:
- Com 101% de certeza, nunca mais implemento um backend sem documentá-lo concomitantemente. Em certo ponto, eu já estava perdido sobre o que cada rota fazia, e isso me atrasou no desenvolvimento da parte Mobile e Web.
- Planejar os recursos e a estrutura da API antes de sair codando. Em certo ponto, já não sabia o que já tinha sido implementado, ou os nomes que foram utilizados para os controllers, ou o que um determinado controller fazia exatamente. Percebi que o melhor é antes de codar, analisar o que precisa ser implementado e desenhar uma árvore ou um diagrama do que precisa estar na aplicação, estabelendo critérios e um sistema de ToDo's ou checklist para não me perder.

 --> Colocando o Backend para funcionar (portanto, aqui as pastas são apresentadas a partir da raiz da pasta backend):
 - Lembre-se de rodar yarn para instalar as dependências após baixar o projeto
 - O backend roda na porta 3003, mas isso pode ser alterado no arquivo server.js (em ./src)
 - Uma vez que um banco de PostgreSQL, um mongoDB e um Redis estejam disponíveis para uso, pode-se criar um arquivo .env (da mesma forma que o .env.example, e adicionar as devidas configurações lá). Contudo, como eu tiver problemas na aplicação com o uso das variáveis de ambiente, acabei não utilizando o .env)
 - Configure os bancos de dados conforme abaixo. Caso tenha problema com as variáveis de ambiente, as configurações podem ser feitas diretamente nos arquivos de configuração (./src/config - database para o postgreSQL, mongo para o mongoDB, redis para o Redis) (.env.example disponível em ./)  
  - Configura também o envio de e-mails. Eu utilizei a ferramenta Mail trap, e caso as variáveis de ambiente não funcionem corretamente, pode-se acessar o arquivo de configuração do Mail diretamente em .src/config (Mail.js)
Uma vez configurada a aplicação, deve-se migrar as configurações criadas com o Sequelize com o comando sequelize-cli db:migrate, que rodará migrations pendentes
  - Uma vez que o backend está com os bancos devidamente configurados, basta rodar na raiz da pasta do backend yarn start para iniciar o servidor e em um terminal separado yarn queue para permitir a execução dos background jobs.
  - Dessa forma o backend deverá estar funcionando corretamente
  
# Frontend
O frontend foi desenvolvido em ReactJs. Ele é a parte web da aplicação, que é acessada apenas pela administração da transportadora. Essa aplicação foi dividida em páginas que são roteadas com o react-router-dom e consome o backend da aplicação utilizando a ferramenta axios para realizar as requisições.

Entre as ferramentas utilizadas pode-se destacar:
 - Redux: para permitir a criação de estados globais e do redux-persit para persistir dados armazenados no estado de um determinado reducer do redux.
 - Styled-components: Uma ferramenta muito útil para encapsular a estilização de um componenente e permitir uma agilidade maior na hora de criar os componentes.
 - Reactotron: para debugar a aplicação.

O Reactotron está instalado e configurado na aplicação. Ele funcionará automaticamente caso a aplicação esteja em modo de desenvolvimento.

+ Problemas e aprendizados que gostaria de destacar:
 - Ficou claro que preciso melhorar minhas habilidades na estilização. Desenvolver um senso de proporção melhor. Não digo que tenho problemas com a sintaxe do css por exemplo, mas percebo que devo me aperfeiçoar na hora de estilizar páginas e componenetes.
 - Por não ter documentado a Api do backend tive bastante dificuldades na hora de integrar o frontend ao backend e perdi muito tempo analisando os retornos da api e debugando a aplicação, o que me atrasou e me atrapalhou bastante. Em virtude das dificuldades que foram surgindo, realizei algumas modificações no código do backend.

 --> Colocando o Frontend para funcionar (portanto, aqui as pastas são apresentadas a partir da raiz da pasta frontend):
 - Lembre-se de rodar yarn para instalar as dependências após baixar o projeto
 - O frontend roda na porta 3000
 - Execute yarn start na raiz para iniciar a página de desenvolvimento

 # Mobile
 --> A aplicação Mobile é apenas para android. Não houve tempo de testá-la no ios.

 O mobile foi desenvolvido com o React Native. Ele é a parte mobile da aplicação, que é acessada apenas pelos entregadores da transportadora. Essa aplicação foi dividida em páginas que são roteadas com o react-navigation (versão 5) e consome o backend da aplicação utilizando a ferramenta axios para realizar as requisições.
 Essa aplicação também usa o Redux para criar estados globais, o styled-components para criar componentes encapsulando a lógica, a marcação e a estilização, e o Reactotron.

Particularmente essa foi a parte que mais gostei de trabalhar de todo o projeto.

Entre as ferramentas utilizadas pode-se destacar:
 - React-navigation(versão 5): Já havia utilizado outras versões, mas essa versão do react-navigation foi a que achei a melhor para trabalhar (desde instalar e configurar até a implementação com a nova sintaxe que veio com essa versão).
 - Styled-components: Além dos fatos expostos anteriormente em relação à essa ferramenta, destaco que ela é um facilitador por evitar o uso de uma sintaxe ligeiramente diferente (que é o que ocorre geralmente no React Native)
 - Reactotron: para debugar a aplicação.

+ Problemas e aprendizados que gostaria de destacar:
 - Inacreditavelmente essa foi a parte da aplicação que mais gostei e que menos tive dificuldades (só apanhei para configurar o react-native, mas depois deu tudo certo)
 - Por não ter documentado a Api do backend tive bastante dificuldades na hora de integrar o frontend ao backend e perdi muito tempo analisando os retornos da api e debugando a aplicação, o que me atrasou e me atrapalhou bastante (porém bem menos que no frontend). Em virtude das dificuldades que foram surgindo, realizei algumas modificações no código do backend.

+ Colocando o Mobile para funcionar (portanto, aqui as pastas são apresentadas a partir da raiz da pasta mobile):
 - Lembre-se de rodar yarn para instalar as dependências após baixar o projeto
 - O mobile roda na porta 8081
 - Eu utilizei um celular android conenctado via USB ao computador.
 - Após conectado o cleular (USB) e devidamente configurado (depuração ativada), deve-se rodar yarn android para que a aplicação seja instalada no celular.
 - Depois de instalado deve-se rodar yarn start.
 - Pode ser necessário redirecionar a porta 8081, nesse caso, execute: adb reverse tcp:8081 tcp:8081
 - Para buscar a aplicação mobile funcionar corretamente, pode ser necessário redirecionar a porta do server (3003). Execute: adb reverse tcp:3003 tcp:3003 e yarn start --reset-cache


