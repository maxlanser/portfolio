$(document).ready(function () {


    // initialize tooltipster on text input elements
    $('#contactme .name input').tooltipster({
        animation: 'grow',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltipster-portfolio'
    });
    $('#contactme .email input').tooltipster({
        animation: 'grow',
        trigger: 'custom',
        onlyOne: false,
        position: 'right',
        offsetX: '-4',
        theme: 'tooltipster-portfolio'
    });
    $('#contactme textarea').tooltipster({
        animation: 'grow',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltipster-portfolio'
    });
    $('#contactme .captcha input').tooltipster({
        animation: 'grow',
        trigger: 'custom',
        onlyOne: false,
        position: 'right',
        offsetX: '-4',
        theme: 'tooltipster-portfolio'
    });

$("#contactme").validate({
        errorPlacement: function (error, element) {
                $(element).tooltipster('update', $(error).text());
                $(element).tooltipster('show');
        },
        success: function (label, element) {
            $(element).tooltipster('hide');
        },
        rules: {
            name: "required",
            email: {email:true, required: true},
            text: "required",
            captcha: "required"
        },
        messages: {
            name: "Вы не ввели имя",
            email: "Вы не ввели email",
            text: "Ваш вопрос",
            captcha: "Вы не ввели код"
        },
        submitHandler: function() { 
            alert("Все поля заполнены!");
            return false;
             }
    });
});
