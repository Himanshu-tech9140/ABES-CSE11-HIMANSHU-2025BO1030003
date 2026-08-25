function sum(...num){
    if(num.length === 0) return 0;
    const sum=num.reduce((s,i)=>(s+i));
    return sum;
}
export default sum;