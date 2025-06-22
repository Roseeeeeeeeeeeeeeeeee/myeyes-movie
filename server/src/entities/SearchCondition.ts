import { IsInt, Min } from "class-validator";
import { BaseEntity } from "./BaseEntity";
import { Type } from "class-transformer";

//搜索条件
export class SearchCondition extends BaseEntity{
    @Type(()=>String)
    public key:string = '';

    /**
     * 搜索结果的页码
     */
    @IsInt({message:'页码必须为整数'})
    @Min(1,{message:'页码不得小于1'})
    @Type(()=>Number)
    public page:number = 1

    /**
     * 搜索结果的每页容量
     */
    @IsInt({message:'页容量必须为整数'})
    @Min(1,{message:'页容量不得小于1'})
    @Type(()=>Number)
    public limit:number = 10;

    static transform(plainObj: object):SearchCondition{
        return super.plainToClass(plainObj,SearchCondition);
    }
}