var App = {

    init: function() {
        App.startImpress();
        App.nav();
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
    }

};


$(function() {
    App.init();
});