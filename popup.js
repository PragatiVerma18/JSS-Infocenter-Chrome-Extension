$(document).ready(function() {
    $.get('http://210.212.85.155:8082/', function(response){

        var notices, title, date;
        notices = $('li.modal-index', response);
        $('body').append('<ul id="notices" class="list is-hoverable"></ul>')
        $.each(notices, function(index, value){
            title = $('div.col-7', value).html();
            author = $('div.auth-index', value).html();
            date = $('div.auth-index', value).next().html();
            $('#notices').append('<li class="list-item">' +title+'<div class="details">'+'<p class="auth is-pulled-left">'+author+'</p>'+'<p class="date is-pulled-right">'+date +'</p>' +'</div>' +'</li>');
        });

    });
});
