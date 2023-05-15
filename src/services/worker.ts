import { httpClient } from "./httpApi";
import cron, { ScheduledTask } from 'node-cron';

const job: ScheduledTask = cron.schedule('* * * * * *', async () => {
  try {
    await httpClient({
      method: "GET",
      url: `${process.env.SERVER_URL}/api/marcas/subscribe`,
      headers: null,
    });    
    console.log('Endpoint chamado com sucesso!');
  } catch (error) {
    console.error(`Erro ao chamar endpoint: ${error.message}`);
  }
},{
  scheduled: true,
  timezone: "America/Sao_Paulo",
});

setTimeout(() => {
  job.start(); 
}, 50000); 

