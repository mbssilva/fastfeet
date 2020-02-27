// Importando os módulos
import Bee from 'bee-queue';

// Importando os jobs
import newOrderEmail from '../app/jobs/newOrderEmail';
import cancellationMail from '../app/jobs/cancellationMail';

// Importando as configurações do Redis
import redisConfig from '../config/redis';

const jobs = [newOrderEmail, cancellationMail];

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  init() {
    // Iniciando a fila, ligando as filas ao Redis, instanciando para cada fila uma
    // instância do banco de dados Redis na propriedade bee
    jobs.forEach((job) => {
      this.queues[job.key] = {
        // A variável "bee" poderia ter qualquer nome
        bee: new Bee(job.key, {
          radis: redisConfig,
        }),
        handle: job.handle,
      };
    });
  }

  add(key, job) {
    // Adicionando novos jobs à fila que possui a chave "key"
    return this.queues[key].bee.createJob(job).save();
  }

  processQueue() {
    // Percorrendo o vetor jobs para extrair a chave, e para cada chave, que é
    // uma propriedade de queues e possui um objeto contendo bee e handle(),
    // extrair a instância do Redis e a função handle(). Então a instância
    // processa a função
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      bee.process(handle);
    });
  }
}

export default new Queue();


