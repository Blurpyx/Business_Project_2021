$(document).ready(function () {
    console.log('Ready.');
    var week = document.getElementById("weekPlanning");
    var dagplanning = document.getElementById("dagPlanning");
    var weekdagen = document.getElementsByClassName("day");   // Array van JSON objects
    var title = document.getElementById("weekDetails");
    var backbutton_page = document.getElementById("backbutton-page");
    var backbutton_back = document.getElementById("backbutton-back");

    console.log(weekdagen);

    $.each(weekdagen, function (elem) {
        weekdagen[elem].addEventListener('click', function () {
            console.log(this.innerHTML);
            backbutton_page.style.display = "flex";
            backbutton_back.style.display = "none";
            title.innerHTML = this.innerHTML;
            week.style.display = "none";
            dagplanning.style.display = "flex";
        });
    });

    backbutton_page.addEventListener('click', function () {
        backbutton_page.style.display = "none";
        backbutton_back.style.display = "flex";
        title.innerHTML = "08/03/'21 - 14/03/'21";
        week.style.display = "flex";
        dagplanning.style.display = "none";
    });
});