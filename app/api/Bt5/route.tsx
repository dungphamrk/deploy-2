export default async function GET(){
    console.log(1);
    const data = await fetch(" https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .catch((err)=>console.log(err))
}