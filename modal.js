const modal = document.getElementById("modal");
const modal_overay = document.getElementById("overay");
const modal_content = document.getElementById("content");
const closeModal = modal_content.querySelector("button");

const handleModal = () => {
  modal.classList.toggle("open");
  modal_overay.classList.toggle("open");
  modal_content.classList.toggle("open");
};

modal_overay.addEventListener("click", handleModal);
closeModal.addEventListener("click", handleModal);
