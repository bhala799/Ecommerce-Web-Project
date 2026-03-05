document.addEventListener("DOMContentLoaded",()=>{
    let productDetails=document.getElementById("productDetails");
    let allProducts=JSON.parse(localStorage.getItem("allProducts"));
    let productId=localStorage.getItem("productId")
    if(allProducts && productId){
        // console.log("we can show details");
        let selectedProduct=allProducts.find((v)=>{
            return v.id==productId
        })
        if(selectedProduct)
        {
            productDetails.innerHTML=`
            <main>
              <div id="first">
              <img src="${selectedProduct.thumbnail}"/>
              </div>
              <div id="second">
              <h3>${selectedProduct.title}</h3>
              <p><strong>Brand :</strong>:${selectedProduct.brand}</p>
              <p><strong>Category :</strong> :${selectedProduct.category}</p>
              <p><strong>Description :</strong> :${selectedProduct.description}</p>
              <h3> Price: &#8377;  ${Math.round((selectedProduct.price)*90)}</h3>
              <button id="cart">Add to Cart</button>
              <button id="home">Back to Home</button>
              </div>
            </main>
            <div id="customer">
            <h1>Customer reviews</h1>
            <hr>
            <div id="reviews"></div>
            </div>
            `
            let reviewsDiv = document.getElementById("reviews");
            selectedProduct.reviews.forEach(review => {
                reviewsDiv.innerHTML += `
                    <div class="review">
                        <p class="stars">${"❤️".repeat(review.rating)}${"🖤".repeat(5-review.rating)}</p>
                        <p><strong>${review.comment}</strong></p>
                        <p>By ${review.reviewerName} on ${new Date(review.date)}</p>
                        <hr>
                    </div>
                `;
            });
            document.getElementById("home").addEventListener("click",()=>{
                window.location.href="./home.html"
            })
            document.getElementById("cart").addEventListener("click",()=>{
               addToCart(selectedProduct);
            })
        }
        // console.log(selectedProduct);  
    }
    else{
        productDetails.innerHTML=`<p>Product not found</p>`
    }
})
function addToCart(product)
{
    let cart=JSON.parse(localStorage.getItem("cart")) || []
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("Product added Successfully ")
}