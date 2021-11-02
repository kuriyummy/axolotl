let a = $("#show_hide_password a");
let input = $('#show_hide_password input');
let i = $('#show_hide_password i');
let a1 = $("#show_hide_password_confirm a");
let input1 = $('#show_hide_password_confirm input');
let i1 = $('#show_hide_password_confirm i');

function eye(a, input, i) {
    a.on('click', function (event) {
        event.preventDefault();
        if (input.attr("type") === "text") {
            i.attr('type', 'password');
            i.removeClass("fa-eye");
            i.addClass("fa-eye-slash");
        } else if (input.attr("type") === "password") {
            input.attr('type', 'text');
            i.removeClass("fa-eye-slash");
            i.addClass("fa-eye");
        }
    });
}

eye(a, input, i);
eye(a1, input1, i1);


$(document).ready(function () {
    $("#searchInput").on("keyup", function () {
        let value = $(this).val().toLowerCase();
        $("#videoTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});


let imagesPost = document.getElementById("imagesPost");

async function fetchAsync() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/photos`)
    return await response.json();
}

function loadPost() {
    fetchAsync()
        .then((post) => {
            for (let index = 0; index < 10; index++) {
                imagesPost.innerHTML +=
                    "<div class='bg-dark text-white border border-white card col-3 mx-auto'>" +
                    "<img class='class-img-top' src='" + post[index].thumbnailUrl + "'>" +
                    "<p class='card-title'>" + post[index].title + "</p></div>"
            }
            console.log(imagesPost.innerHTML);
        }).catch((error) => {
        console.log("ERROR: " + error);
    })
}

loadPost();