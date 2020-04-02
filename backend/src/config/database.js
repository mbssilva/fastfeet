require('dotenv/config');

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  define: {
    timestamps: true, // Garante que haverá uma coluna criated_at e updated_at na DB
    underscored: true,
    underscoredAll: true,
  },
};
