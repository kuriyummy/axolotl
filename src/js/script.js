$(document).ready(function () {
    let a = $("#show_hide_password a");
    let input = $('#show_hide_password input');
    let i = $('#show_hide_password i');
    a.on('click', function (event) {
        event.preventDefault();
        if (input.attr("type") === "text") {
            i.attr('type', 'password');
            i.addClass("fa-eye-slash");
            i.removeClass("fa-eye");
        } else if (input.attr("type") === "password") {
            input.attr('type', 'text');
            i.removeClass("fa-eye-slash");
            i.addClass("fa-eye");
        }
    });
});