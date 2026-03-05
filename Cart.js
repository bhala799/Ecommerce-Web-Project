document.addEventListener("DOMContentLoaded",()=>{
    displayCart();
})
function displayCart()
{
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    let cartContent=document.getElementById("cartContent");
    let totalPrice=document.getElementById("totalPrice");
    // console.log(cart);
    // console.log(cartContent);
    // console.log(totalPrice); 
    cartContent.innerHTML="";
    let totalBill=0;
    if(cart.length===0)
    {
        cartContent.innerHTML=`Your cart is Empty. Start Shopping .........`;
    }
    cart.map((product,i)=>{
        totalBill+=Math.floor((product.price)*90)  
      console.log(product,i);
      let newProd=document.createElement("div")
      newProd.setAttribute("class","prod-info");
      newProd.innerHTML=`
      <div id="image-prod">
      <div id="image">
       <img src="${product.thumbnail}" alt="${product.title}" />
      </div>
      <div id="product-details">
      <h2>${product.title}</h2>
      <p>Availability: ${product.availabilityStatus}</p>
      <p>Category: ${product. category} </p>
      <p>Return Policy: ${product.returnPolicy}</p>
      <p>Shipping Information: ${product.shippingInformation}</p>
      <p>Stock: ${product.stock}</p>
      <p>Warranty Information: ${product.warrantyInformation}</p>
      <p>Price:<i class="bi bi-currency-rupee"></i>${product.price.toFixed (2) * 90}</p>
      </div>
      <div id="button">
         <button onclick="RemoveFromCart(${i})">Remove</button>
      </div>
      </div>
      `;
      cartContent.append(newProd);
    })
    totalPrice.innerHTML=`<h2 id="totalprice">Total Price: <i class="bi bi-currency-rupee"></i>${totalBill}</h2>`
}
function RemoveFromCart(index)
{
    // console.log(index,"removeCart");
    let cart=JSON.parse(localStorage.getItem("cart"));
    // console.log(cart);
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    displayCart();
}