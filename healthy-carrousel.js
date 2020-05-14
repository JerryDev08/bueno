// FEATURE CARROUSEL

document.addEventListener('DOMContentLoaded', function(){

  var divTextCarrousel = document.getElementById('carrousel-section');

  fetch('http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?fields=id,title,url,image,author,created,taxonomy.name&type=receta&limit=6')
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(myJSONCarrousel) {
        
        // FUNCIONES DE CONVERSIÓN DE TIMESTAMP A FECHA LEGIBLE

        const optionsCarrousel = {year: 'numeric', month: 'short', day: 'numeric'};

        let timeStampCarrousel1=myJSONCarrousel.data["0"].created;
        theDateCarrousel1 = new Date(timeStampCarrousel1 * 1000);
        dateStringCarrousel1 = theDateCarrousel1.toLocaleDateString('es-MX', optionsCarrousel);

        let timeStampCarrousel2=myJSONCarrousel.data["1"].created;
        theDateCarrousel2 = new Date(timeStampCarrousel2 * 1000);
        dateStringCarrousel2 = theDateCarrousel2.toLocaleDateString('es-MX', optionsCarrousel);

        let timeStampCarrousel3=myJSONCarrousel.data["2"].created;
        theDateCarrousel3 = new Date(timeStampCarrousel3 * 1000);
        dateStringCarrousel3 = theDateCarrousel3.toLocaleDateString('es-MX', optionsCarrousel);

        let timeStampCarrousel4=myJSONCarrousel.data["3"].created;
        theDateCarrousel4 = new Date(timeStampCarrousel4 * 1000);
        dateStringCarrousel4 = theDateCarrousel4.toLocaleDateString('es-MX', optionsCarrousel);

        let timeStampCarrousel5=myJSONCarrousel.data["4"].created;
        theDateCarrousel5 = new Date(timeStampCarrousel5 * 1000);
        dateStringCarrousel5 = theDateCarrousel5.toLocaleDateString('es-MX', optionsCarrousel);

        let timeStampCarrousel6=myJSONCarrousel.data["5"].created;
        theDateCarrousel6 = new Date(timeStampCarrousel6 * 1000);
        dateStringCarrousel6 = theDateCarrousel6.toLocaleDateString('es-MX', optionsCarrousel);

        divTextCarrousel.innerHTML = `
        <div id="carrousel">
        <!-- <div class="slider-example"> -->
            <div class="carrousel-card-node">
                <div class="carrousel-card-image">
                <img src="` + myJSONCarrousel.data["0"].image.styles.square_circle + `" alt="` + myJSONCarrousel.data["0"].image.description + `">
                </div>
                <div class=carrousel-card-content onclick="location.href='#';" style="cursor: pointer;">
                    <div class=carrousel-border>
                    <p class="the-best">` + myJSONCarrousel.data["0"].taxonomy.name + `</p>
                    <h2>` + myJSONCarrousel.data["0"].title + `</h2>
                    <p class= "editor">` + dateStringCarrousel1 + ` <br> ` + myJSONCarrousel.data["0"].author.name + `</p>
                    </div>
                </div>
            </div>
            <div class="carrousel-card-node">
                <div class="carrousel-card-image">
                <img src="` + myJSONCarrousel.data["1"].image.styles.square_circle + `" alt="` + myJSONCarrousel.data["1"].image.description + `">
                </div>
                <div class=carrousel-card-content onclick="location.href='#';" style="cursor: pointer;">
                    <div class=carrousel-border>
                    <p class="the-best">` + myJSONCarrousel.data["1"].taxonomy.name + `</p>
                    <h2>` + myJSONCarrousel.data["1"].title + `</h2>
                    <p class= "editor">` + dateStringCarrousel2 + ` <br> ` + myJSONCarrousel.data["1"].author.name + `</p>
                    </div>
                </div>
            </div>
            <div class="carrousel-card-node">
                <div class="carrousel-card-image">
                <img src="` + myJSONCarrousel.data["2"].image.styles.square_circle + `" alt="` + myJSONCarrousel.data["2"].image.description + `">
                </div>
                <div class=carrousel-card-content onclick="location.href='#';" style="cursor: pointer;">
                    <div class=carrousel-border>
                    <p class="the-best">` + myJSONCarrousel.data["2"].taxonomy.name + `</p>
                    <h2>` + myJSONCarrousel.data["2"].title + `</h2>
                    <p class= "editor">` + dateStringCarrousel3 + ` <br> ` + myJSONCarrousel.data["2"].author.name + `</p>
                    </div>
                </div>
            </div>
            <div class="carrousel-card-node">
                <div class="carrousel-card-image">
                <img src="` + myJSONCarrousel.data["3"].image.styles.square_circle + `" alt="` + myJSONCarrousel.data["3"].image.description + `">
                </div>
                <div class=carrousel-card-content onclick="location.href='#';" style="cursor: pointer;">
                    <div class=carrousel-border>
                    <p class="the-best">` + myJSONCarrousel.data["3"].taxonomy.name + `</p>
                    <h2>` + myJSONCarrousel.data["3"].title + `</h2>
                    <p class= "editor">` + dateStringCarrousel4 + ` <br> ` + myJSONCarrousel.data["3"].author.name + `</p>
                    </div>
                </div>
            </div>
            <div class="carrousel-card-node">
                <div class="carrousel-card-image">
                <img src="` + myJSONCarrousel.data["4"].image.styles.square_circle + `" alt="` + myJSONCarrousel.data["4"].image.description + `">
                </div>
                <div class=carrousel-card-content onclick="location.href='#';" style="cursor: pointer;">
                    <div class=carrousel-border>
                    <p class="the-best">` + myJSONCarrousel.data["4"].taxonomy.name + `</p>
                    <h2>` + myJSONCarrousel.data["4"].title + `</h2>
                    <p class= "editor">` + dateStringCarrousel5 + ` <br> ` + myJSONCarrousel.data["4"].author.name + `</p>
                    </div>
                </div>
            </div>
            <div class="carrousel-card-node">
                <div class="carrousel-card-image">
                <img src="` + myJSONCarrousel.data["5"].image.styles.square_circle + `" alt="` + myJSONCarrousel.data["5"].image.description + `">
                </div>
                <div class=carrousel-card-content onclick="location.href='#';" style="cursor: pointer;">
                    <div class=carrousel-border>
                    <p class="the-best">` + myJSONCarrousel.data["5"].taxonomy.name + `</p>
                    <h2>` + myJSONCarrousel.data["5"].title + `</h2>
                    <p class= "editor">` + dateStringCarrousel6 + ` <br> ` + myJSONCarrousel.data["5"].author.name + `</p>
                    </div>
                </div>
            </div>
            
        </div>
      `;

        // CARROUSEL JAVASCRIPT

        $('#carrousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">PREV</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">NEXT</button>',
      });
    });    
    });


