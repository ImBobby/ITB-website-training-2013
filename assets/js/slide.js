var App = {

    init: function() {
        App.startImpress();
        App.nav();
        App.paging();
    },

    startImpress: function() {
        impress().init();
    },

    nav: function () {
        var destination,
            nav     = $('.nav'),
            trigger = $('.nav__trigger'),
            menuItem = $('[data-goto]');

        trigger.click(function (e) {
            e.preventDefault();

            nav.toggleClass('nav--show');
        });

        menuItem.click(function (e) {
            e.preventDefault();

            destination = $(this).data('goto');
            impress().goto(destination);
            nav.removeClass('nav--show');
        });
    },

    paging: function () {
        var slide = $('section'),
            total = slide.length;

        $.each(slide, function (index, value) {
            var pager = document.createElement('p');
            pager.className += "pager";
            pager.innerHTML = index+1 + " / " + total;
            $(this).append(pager);
        });
    }

};


$(function() {
    App.init();
});