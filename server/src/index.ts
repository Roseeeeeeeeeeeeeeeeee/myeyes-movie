import Express from 'express';
import { router as MovieRouter } from './routes/MovieRoute';
const app = Express();
app.use(Express.json());//配置中间件，用于解析请求体中的json数据
app.use('/api/movie',MovieRouter)

app.listen(3000)