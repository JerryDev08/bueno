//---------------------------------------------CARROUSEL----------------------------------------//
document.addEventListener("DOMContentLoaded", function () {
  var divTextCarrousel = document.getElementById("carrousel-section");

  fetch(
    "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?fields=id,title,url,image,author,created,taxonomy.name&type=receta&limit=6"
  )
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (myJSONCarrousel) {
      // FUNCIONES DE CONVERSIÓN DE TIMESTAMP A FECHA LEGIBLE

      const optionsCarrousel = {
        year: "numeric",
        // month: "short",
        day: "numeric",
      };

      let timeStampCarrousel1 = myJSONCarrousel.data["0"].created;
      theDateCarrousel1 = new Date(timeStampCarrousel1 * 1000);
      dateStringCarrousel1 = theDateCarrousel1.toLocaleDateString(
        "es-MX",
        optionsCarrousel
      );

      let timeStampCarrousel2 = myJSONCarrousel.data["1"].created;
      theDateCarrousel2 = new Date(timeStampCarrousel2 * 1000);
      dateStringCarrousel2 = theDateCarrousel2.toLocaleDateString(
        "es-MX",
        optionsCarrousel
      );

      let timeStampCarrousel3 = myJSONCarrousel.data["2"].created;
      theDateCarrousel3 = new Date(timeStampCarrousel3 * 1000);
      dateStringCarrousel3 = theDateCarrousel3.toLocaleDateString(
        "es-MX",
        optionsCarrousel
      );

      let timeStampCarrousel4 = myJSONCarrousel.data["3"].created;
      theDateCarrousel4 = new Date(timeStampCarrousel4 * 1000);
      dateStringCarrousel4 = theDateCarrousel4.toLocaleDateString(
        "es-MX",
        optionsCarrousel
      );

      let timeStampCarrousel5 = myJSONCarrousel.data["4"].created;
      theDateCarrousel5 = new Date(timeStampCarrousel5 * 1000);
      dateStringCarrousel5 = theDateCarrousel5.toLocaleDateString(
        "es-MX",
        optionsCarrousel
      );

      let timeStampCarrousel6 = myJSONCarrousel.data["5"].created;
      theDateCarrousel6 = new Date(timeStampCarrousel6 * 1000);
      dateStringCarrousel6 = theDateCarrousel6.toLocaleDateString(
        "es-MX",
        optionsCarrousel
      );

      divTextCarrousel.innerHTML =
        `
        <div id="carrousel">
        <!-- <div class="slider-example"> -->
            <div class="carrousel-card-node">
                <div class="carrousel-card-image">
                <img src="` +
        myJSONCarrousel.data["0"].image.styles.square_circle +
        `" alt="` +
        myJSONCarrousel.data["0"].image.description +
        `">
                </div>
                <div class=carrousel-card-content onclick="location.href='#';" style="cursor: pointer;">
                    <div class=carrousel-border>
                    <p class="the-best">` +
        myJSONCarrousel.data["0"].taxonomy.name +
        `</p>
                    <h2>` +
        myJSONCarrousel.data["0"].title +
        `</h2>
                    <p class= "editor">` +
        dateStringCarrousel1 +
        ` <br> ` +
        myJSONCarrousel.data["0"].author.name +
        `</p>
                    </div>
                </div>
            </div>
            <div class="carrousel-card-node">
                <div class="carrousel-card-image">
                <img src="` +
        myJSONCarrousel.data["1"].image.styles.square_circle +
        `" alt="` +
        myJSONCarrousel.data["1"].image.description +
        `">
                </div>
                <div class=carrousel-card-content onclick="location.href='#';" style="cursor: pointer;">
                    <div class=carrousel-border>
                    <p class="the-best">` +
        myJSONCarrousel.data["1"].taxonomy.name +
        `</p>
                    <h2>` +
        myJSONCarrousel.data["1"].title +
        `</h2>
                    <p class= "editor">` +
        dateStringCarrousel2 +
        ` <br> ` +
        myJSONCarrousel.data["1"].author.name +
        `</p>
                    </div>
                </div>
            </div>
            <div class="carrousel-card-node">
                <div class="carrousel-card-image">
                <img src="` +
        myJSONCarrousel.data["2"].image.styles.square_circle +
        `" alt="` +
        myJSONCarrousel.data["2"].image.description +
        `">
                </div>
                <div class=carrousel-card-content onclick="location.href='#';" style="cursor: pointer;">
                    <div class=carrousel-border>
                    <p class="the-best">` +
        myJSONCarrousel.data["2"].taxonomy.name +
        `</p>
                    <h2>` +
        myJSONCarrousel.data["2"].title +
        `</h2>
                    <p class= "editor">` +
        dateStringCarrousel3 +
        ` <br> ` +
        myJSONCarrousel.data["2"].author.name +
        `</p>
                    </div>
                </div>
            </div>
            <div class="carrousel-card-node">
                <div class="carrousel-card-image">
                <img src="` +
        myJSONCarrousel.data["3"].image.styles.square_circle +
        `" alt="` +
        myJSONCarrousel.data["3"].image.description +
        `">
                </div>
                <div class=carrousel-card-content onclick="location.href='#';" style="cursor: pointer;">
                    <div class=carrousel-border>
                    <p class="the-best">` +
        myJSONCarrousel.data["3"].taxonomy.name +
        `</p>
                    <h2>` +
        myJSONCarrousel.data["3"].title +
        `</h2>
                    <p class= "editor">` +
        dateStringCarrousel4 +
        ` <br> ` +
        myJSONCarrousel.data["3"].author.name +
        `</p>
                    </div>
                </div>
            </div>
            <div class="carrousel-card-node">
                <div class="carrousel-card-image">
                <img src="` +
        myJSONCarrousel.data["4"].image.styles.square_circle +
        `" alt="` +
        myJSONCarrousel.data["4"].image.description +
        `">
                </div>
                <div class=carrousel-card-content onclick="location.href='#';" style="cursor: pointer;">
                    <div class=carrousel-border>
                    <p class="the-best">` +
        myJSONCarrousel.data["4"].taxonomy.name +
        `</p>
                    <h2>` +
        myJSONCarrousel.data["4"].title +
        `</h2>
                    <p class= "editor">` +
        dateStringCarrousel5 +
        ` <br> ` +
        myJSONCarrousel.data["4"].author.name +
        `</p>
                    </div>
                </div>
            </div>
            <div class="carrousel-card-node">
                <div class="carrousel-card-image">
                <img src="` +
        myJSONCarrousel.data["5"].image.styles.square_circle +
        `" alt="` +
        myJSONCarrousel.data["5"].image.description +
        `">
                </div>
                <div class=carrousel-card-content onclick="location.href='#';" style="cursor: pointer;">
                    <div class=carrousel-border>
                    <p class="the-best">` +
        myJSONCarrousel.data["5"].taxonomy.name +
        `</p>
                    <h2>` +
        myJSONCarrousel.data["5"].title +
        `</h2>
                    <p class= "editor">` +
        dateStringCarrousel6 +
        ` <br> ` +
        myJSONCarrousel.data["5"].author.name +
        `</p>
                    </div>
                </div>
            </div>
            
        </div>
      `;

      // CARROUSEL JAVASCRIPT

      $("#carrousel").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">PREV</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">NEXT</button>',
      });
    });
});

