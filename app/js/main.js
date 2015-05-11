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
    $('#add-project .project-name input').tooltipster({
        animation: 'grow',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltipster-portfolio'
    });
    $('#add-project .project-img input').tooltipster({
        animation: 'grow',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltipster-portfolio'
    });
     $('#add-project .project-url input').tooltipster({
        animation: 'grow',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltipster-portfolio'
    });
      $('#add-project #textarea').tooltipster({
        animation: 'grow',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltipster-portfolio'
    });
    $('#authorization .auth-login input').tooltipster({
        animation: 'grow',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltipster-portfolio'
    });
    $('#authorization .auth-pass input').tooltipster({
        animation: 'grow',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
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
    var addprojectform = $("#add-project").validate({
        errorPlacement: function (error, element) {
                $(element).tooltipster('update', $(error).text());
                $(element).tooltipster('show');
                $('.jq-file').addClass('error');
        },

        success: function (label, element) {
            $(element).tooltipster('hide');
            $('.jq-file').removeClass('error');
        },
        rules: {
            project_name: "required",
            project_img: "required",
            project_url: "required",
            text: "required"
        },
        messages: {
            project_name: "введите название",
            project_img: "изображение",
            project_url: "ссылка на проект",
            text: "описание проекта"
        },
        submitHandler: function() { 
            alert("Все поля заполнены!");
            return false;
             }
    });
    $('.add').on('click', function(){
        $('#add-project-popup').bPopup({
            opacity: 0.75,
            modalColor: '#58697a',
            onClose: function() { 
               $('#add-project .project-name input').tooltipster('hide');
               $('#add-project .project-img input').tooltipster('hide');
               $('#add-project .project-url input').tooltipster('hide');
               $('#add-project #textarea').tooltipster('hide');
            },
            onOpen: function() { 
                	
            }
        });
    });
    $("#authorization").validate({
        errorPlacement: function (error, element) {
                $(element).tooltipster('update', $(error).text());
                $(element).tooltipster('show');
        },
        success: function (label, element) {
            $(element).tooltipster('hide');
        },
        rules: {
            login: "required",
            pass: "required"
        },
        messages: {
            login: "введите логин",
            pass: "введите пароль"
        },
        submitHandler: function() { 
            alert("Все поля заполнены!");
            return false;
             }
    });
    $('.b-close-span').on('click', function() {
        addprojectform.resetForm();
        document.getElementById("add-project").reset();
        $('.jq-file').removeClass('error');
    })
    $('input, textarea').placeholder();
    if( $('#add-project-popup input[type=file]').length )  {
        $('#add-project-popup input[type=file]').styler();
    }
});
