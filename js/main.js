const productList = document.querySelectorAll(".product-item");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");
let modalTitle = document.querySelector(".modalTitle");
let modalDescription = document.querySelector(".modalDescription");
let modalPrice = document.querySelector(".modalPrice");
let modalImg = document.querySelector(".modalImg");

// close the modal 
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});

// product list 
productList.forEach((product) => {
  const button = product.querySelector("button");
  const title = product.querySelector(".title");
  const description = product.querySelector(".description");
  const price = product.querySelector(".price");
  const thumb = product.querySelector(".thumb");
  button.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    modalTitle.innerText = title.innerText;
    modalDescription.innerText = description.innerText;
    modalPrice.innerText = price.innerText;
    modalImg.src = thumb.src;
  });
});
