
import { MovieService } from "./service/movieService";

const m: any = {};
m.name = "铁雨";
m.types = ["政治"];
m.timeDuration = 100;
m.areas = ["韩国"];
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

// MovieService.findById('6854def261a8c69509e9bcb2').then(res=>{
//     console.log(res);

// })
// function getRandom(min:number , max:number):number{
//     const gap = max - min;
//     return Math.floor(gap * Math.random() + min);
// }
// for (let i = 0; i < 100; i++) {
//   m.name = "电影" + i;
//   m.types = ["政治"];
//   m.timeDuration = getRandom(60,240);
//   m.areas = ["韩国"];
//   MovieService.add(m).then((res) => {
//     if (Array.isArray(res)) {
//       console.log(res);
//     } else {
//       console.log("写入数据成功");
//     }
//   });
// }

const c:any  ={};
c.key = '铁'
c.page = 1;
MovieService.find(c).then((res)=>{
    if(res.errors.length > 0){
        console.log(res.errors)
    }else{
        res.data.forEach(m=>{
            console.log(m.name);
            
        });
        console.log("查询到的电影总数是"+res.count);
        
    }
})