import { MovieService } from "./service/movieService";

const m:any = {};
m.name = '铁雨';
m.types = ['政治'];
m.timeDuration = 100;
m.areas = ['韩国'];

// MovieService.add(m).then(res=>{
//     if(Array.isArray(res)){
//         console.log(res)
//     }else{
//         console.log('写入数据成功');
//     }
// })

// MovieService.delete('6854def261a8c69509e9bcb2')

// MovieService.edit('6854def261a8c69509e9bcb2',m).then(errs =>{
//     console.log(errs);
// })

MovieService.findById('6854def261a8c69509e9bcb2').then(res=>{
    console.log(res);
    
})