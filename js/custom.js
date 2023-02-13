const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
    event.preventDefault();
}

list.forEach((item) =>
item.addEventListener('click',activeLink))

// (function($){
//     $(window).on("load",function(){
//         $(".content").mCustomScrollbar();
//     });
// })(jQuery);

// $(".content").mCustomScrollbar({
//     axis:"y" // horizontal scrollbar
// });

// $(".content").mCustomScrollbar({
//     theme:"dark"
// });