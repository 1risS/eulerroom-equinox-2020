$(function() {
    $(".tit").on("click", function() {
        $(this).siblings(".cont").toggleClass("contShow");
    })
})