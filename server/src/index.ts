import { validate } from "class-validator";
import { Movie } from "./entities/movie";
import { plainToInstance } from "class-transformer";

const mov:any= {}
mov.name = 111;
mov.types = ['政治'];
mov.timeDuration = 1.2;
const movie = plainToInstance(Movie,mov);
console.log(movie);

validate(movie).then(err=>{
    console.log(err)
})