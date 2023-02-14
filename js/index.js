document.addEventListener("DOMContentLoaded", function () {
  // slå dig løs her...

  document.querySelector(".hero").innerHTML = `
  <img src="${hero.image}" alt="hero image" />
    <div class="hero__container">
    <h1>${hero.headline}</h1>
    <p>${hero.copy}</p>
    <button class="hero__btn"><img src="${hero.icon}">Explore</button>
    </div>
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

  document.querySelector(".facilities").innerHTML = `
    <h2>${facilities.headline}</h2>
    <div class="options">
    ${facilities.options
      .map(
        (option) => `
        <div class="option">
        <img src="${option.icon}" alt="icon" />
        <h3>${option.headline}</h3>
        <p>${option.text}</p>
        </div>
        `
      )
      .join("")}
    </div>
    `;

  document.querySelector(".sites").innerHTML = `
    <div class="sites__left">
     <h2>${sites.headline}</h2>
     <p>${sites.text}</p>
    <button class="sites__btn"><img src="${sites.btnicon}">Start</button>
    </div>
    <div class="places">
    ${sites.places
      .map(
        (place) => `
            <div class="place">
            <img src="${place.img}" alt="place image" />
            <h3>${place.name}</h3>
            <p>${place.city}</p>
            </div>
            `
      )
      .join("")}
    </div>
    `;

  document.querySelector(".advantages").innerHTML = `
    <h2 class="advantages__heading">Our Advantages</h2>
    <div class="advantage__container">
    </div>
    `;

  advantages.forEach((advantage) => {
    document.querySelector(".advantage__container").innerHTML += `
    <div class="advantage">
    <img src="${advantage.icon}" alt="icon" />
    <h3>${advantage.headline}</h3>
    <p>${advantage.text}</p>
    `;
  });

  //eksempel på at udskrive alle overskrifter i services i konsollen:
  services.forEach((service) => console.log(service.headline));
}); // DOMContentLoaded slut