//---------------------------------------------healthy-cards----------------------------------------//

document.addEventListener("DOMContentLoaded", function () {
  var divTextHealthy = document.getElementById("healthy");

  fetch(
    "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,title,url,image,preference,taxonomy.name&type=receta&limit=3&offset=3"
  )
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (myJSONHealthy) {
      divTextHealthy.innerHTML =
        `
      <div class=card-node>
            <div class=card-image>
                <a href=""><img src="` +
        myJSONHealthy.data["0"].image.styles.square_circle +
        `" alt="` +
        myJSONHealthy.data["0"].image.description +
        `"></a>
            </div>
            <div class=card-content onclick="location.href='#';" style="cursor: pointer;">
                <div class=border>
                <p>` +
        myJSONHealthy.data["0"].taxonomy.name +
        `</p>
                <h2>` +
        myJSONHealthy.data["0"].title +
        `</h2>
            </div>
            </div>
        </div>
        <div class=card-node>
            <div class=card-image>
                <a href=""><img src="` +
        myJSONHealthy.data["1"].image.styles.square_circle +
        `" alt="` +
        myJSONHealthy.data["1"].image.description +
        `"></a>
            </div>
            <div class=card-content onclick="location.href='#';" style="cursor: pointer;">
                <div class=border>
                <p>` +
        myJSONHealthy.data["1"].taxonomy.name +
        `</p>
                <h2>` +
        myJSONHealthy.data["1"].title +
        `</h2>
                </div>
            </div>
        </div>
        <div class=card-node>
            <div class=card-image>
                <a href=""><img src="` +
        myJSONHealthy.data["2"].image.styles.square_circle +
        `" alt="` +
        myJSONHealthy.data["2"].image.description +
        `"></a>
            </div>
            <div class=card-content onclick="location.href='#';" style="cursor: pointer;">
                <div class=border>
                <p>` +
        myJSONHealthy.data["2"].taxonomy.name +
        `</p>
                <h2>` +
        myJSONHealthy.data["2"].title +
        `</h2>
            </div>
            </div>
        </div>`;
    });
});
//---------------------------------------------big-cards----------------------------------------//
var cardcita;

