export interface SearchResult<T>{
    data : T [],//查询到的数据
    count:number,//查询到的数据总数
    errors: string[];//数据验证不通过的错误信息
}