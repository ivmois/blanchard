
  var selector = document.getElementById("tel");

  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);


const validation = new window.JustValidate('#contacts-form');

    validation.addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Введите Имя',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Слишком короткое имя',
      },
      {
        rule: 'maxLength',
        value: 20,
        errorMessage: 'Слишком длинное имя'
      },
      {
        rule: 'customRegexp',
        value: /^[a-zа-яё\-\s]+$/iu,
        errorMessage: 'Недопустимый формат'
      },
    ]);


    validation.addField('#tel', [
      {
        rule: 'required',
        errorMessage: 'Введите номер телефона',
      },
      {
        validator: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          console.log(Number(phone));
          return Number(phone) && phone.length === 10;
        },

        errorMessage: 'Не корректный номер',
      }
    ]).onSuccess((event) => {
      console.log('Validation passes and form submitted', event);

      let formData = new FormData(event.target);

      console.log(...formData);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    });
