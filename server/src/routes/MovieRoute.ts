import Express from 'express';
import { responseHelper } from './ResponseHelper';
import { MovieService } from '../service/movieService';
import { SearchCondition } from '../entities/SearchCondition';
export const router = Express.Router();
/**
 * 查找某部电影
 */
router.get('/:id', async (req, res) => {
    try {
        const mov = await MovieService.findById(req.params.id);
        responseHelper.sendData(mov, res);
    } catch {
        responseHelper.sendErr('id错误',res)
    }
});
/**
 *  分页查找电影
 */
router.get('/', async (req, res) => {
    const result = await MovieService.find(
        req.query as unknown as SearchCondition
    );
    responseHelper.sendPageMes(result, res);
});
/**
 * 上传某部电影
 */
router.post('/', async (req, res) => {
    const result = await MovieService.add(req.body);
    if (Array.isArray(result)) {
        //上传未成功，获得错误数组
        responseHelper.sendErr(result, res);
    } else {
        responseHelper.sendData(result, res);
    }
});
/**
 * 修改某部电影
 */
router.put('/:id', async (req, res) => {
    try {
        const errs = await MovieService.edit(req.params.id, req.body);
        if (errs.length > 0) {
            //出现错误
            responseHelper.sendErr(errs, res);
        } else {
            responseHelper.sendData('success', res);
        }
    } catch {
        responseHelper.sendErr('id错误', res);
    }
});
/**
 * 删除某部电影
 */
router.delete('/:id', async (req, res) => {
    try {
        await MovieService.delete(req.params.id);
        responseHelper.sendData('success', res);
    } catch {
        responseHelper.sendErr('id错误', res);
    }
});