// FEATURE HEALTHY

document.addEventListener('DOMContentLoaded', function(){

  var divTextHealthy = document.getElementById('healthy');

  fetch('http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,title,url,image,preference,taxonomy.name&type=receta&limit=3&offset=3')
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(myJSONHealthy) {
      divTextHealthy.innerHTML = `
      <div class=card-node>
            <div class=card-image>
                <a href=""><img src="` + myJSONHealthy.data["0"].image.styles.square_circle + `" alt="` + myJSONHealthy.data["0"].image.description + `"></a>
            </div>
            <div class=card-content onclick="location.href='#';" style="cursor: pointer;">
                <div class=border>
                <p>` + myJSONHealthy.data["0"].taxonomy.name + `</p>
                <h2>` + myJSONHealthy.data["0"].title + `</h2>
            </div>
            </div>
        </div>
        <div class=card-node>
            <div class=card-image>
                <a href=""><img src="` + myJSONHealthy.data["1"].image.styles.square_circle + `" alt="` + myJSONHealthy.data["1"].image.description + `"></a>
            </div>
            <div class=card-content onclick="location.href='#';" style="cursor: pointer;">
                <div class=border>
                <p>` + myJSONHealthy.data["1"].taxonomy.name + `</p>
                <h2>` + myJSONHealthy.data["1"].title + `</h2>
                </div>
            </div>
        </div>
        <div class=card-node>
            <div class=card-image>
                <a href=""><img src="` + myJSONHealthy.data["2"].image.styles.square_circle + `" alt="` + myJSONHealthy.data["2"].image.description + `"></a>
            </div>
            <div class=card-content onclick="location.href='#';" style="cursor: pointer;">
                <div class=border>
                <p>` + myJSONHealthy.data["2"].taxonomy.name + `</p>
                <h2>` + myJSONHealthy.data["2"].title + `</h2>
            </div>
            </div>
        </div>`;
    })
});
 