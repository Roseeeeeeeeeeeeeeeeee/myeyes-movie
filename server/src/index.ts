import { validate } from "class-validator";
import { Movie } from "./entities/movie";

const mov= new Movie()
mov.name = '特工';
mov.types = ['政治'];

mov.timeDuration = 1.2;
validate(mov).then(err=>{
    console.log(err)
})