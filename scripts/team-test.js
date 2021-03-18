$(document).ready(function () {
    var backButton = $("#backButton");
    var homeButton = $("#homeButton");

    var divButtons = $("#divButtons");

    var btnArts = $("#artsen");
    var btnHoofd = $("#hoofdverplgk");
    var btnLogo = $("#logo");
    var btnPsych = $("#psycholoog");
    var btnErgo = $("#ergo");
    var btnKine = $("#kine");
    var btnNeuro = $("#neuro");
    var btnSocial = $("#sociale");

    var divArtsen = $("#Artsen");
    var divErgo = $("#Ergo");
    var divHoofd = $("#Hoofdverplgk");
    var divKine = $("#Kine");
    var divLogo = $("#Logo");
    var divNeuro = $("#Neuro");
    var divPsych = $("#Psych");
    var divSocial = $("#Social");

    backButton.click( function () {
        homeButton.css("display", "flex");
        backButton.css("display", "none");

        divButtons.css("display", "flex");

        divArtsen.css("display", "none");
        divErgo.css("display", "none");
        divHoofd.css("display", "none");
        divKine.css("display", "none");
        divLogo.css("display", "none");
        divNeuro.css("display", "none");
        divPsych.css("display", "none");
        divSocial.css("display", "none");
    });

    btnArts.click( function () {
        divButtons.css("display", "none");
        backButton.css("display", "flex");
        homeButton.css("display", "none");
        divArtsen.css("display", "flex");
    });

    btnHoofd.click( function () {
        divButtons.css("display", "none");
        backButton.css("display", "flex");
        homeButton.css("display", "none");
        divHoofd.css("display", "flex");
    });

    btnLogo.click( function () {
        divButtons.css("display", "none");
        backButton.css("display", "flex");
        homeButton.css("display", "none");
        divLogo.css("display", "flex");
    });

    btnPsych.click( function () {
        divButtons.css("display", "none");
        backButton.css("display", "flex");
        homeButton.css("display", "none");
        divPsych.css("display", "flex");
    });

    btnErgo.click( function () {
        divButtons.css("display", "none");
        backButton.css("display", "flex");
        homeButton.css("display", "none");
        divErgo.css("display", "flex");
    });

    btnKine.click( function () {
        divButtons.css("display", "none");
        backButton.css("display", "flex");
        homeButton.css("display", "none");
        divKine.css("display", "flex");
    });

    btnNeuro.click( function () {
        divButtons.css("display", "none");
        backButton.css("display", "flex");
        homeButton.css("display", "none");
        divNeuro.css("display", "flex");
    });

    btnSocial.click( function () {
        divButtons.css("display", "none");
        backButton.css("display", "flex");
        homeButton.css("display", "none");
        divSocial.css("display", "flex");
    });
});