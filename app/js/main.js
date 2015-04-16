$("#contactme").validate({
        errorElement: "div",
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
        submitHandler: function() { alert("Все поля заполнены!") }
    });

