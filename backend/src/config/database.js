require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  define: {
    timestamps: true, // Garante que haverá uma coluna criated_at e updated_at na DB
    underscored: true,
    underscoredAll: true,
  },
};
