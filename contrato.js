const select = document.getElementById("selectContrato");
const info = document.getElementById("infoContrato");

select.addEventListener("click", () => {
    info.classList.add("active");
});