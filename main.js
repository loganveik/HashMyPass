const bcrypt = require('bcryptjs');

$("#hash").on("click", function (event) {
    event.preventDefault();
    passhash();
    $(".hashedpass").empty();
    $(".success").empty();
});

async function passhash() {
    const pass = $("#password").val().trim();
    const hash = await bcrypt.hash(pass, 10);
    const copybtn = $("<button type='button' class='btn' id='copy'><i class='fas fa-copy'></i></button>");
    const textbox = $("<input type='text' class='form-control' value='" + hash + "' id='hashedpassword'>");
    $(".hashedpass").append(textbox, copybtn);
};

$(document).on("click", "#copy", function () {
    var copyText = document.getElementById("hashedpassword");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    const copied = $("<p>Copied to clipboard</p>")
    $(".success").append(copied);
});