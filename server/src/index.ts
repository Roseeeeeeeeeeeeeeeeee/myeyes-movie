import { MovieModel } from "./db";
MovieModel.find().then(movs=>{
    console.log(movs);
})