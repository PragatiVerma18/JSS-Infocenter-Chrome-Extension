$(document).ready(function() {
    $.get('http://210.212.85.155:8082/', function(response){

        var notices, title, link, date;
        notices = $('li.modal-index', response);
        $('body').append('<ul id="notices" class="list is-hoverable"></ul>')
        $.each(notices, function(index, value){
            title = $('div.col-7', value).html();
            //author = $('div.auth-index', value).html();
            date = $('div.date-index', value).html();
            $('#notices').append('<li class="list-item">' + title  + date +'</li>');
        });

    });
});
