function solution(n)
{
   return (n+"").split("").reduce((acc, cur, idx, arr)=>{
       acc += parseInt(cur)     
       return acc}, 0)
}