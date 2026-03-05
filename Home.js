let product=[]
function fetchData()
{
    fetch("https://dummyjson.com/products").then((res)=>{
        return res.json();
    }).then((val)=>{
        console.log(val.products);
        product=val.products;
        localStorage.setItem("allProducts",JSON.stringify(product))
        displayProduct(product);
    })
}
function displayProduct(prod){
    let output="";
    prod.map((val)=>{
        output+=`
        <main>
        <div id="image">
         <img src="${val.thumbnail}"/>
        </div>
        <h2 id="title">${val.title}</h2>
         <div id="info">
          <h3 >Rating: ${val.rating}</h3>
          <h3>&#8377;${Math.round((val.price)*90)}</h3>
         </div>
         <div id="info">
           <h3>InStock: ${val.stock}</h3>
          <button onclick="details(${val.id})">Details</button>
         </div>
        </main>
        `
    })
    document.getElementById("productContainer").innerHTML=output;
}
fetchData();
document.getElementById("searchbar").addEventListener("input",function searchItem(event){
    let searchTerm=event.target.value.toLowerCase();
    let filteredProduct=product.filter((v)=>{
        return (
        v.title.toLowerCase().includes(searchTerm) ||
        v.category.toLowerCase().includes(searchTerm)
    );
    })
    displayProduct(filteredProduct);
})

function details(productId){
    console.log(productId);
    localStorage.setItem("productId",productId);
    window.location.href="./viewMore.html"
    
}