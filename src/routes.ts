import { Express } from 'express';

export function registerRoutes(app: Express) {
  app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello, world!' });
  });

  // handle request parameters
  app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
  });

  // handle query parameters
  app.get('/', (req, res) => {
    const name = req.query.name || 'World';
    res.send(`Hello ${name}`);
  });

  app.post('/api/message', (req, res) => {
    const message = req.body.message;
    res.send({ receivedMessage: message });
  });
}