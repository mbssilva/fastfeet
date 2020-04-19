# fastfeet
Este projeto é para um sistema para uma transportadora fictícia. Ele foi desenvolvido como atividade final do Bootcamp Go Stack da RocketSeat, um bootcamp focado na stack React (JS e Native) e Node.js.

O projeto é composto de Frontend Web, Mobile e backend na forma de uma Api Rest. Nele, foram usadas diversas ferramentas e tecnologias, desde o backend (que utiliza o banco de dados PostgreSQL, o MongoDB e o Redis, ferramentas para envio automático de e-mails e mais), até o frontend que utiliza a Arquitetura Flux e foi implementado na como uma SPA através do Framework React.

Em toda a aplicação foi utilizado o ESLint para padronização da escrita.


# Backend
O backend foi desenvolvido em Node.js. Ele ficou responsável por manipular o banco de dados SQL (PostgreSQL) através do ORM (Object-Relational Mapper) Sequelize. Essa aplicação foi segmentada em MVC e rotas (algumas públicas outras privadas), junto do cors, de modo que as rotas quando devidamente acessadas executa uma função específica do Controller correspondente.
1) Rotas e Controllers:
  routes.post('/users', UserController.store);

  routes.post('/sessions', SessionController.store);

  routes.get('/recipients', jwtAuthorization, RecipientController.index);
  routes.post('/recipients', jwtAuthorization, RecipientController.store);
  routes.put('/recipients', jwtAuthorization, RecipientController.update);
  routes.delete('/recipients', jwtAuthorization, RecipientController.delete);

  routes.get('/deliverers', jwtAuthorization, DelivererController.index);
  routes.post('/deliverers', jwtAuthorization, DelivererController.store);
  routes.put('/deliverers', jwtAuthorization, DelivererController.update);
  routes.delete('/deliverers', jwtAuthorization, DelivererController.delete);

  routes.post('/files', upload.single('file'), FileController.store);

  routes.get('/orders', jwtAuthorization, OrderController.index);
  routes.post('/orders', jwtAuthorization, OrderController.store);
  routes.put('/orders', jwtAuthorization, OrderController.update);
  routes.delete('/orders', jwtAuthorization, OrderController.delete);

  routes.get('/deliveryman/:id', DeliverymanController.index);
  routes.get('/deliveryman/:id/deliveries', DeliverymanController.show);
  routes.post('/deliveryman/:id', DeliverymanController.store);
  routes.put('/deliveryman', DeliverymanController.update);

  routes.get('/problems', jwtAuthorization, ProblemController.index);
  routes.get('/problems/:id', ProblemController.show);
  routes.post('/problems', ProblemController.store);
  routes.delete('/problems', jwtAuthorization, ProblemController.delete);
  
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

 + Colocando o Backend para funcionar (portanto, aqui as pastas são apresentadas a partir da raíz da pasta backend):
 - Lembre-se de rodar yarn para instalar as dependências após baixar o projeto
 - O backend roda na porta 3003, mas isso pode ser alterado no arquivo server.js (em ./src)
 - Uma vez que um banco de PostgreSQL, um mongoDB e um Redis estejam disponíveis para uso, pode-se criar um arquivo .env (da mesma forma que o .env.example, e adicionar as devidas configurações lá). Contudo, como eu tiver problemas na aplicação com o uso das variáveis de ambiente, acabei não utilizando o .env)
 - Configure os bancos de dados conforme abaixo. Caso tenha problema com as variáveis de ambiente, as configurações podem ser feitas diretamente nos arquivos de configuração (./src/config - database para o postgreSQL, mongo para o mongoDB, redis para o Redis)
  MAIL_TRAP_USER: b5885566263**** (mude para o seu user)
  MAIL_TRAP_PASSWORD: 363b1a3927**** (mude para a sua senha)
  MAIL_TRAP_PORT: 2525 (mude para a sua porta)
  MAIL_TRAP_HOST: smtp.mailtrap.io (mude para seu host)

  JWT_SECRET: fastfeetjwtsecret

  DB_DIALECT: postgres
  DB_HOST: localhost
  DB_USERNAME: postgres
  DB_PASSWORD: docker
  DB_DATABASE: fastfeet

  MONGO_URL: mongodb://localhost:27017/mongofeet
  
  REDIS_HOST: 127.0.0.1
  REDIS_PORT: 6379
  
  - Configura também o envio de e-mails. Eu utilizei a ferramenta Mail trap, e caso as variáveis de ambiente não funcionem corretamente, pode-se acessar o arquivo de configuração do Mail diretamente em .src/config (Mail.js)
Uma vez configurada a aplicação, deve-se migrar as configurações criadas com o Sequelize com o comando sequelize-cli db:migrate, que rodará migrations pendentes
  - Uma vez que o backend está com os bancos devidamente configurados, basta rodar na raiz da pasta do backend yarn start para iniciar o servidor e em um terminal separado yarn queue para permitir a execução dos background jobs.
  - Dessa forma o backend deverá estar funcionando corretamente
  
