function button0() {
 let button = $('.button0');


button.on('click', (e) => {
    e.preventDefault();
    $('html').animate({screenDown:0}, 1000);
})
}
button0()