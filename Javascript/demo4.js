function sum(...num){
    const sum=num.reduce((s,i)=>(s+i));
    return sum;
}
export default sum;