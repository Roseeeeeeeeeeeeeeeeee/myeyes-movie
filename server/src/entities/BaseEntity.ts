import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

//所有实体类的基类，提供一些实体通用方法
export abstract class BaseEntity {
    /**
     *将一个纯对象转化为类的对象
     * @param plainObj 待转换的对象
     * @returns
     */
    protected static plainToClass<T>(
        plainObj: object,
        Class: new (...args: any) => T
    ): T {
        if (plainObj instanceof Class) {
            return plainObj;
        }
        return plainToInstance(Class, plainObj);
    }

    /**
     * 验证数据
     * @returns
     */
    public async validateData(
        skipMissingProperties: boolean = false
    ): Promise<string[]> {
        const errs = await validate(this, { skipMissingProperties });
        const temp = errs.map((err) => {
            if (err.constraints) {
                return Object.values(err.constraints);
            }
        });
        const res: string[] = [];
        temp.forEach((it) => {
            if (it) {
                res.push(...it);
            }
        });
        return res;
    }
}
