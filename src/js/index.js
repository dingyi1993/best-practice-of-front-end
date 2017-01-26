require(['default'], function(callback) {
    callback(function($) {
        console.log($, 3, er);
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
            $.ajax({
                url: '${rd}/getAllFruit?_type=noGrape',
                dataType: 'json',
                success: function(data) {
                    if (data.code === 200) {
                        var htmlStr = '';

                        for (var i = 0; i < data.data.length; i++) {
                            var fruit = data.data[i];

                            htmlStr += '<p>' + fruit.id + ' ' + fruit.name + ' ' + fruit.price + '</p>';
                        }
                        $('.js-fruit-list').html(htmlStr);
                    }
                    console.log(data);
                }
            });
        });
    });

});
