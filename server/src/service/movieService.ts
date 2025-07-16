import { MovieModel } from "../db";
import { IMovie } from "../db/movieSchema";
import { SearchResult } from "../entities/commonTypes";
import { Movie } from "../entities/movie";
import { SearchCondition } from "../entities/SearchCondition";

export class MovieService {
  public static async add(movie: Movie): Promise<IMovie | string[]> {
    //1.对象类型转换
    const movieClassObj = Movie.transform(movie);

    //2.数据验证

    const errs = await movieClassObj.validateData();
    if (errs.length > 0) {
      return errs;
    }
    //3.添加到数据库
    return await MovieModel.create(movieClassObj);
  }

  public static async delete(id: string): Promise<void> {
    await MovieModel.deleteOne({ _id: id });
  }

  public static async edit(id: string, movie: Movie): Promise<string[]> {
    //1.对象类型转换
    const movieClassObj = Movie.transform(movie);

    //2.数据验证

    const errs = await movieClassObj.validateData(true);
    if (errs.length > 0) {
      return errs;
    }
    //3.修改
    await MovieModel.updateOne({ _id: id }, movie);
    return [];
  }

  /**
   * 根据电影id查找某部电影
   * @param id 电影id
   * @returns 
   */
  public static async findById(id: string): Promise<IMovie | null> {
    return await MovieModel.findById(id);
  }

  /**
   * 按条件[关键字，页码，页容量]搜索电影
   */
  public static async find(
    condition: SearchCondition
  ): Promise<SearchResult<IMovie>> {
    //1.对象类型转换
    const conditionObj = SearchCondition.transform(condition);

    // 2.数据验证
    const errs = await conditionObj.validateData();
    if(errs.length > 0){
        return {
            data:[],
            count:0,
            errors:errs
        }
    }

    //3.查询
    const movies = await MovieModel.find({
      name: { $regex: new RegExp(conditionObj.key) },
    })
      .skip((conditionObj.page - 1) * conditionObj.limit)
      .limit(conditionObj.limit);
    const count = await MovieModel.find({
      name: { $regex: new RegExp(conditionObj.key) },
    }).countDocuments();

    
    return {
        data:movies,
        count,
        errors:[]
    }

  }
}
