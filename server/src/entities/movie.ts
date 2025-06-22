import { Type } from "class-transformer";
import "reflect-metadata";
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  Max,
  Min,
} from "class-validator";
import { BaseEntity } from "./BaseEntity";

export class Movie  extends BaseEntity{
  @IsNotEmpty({ message: "电影名称不得为空" })
  @Type(() => String)
  public name: string;

  @IsNotEmpty({ message: "电影类型不得为空" })
  @ArrayMinSize(1, { message: "电影类型至少有一个" })
  @IsArray({ message: "必须为字符串数组" })
  @Type(() => String)
  public types: string[];

  @IsNotEmpty({ message: "上映地区不得为空" })
  @ArrayMinSize(1, { message: "上映至少有一个" })
  @IsArray({ message: "必须为字符串数组" })
  @Type(() => String)
  public areas: string[];

  @IsNotEmpty({ message: "时长不得为空" })
  @Min(1, { message: "时长不得小于1分钟" })
  @Max(999999, { message: "时长不得过长" })
  @IsInt({ message: "时长必须为整数" })
  @Type(() => Number)
  public timeDuration: number; //单位：分钟

  @IsNotEmpty({ message: "是否正在热映不得为空" })
  @Type(() => Boolean)
  public isHot: boolean = false;

  @IsNotEmpty({ message: "是否即将上映不得为空" })
  @Type(() => Boolean)
  public isComing: boolean = false;

  @IsNotEmpty({ message: "是否为经典影片不得为空" })
  @Type(() => Boolean)
  public isClassic: boolean = false;

  @Type(() => String)
  public description?: string;
  @Type(() => String)
  public poster?: string;

  // /**
  //  *将一个纯对象转化为Movie类的对象
  //  * @param plainObj 待转换的对象
  //  * @returns
  //  */
  // public static plainToClass(plainObj: object): Movie {
  //   if (plainObj instanceof Movie) {
  //     return plainObj;
  //   }
  //   return plainToInstance(Movie, plainObj);
  // }
  public static transform(plainObj:object):Movie{
    return super.plainToClass(plainObj,Movie)
  }

  
}
