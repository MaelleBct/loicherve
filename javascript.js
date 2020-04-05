//Au rétrécissement de l'écran --> menu ne se voit plus, on voit des barres sur le côté


function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }
  
  //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_dropdown





function pageInstallations(){
    location.href="installations.php";
}


function pageAccueil(){
    location.href="index.php";
}




function pageDerniereExpos(){
    location.href="dernieresexpos.php";
}



function pageSculptures(){
    location.href="sculptures.php";
}