fetch(
  "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,title,url,created,summary,image,preference,author,taxonomy.name&type=receta&limit=2&offset=6"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonBigcard) {
    cardcita = jsonBigcard;

    document.getElementById("central_card_img1").innerHTML =
      '<img src= "' + cardcita.data[0].image.url + '" alt="">';
    document.getElementById("Category-central").innerHTML =
      cardcita.data[0].taxonomy.name;
    document.getElementById("title-central").innerHTML = cardcita.data[0].title;
    let timeStamp_value = cardcita.data[0].created;
    theDate = new Date(timeStamp_value * 1000);
    dateString = theDate.toLocaleDateString();
    document.getElementById("datetime").innerHTML = dateString;
    document.getElementById("spancito").innerHTML =
      cardcita.data[0].author.name;
    document.getElementById("parrafin").innerHTML = cardcita.data[0].summary;
  });

var cardcita;

fetch(
  "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,title,url,created,summary,image,preference,author,taxonomy.name&type=receta&limit=1&offset=7"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonwithData) {
    cardcita = jsonwithData;

    document.getElementById("Category-central2").innerHTML =
      cardcita.data[0].taxonomy.name;
    document.getElementById("title-central2").innerHTML =
      cardcita.data[0].title;
    let timeStamp_value = cardcita.data[0].created;
    theDate = new Date(timeStamp_value * 1000);
    dateString = theDate.toLocaleDateString();
    document.getElementById("datetime2").innerHTML = dateString;
    document.getElementById("spancitito").innerHTML =
      cardcita.data[0].author.name;
    document.getElementById("parrafito").innerHTML = cardcita.data[0].summary;
    document.getElementById("central_card_img2").innerHTML =
      '<img src= "' + cardcita.data[0].image.url + '" alt="">';
    console.log(cardcita.data[0].image.url);
  });
//--------------------------------------------cards-left------------------------------------------//
var card_left;

fetch(
  "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,title,url,created,summary,image,preference,author,taxonomy.name&type=receta&limit=1&offset=8"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonwithData) {
    card_left = jsonwithData;

    document.getElementById("category-left-img").innerHTML =
      '<img src= "' + card_left.data[0].image.url + '" alt="">';
    console.log(card_left.data[0].image.url);
    document.getElementById("Category-left").innerHTML =
      card_left.data[0].taxonomy.name;
    document.getElementById("title-left").innerHTML = card_left.data[0].title;
    let timeStamp_value = card_left.data[0].created;
    theDate = new Date(timeStamp_value * 1000);
    dateString = theDate.toLocaleDateString();
    document.getElementById("datetime-left").innerHTML = dateString;
    document.getElementById("spancin").innerHTML =
      card_left.data[0].author.name;
    document.getElementById("parragrafito-left").innerHTML =
      card_left.data[0].summary;
  });

var card_left1;

fetch(
  "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,title,url,created,summary,image,preference,author,taxonomy.name&type=receta&limit=1&offset=9"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonwithData) {
    card_left1 = jsonwithData;

    document.getElementById("category-left-img1").innerHTML =
      '<img src= "' + card_left1.data[0].image.url + '" alt="">';
    console.log(card_left1.data[0].image.url);
    document.getElementById("Category-left1").innerHTML =
      card_left1.data[0].taxonomy.name;
    document.getElementById("title-left1").innerHTML = card_left1.data[0].title;
    let timeStamp_value = card_left1.data[0].created;
    theDate = new Date(timeStamp_value * 1000);
    dateString = theDate.toLocaleDateString();
    document.getElementById("datetime-left1").innerHTML = dateString;
    document.getElementById("spancin1").innerHTML =
      card_left1.data[0].author.name;
    document.getElementById("parragrafito-left1").innerHTML =
      card_left1.data[0].summary;
  });

var card_left2;

fetch(
  "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,title,url,created,summary,image,preference,author,taxonomy.name&type=receta&limit=1&offset=10"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonwithData) {
    card_left2 = jsonwithData;

    document.getElementById("category-left-img2").innerHTML =
      '<img src= "' + card_left2.data[0].image.url + '" alt="">';
    console.log(card_left2.data[0].image.url);
    document.getElementById("Category-left2").innerHTML =
      card_left2.data[0].taxonomy.name;
    document.getElementById("title-left2").innerHTML = card_left2.data[0].title;
    let timeStamp_value = card_left2.data[0].created;
    theDate = new Date(timeStamp_value * 1000);
    dateString = theDate.toLocaleDateString();
    document.getElementById("datetime-left2").innerHTML = dateString;
    document.getElementById("spancin2").innerHTML =
      card_left2.data[0].author.name;
    document.getElementById("parragrafito-left2").innerHTML =
      card_left2.data[0].summary;
  });

