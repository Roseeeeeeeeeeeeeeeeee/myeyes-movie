import Express from 'express';
import multer from 'multer';
import path from 'path';
import { responseHelper } from './ResponseHelper';
const suitableFileExt = [
    '.jpg',
    '.jpeg',
    '.gif',
    '.png',
    '.webp',
    '.tiff',
    '.bmp',
    '.heif',
    '.heic',
]; //允许上传的文件格式
const router = Express.Router();
//保存文件时的配置
const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../../public/upload'),
    //处理上传后的文件名
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const extName = path.extname(file.originalname);
        cb(null, uniqueName + extName);
    },
});
const upload = multer({
    storage: storage,
    limits: { fileSize: 3 * 1024 * 1024 }, // 上传的文件最大为3M
    fileFilter(req, file, cb) {
        const extName = path.extname(file.originalname);
        if (suitableFileExt.includes(extName)){
            cb(null, true);
        }
        else{
            cb(new Error("文件格式错误，请上传图片文件"));
        }
    },
}).single('imgFile');

router.post('/', (req, res) => {
    upload(req,res,(err)=>{
        if(err){
            responseHelper.sendErr(err.message,res)
        }else{
            //上传成功响应图片地址

            const url = `/upload/${req.file?.filename}`
            responseHelper.sendData(url,res)
        }
    })
});
export default router;
