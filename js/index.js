document.addEventListener("DOMContentLoaded", function () {
  // slå dig løs her...
  document.querySelector(".hero").innerHTML = `
    <img src="${hero.image}" alt="hero image" />
    <h1>${hero.headline}</h1>
    <p>${hero.copy}</p>
    <img src="${hero.icon}" alt="icon" />
    `;

  services.forEach((service) => {
    document.querySelector(".services").innerHTML += `
        <div class="service">
        <img src="${service.illustration}" alt="illustration" />
        <h2>${service.headline}</h2>
        <p>${service.text}</p>
        <a href="#">${service.linktext}</a>
        </div>
        `;
  });

  //eksempel på at udskrive alle overskrifter i services i konsollen:
  services.forEach((service) => console.log(service.headline));
}); // DOMContentLoaded slut
