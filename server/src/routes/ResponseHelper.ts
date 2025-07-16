//用于封装各类接口回复细节
import { Response } from 'express-serve-static-core';
import { SearchResult as ISearchResult } from '../entities/commonTypes';
export class responseHelper {
    /**
     * 请求不成功时的处理,响应一个错误
     * @param errInfo 错误信息
     * @param res 回复对象
     */
    static sendErr(errInfo: string | string[], res: Response) {
        let err: string;
        if (Array.isArray(errInfo)) {
            err = errInfo.join(';');
        } else {
            err = errInfo;
        }
        res.send({
            err,
            data: null,
        });
    }

    /**
     * 请求成功后的响应
     * @param mes 响应信息
     * @param res 回复对象
     */
    static sendData(data: any, res: Response) {
        res.send({
            data,
            err: '',
        });
    }
    /**
     * 分页相关请求成功后的响应
     * @param mes 回复信息
     * @param res 回复对象
     */
    static sendPageMes<T>(result: ISearchResult<T>, res: Response) {
        if (!(result.errors.length > 0)) {
            res.send({
                data: result.data,
                err: '',
                total: result.count,
            });
        } else {
            this.sendErr(result.errors, res);
        }
    }
}
