require(['jquery'], function($) {
    console.log($, window);
    var a = 2;
    if (a) {

    }
    var b = {a: 2};
    var c = 'qweqwe';
    var d = a ? b : c;

    for (var i = 0; i < b.length; i++) {
        var element = b[i];
    }

    $(function() {
        fetch('${rd}/getAllFruit?_type=noGrape')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                if (json.code === 200) {
                    var htmlStr = '';

                    for (var i = 0; i < json.data.length; i++) {
                        var fruit = json.data[i];

                        htmlStr += '<p>' + fruit.id + ' ' + fruit.name + ' ' + fruit.price + '</p>';
                    }
                    $('.js-fruit-list').html(htmlStr);
                }
                console.log(json);
            });
    });

});