//---------------------------------------------cards-right----------------------------------------//
document.addEventListener("DOMContentLoaded", function () {
  var divTextLeft = document.getElementById("cards-derecha");

  fetch(
    "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,title,url,image,author,created,taxonomy.name&type=receta&limit=5&offset=11"
  )
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (myJSONLeft) {
      const optionsLeft = { year: "numeric", month: "short", day: "numeric" };
      let timeStampLeft1 = myJSONLeft.data["0"].created;
      theDateLeft1 = new Date(timeStampLeft1 * 1000);
      dateStringLeft1 = theDateLeft1.toLocaleDateString("es-MX", optionsLeft);

      let timeStampLeft2 = myJSONLeft.data["1"].created;
      theDateLeft2 = new Date(timeStampLeft2 * 1000);
      dateStringLeft2 = theDateLeft2.toLocaleDateString("es-MX", optionsLeft);

      let timeStampLeft3 = myJSONLeft.data["2"].created;
      theDateLeft3 = new Date(timeStampLeft3 * 1000);
      dateStringLeft3 = theDateLeft3.toLocaleDateString("es-MX", optionsLeft);

      let timeStampLeft4 = myJSONLeft.data["3"].created;
      theDateLeft4 = new Date(timeStampLeft4 * 1000);
      dateStringLeft4 = theDateLeft4.toLocaleDateString("es-MX", optionsLeft);

      let timeStampLeft5 = myJSONLeft.data["4"].created;
      theDateLeft5 = new Date(timeStampLeft5 * 1000);
      dateStringLeft5 = theDateLeft5.toLocaleDateString("es-MX", optionsLeft);

      divTextLeft.innerHTML =
        `
        <div class="general">
            <div class="card" onclick="location.href='#'">
                <div class="imagen">
                    <img src="` +
        myJSONLeft.data["0"].image.styles.square_circle +
        `" alt="` +
        myJSONLeft.data["0"].image.description +
        `">
                </div>
                <div class="contenido">
                    <h2>` +
        myJSONLeft.data["0"].title +
        `</h2>
                    <p>` +
        dateStringLeft1 +
        ` <br> ` +
        myJSONLeft.data["0"].author.name +
        `</p>
                </div>
            </div>
        </div>
            
        <div class="general">
            <div class="card" onclick="location.href='#'">
                <div class="imagen">
                    <img src="` +
        myJSONLeft.data["1"].image.styles.square_circle +
        `" alt="` +
        myJSONLeft.data["1"].image.description +
        `">
                </div>
                <div class="contenido">
                    <h2>` +
        myJSONLeft.data["1"].title +
        `</h2>
                    <p>` +
        dateStringLeft2 +
        `<br> ` +
        myJSONLeft.data["1"].author.name +
        `</p>
                </div>
            </div>
        </div>
           
        <div class="general">
            <div class="card" onclick="location.href='#'">
                <div class="imagen">
                    <img src="` +
        myJSONLeft.data["2"].image.styles.square_circle +
        `" alt="` +
        myJSONLeft.data["2"].image.description +
        `">
                </div>
                <div class="contenido">
                    <h2>` +
        myJSONLeft.data["2"].title +
        `</h2>
                    <p>` +
        dateStringLeft3 +
        ` <br> ` +
        myJSONLeft.data["2"].author.name +
        `</p>
                </div>
            </div>
        </div>

        <div class="general">
            <div class="card" onclick="location.href='#'">
                <div class="imagen">
                    <img src="` +
        myJSONLeft.data["3"].image.styles.square_circle +
        `" alt="` +
        myJSONLeft.data["3"].image.description +
        `">
                </div>
                <div class="contenido">
                    <h2>` +
        myJSONLeft.data["3"].title +
        `</h2>
                    <p>` +
        dateStringLeft4 +
        ` <br> ` +
        myJSONLeft.data["3"].author.name +
        `</p>
                </div>
            </div>
        </div>
            
        <div class="general">
            <div class="card" onclick="location.href='#'">
                <div class="imagen">
                    <img src="` +
        myJSONLeft.data["4"].image.styles.square_circle +
        `" alt="` +
        myJSONLeft.data["4"].image.description +
        `">
                </div>
                <div class="contenido">
                    <h2>` +
        myJSONLeft.data["4"].title +
        `</h2>
                    <p>` +
        dateStringLeft5 +
        ` <br> ` +
        myJSONLeft.data["4"].author.name +
        `</p>
                </div>
            </div>
        </div>
       
        `;
    });
});
