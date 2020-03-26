# fastfeet
Este projeto é para um app para uma transportadora fictícia. Ele faz parte da atividade final do Bootcamp Go Stack da RocketSeat.
Este  o backend, implementado em Node.Js utilizando background jobs, e um banco chave-valor para implementação de um fila de jobs com o Redis para envio automático de e-mails. O sistema possui um sistema de notificações com o banco MongoDB e utiliza um banco relacional (PostgreSQL) com o uso da ferramenta Sequelize para a criação de migrations.
Para iniciar a fila de background jobs deve-se iniciar o Redis: yarn queue
Para testar a aplicação deve-se iniciá-la com yarn dev (lembre-se de antes rodar yarn queue - pode ser em outro aba do console)

