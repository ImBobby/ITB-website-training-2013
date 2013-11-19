var App = {

    init: function() {
        App.startImpress();
    },

    startImpress: function() {
        impress().init();
    }

};


$(function() {
    App.init();
});