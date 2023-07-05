const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');
const menuItems = document.querySelectorAll(".menu-item");
const nocturnoMob = document.querySelector("#nocturno-mob");
const nocturno1024 = document.querySelector("#nocturno-1024");
const diurnoMob = document.querySelector("#diurno-mob");
const body = document.querySelector("#body");
const header = document.querySelector("#header");


abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});
cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

menuItems.forEach(function (item) {
  item.addEventListener("click", function(e){
    const currentItem = document.querySelector(".active");
    currentItem.classList.remove("active");
    e.target.classList.add("active");
  });
});
diurnoMob.addEventListener("click", () => {
  body.classList.remove("night");
  header.classList.remove("night");
  nav.classList.remove("night");

});
nocturnoMob.addEventListener("click", () => {
  body.classList.add("night");
  header.classList.add("night");
  nav.classList.add("night");
});

// nocturnoMob.forEach(function (noche){
//   noche.addEventListener("click", function(e) {
//     const mobile = document.querySelector(".night");
//     mobile.classList.remove("night");
//     e.target.classList.add("night");
//   });
// });
//
// nocturno1024.addEventListener("click", function(e) {
//   const noc1024 = document.querySelector(".night1024");
//   noc1024.classList.remove("night1024");
//   noc1024.classList.add("night1024");
// });
