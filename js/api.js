var cardcita;

fetch(
  "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&type=receta"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    cardcita = jsonData;

    document.getElementById("central_card_img1").innerHTML =
      '<img src= "' + cardcita.data[6].image.url + '" alt="">';
    document.getElementById("Category-central").innerHTML =
      cardcita.data[6].taxonomy.name;
    document.getElementById("title-central").innerHTML = cardcita.data[6].title;
    let timeStamp_value = cardcita.data[6].created;
    theDate = new Date(timeStamp_value * 1000);
    dateString = theDate.toLocaleDateString();
    document.getElementById("datetime").innerHTML = dateString;
    document.getElementById("spancito").innerHTML =
      cardcita.data[6].author.name;
    document.getElementById("parrafin").innerHTML = cardcita.data[6].summary;
  });

var myCard;

fetch(
  "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&type=receta"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonwithData) {
    myCard = jsonwithData;

    document.getElementById("Category-central2").innerHTML =
      myCard.data[7].taxonomy.name;
    document.getElementById("title-central2").innerHTML = myCard.data[7].title;
    let timeStamp_value = myCard.data[7].created;
    theDate = new Date(timeStamp_value * 1000);
    dateString = theDate.toLocaleDateString();
    document.getElementById("datetime2").innerHTML = dateString;
    document.getElementById("spancitito").innerHTML =
      myCard.data[7].author.name;
    document.getElementById("parrafito").innerHTML = myCard.data[7].summary;
    document.getElementById("central_card_img2").innerHTML =
      '<img src= "' + myCard.data[7].image.url + '" alt="">';
    console.log(myCard.data[7].image.url);
  });
