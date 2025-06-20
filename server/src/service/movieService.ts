import { MovieModel } from "../db";
import { IMovie } from "../db/movieSchema";
import { Movie } from "../entities/movie";

export class MovieService{
    public static async add(movie:Movie): Promise<IMovie | string[]>{
        //1.对象类型转换
        const movieClassObj =  Movie.plainToClass(movie);

        //2.数据验证

        const errs = await movieClassObj.validateData();
        if(errs.length > 0){
            return errs
        }
        //3.添加到数据库
        return await MovieModel.create(movieClassObj);
    }

    public static async delete(id:string):Promise<void>{
        await MovieModel.deleteOne({_id : id});
    }

    public static async edit(id:string,movie:Movie):Promise<string[]>{
         //1.对象类型转换
         const movieClassObj =  Movie.plainToClass(movie);

         //2.数据验证

         const errs = await movieClassObj.validateData(true);
         if(errs.length > 0){
             return errs
         }
         //3.修改
         await  MovieModel.updateOne({_id : id},movie)
         return []

    }

    public static async findById(id:string):Promise<IMovie|null>{
        return await MovieModel.findById(id)
    }
}