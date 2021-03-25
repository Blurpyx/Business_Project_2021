$(document).ready( function () {
    Hide("subTitle");
    Hide("note-add");

    Hide("backButton");

    $("#backButton").click( function () {
        Hide("backButton");
        Hide("subTitle");
        Visible("homeButton");
        Visible("addNote");
        ChangeToDiv("note-add", "home");
    });

    $("#addNote").click( function () {
        Title("");
        Input();
    });

    $("#addArts").click( function () {
        Title("Bericht voor Artsen");
        Input();
    });

    $("#addNeuro").click( function () {
        Title("Bericht voor Neurologen");
        Input();
    });

    $("#addErgo").click( function () {
        Title("Bericht voor Ergo");
        Input();
    });
});

function ChangeToDiv(CurrentDiv, NextDiv) {
    $("#" + CurrentDiv).css("display", "none");
    $("#" + NextDiv).css("display", "block");
}

function Visible(DivName) {
    $("#" + DivName).css("display", "block");
}

function Hide(DivName) {
    $("#" + DivName).css("display", "none");
}

function Input() {
    ChangeToDiv("home", "note-add");
    Hide("addNote");
    Hide("homeButton");
    Visible("subTitle");
    Visible("backButton");
}

function Title(Message) {
    $("#note_title").val(Message);
}