const container = document.querySelector(".owl-carousel");
const container2 = document.querySelector(".owl-carousel:nth-child(2)");

const renderGames = async () => {
  let uri = "http://localhost:3000/games";
  let api = "http://localhost:3000/games2";

  const res = await fetch(uri);
  //   esta constante guarda os dados que estão no link da uri
  const games = await res.json();
  console.log(games);

  let template = "";
  games.forEach((game) => {
    template += `
    <div class="item">
    <img class="box-filme" src="${game.avatarUrl}" alt="${game.title}" srcset="" />
    </div>
    `;
  });

  container.innerHTML = template;

  const result = await fetch(api);
  const games2 = await result.json();
  console.log(games2);

  let template2 = "";
  games2.forEach((game) => {
    template2 += `
    <div class="item">
    <img class="box-filme" src="${game.avatarUrl}" alt="${game.title}" srcset="" />
    </div>
    `;
  });
  console.log(template2);

  container2.innerHTML = template2;

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
};

window.addEventListener("DOMContentLoaded", () => renderGames());
