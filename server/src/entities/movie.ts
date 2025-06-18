import { ArrayMinSize, IsInt, IsNotEmpty, Max, Min } from "class-validator";

export class Movie {
  @IsNotEmpty({ message: "电影名称不得为空" })
  public name: string;

  @IsNotEmpty({ message: "电影类型不得为空" })
  @ArrayMinSize(1, { message: "电影类型至少有一个" })
  public types: string[];

  @IsNotEmpty({ message: "上映地区不得为空" })
  @ArrayMinSize(1, { message: "上映至少有一个" })
  public areas: string[];

  @IsNotEmpty({ message: "时长不得为空" })
  @Min(1, { message: "时长不得小于1分钟" })
  @Max(999999, { message: "时长不得过长" })
  @IsInt({ message: "时长必须为整数" })
  public timeDuration: number; //单位：分钟

  @IsNotEmpty({ message: "是否正在热映不得为空" })
  public isHot: boolean = false;

  @IsNotEmpty({ message: "是否即将上映不得为空" })
  public isComing: boolean = false;

  @IsNotEmpty({ message: "是否为经典影片不得为空" })
  public isClassic: boolean = false;

  public description?:string;

  public poster?:string;
}
