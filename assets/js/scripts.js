$(document).ready(function() {
    $(document).on('click', '.btn-linkedin', function(e){
        e.preventDefault();
        window.open("https://www.linkedin.com/in/vicentecossio10/", "_blank");
    });

    $(document).on('click', '.btn-email', function(e){
        e.preventDefault();
        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=vicentecossio0202@gmail.com", "_blank");
    });
});