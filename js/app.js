$(function () {
    'use strict';

$('.btn-block').on('click', function (e) {
    e.preventDefault();
    var titleData = $('#title').val(),
        authData = $('#author').val(),
        isnbData = $('#isbn').val();
        if(titleData == 0) {
            null
        } else {
    $('<tr class="bd"><th>' + titleData + '</th><th>' + authData + '</th><th>' + isnbData + '</th><th><a href="#" class="dele" style="background: Red; color: #FFF; text-decoration:none; padding:1px 5px; border-radius: 3px;">X</th></tr>').appendTo($('#book-list'));
    $('input').not('.btn-primary').val('');
    $('.btn-success').fadeIn(200, function () {
    $(this).delay(400).fadeOut(200);
    })
}
});

$('table').on('click', 'a.dele', function () {
    $(this).parent('th').parent('tr').remove();
    $('.btn-danger').fadeIn(200, function () {
    $(this).delay(400).fadeOut(200);
});
});
});