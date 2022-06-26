const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const tableBody = document.getElementsByTagName("tbody")[0];

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});
async function getData() {
  const res = await fetch("https://dummyjson.com/products");
    const responseData = await res.json();
    return responseData;
}
console.log(getData())

tableBody.innerHTML = tbody_data
  .map((product) => {
    let { title, brand, price, stock, rating } = product;
    return `
    <tr>
                <td>${title}</td>
                <td>${brand}</td>
                <td>${price}</td>
                <td class="warning">${stock}</td>
                <td class="primary">${rating}</td>
              </tr>`;
  })
  .join("");


  orders.map(order=>{
    const tr= document.createElement('tr');
    const trContent=`
    <td>${title}</td>
    <td>${brand}</td>
    <td>${price}</td>
    <td class="warning">${stock}</td>
    <td class="primary">${rating}</td>
    `;
    tr.innerHTML =trContent
    document.querySelector('table tbody').appendChild(tr)
  })
