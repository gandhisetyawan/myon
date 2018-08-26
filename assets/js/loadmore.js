/*
    Load more content with jQuery - May 21, 2013
    (c) 2013 @ElmahdiMahmoud
*/   

$(function () {
    $(".latest-group-item").slice(0, 6).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".latest-group-item:hidden").slice(0, 5).slideDown();
        if ($(".latest-group-item:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});

$(function () {
    $(".latest-group-item-article").slice(0, 6).show();
    $("#loadMores").on('click', function (e) {
        e.preventDefault();
        $(".latest-group-item-article:hidden").slice(0, 5).slideDown();
        if ($(".latest-group-item-article:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });

});

