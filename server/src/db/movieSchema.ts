import Mongoose from 'mongoose'
import { Movie } from '../entities/movie'
export interface IMovie  extends Movie,Mongoose.Document{}
 const movieSchema = new Mongoose.Schema<IMovie>({
    name: String,
    types: [String],
    areas: [String],
    timeDuration: Number,
    isHot: Boolean,
    isComing: Boolean,
    isClassic: Boolean,
    description:String,
    poster:String

 },{
    versionKey:false
 })
 export default Mongoose.model<IMovie>('Movie',movieSchema)