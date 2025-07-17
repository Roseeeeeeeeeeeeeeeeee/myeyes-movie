import Express from 'express';
import { router as MovieRouter } from './routes/MovieRoute';
import UploadRouter from './routes/UploadRoute'
const app = Express();
app.use("/upload", Express.static("public/upload"));
app.use(Express.json());//配置中间件，用于解析请求体中的json数据
app.use('/api/movie',MovieRouter)
app.use('/api/upload',UploadRouter)
app.listen(3000)