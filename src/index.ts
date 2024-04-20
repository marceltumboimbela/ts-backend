import express from 'express';
import { registerRoutes } from './routes';
const app = express();
app.use(express.json())
registerRoutes(app);

app.listen(3000, () => console.log('Server running'));