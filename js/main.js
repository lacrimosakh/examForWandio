document.querySelectorAll('.form-field .field').forEach(inputs => {
    inputs.onfocus = function() {
        inputs.previousElementSibling.classList.add('active');
        
    }

    inputs.onblur = function() {
        if(inputs.value.length === 0){
        inputs.previousElementSibling.classList.remove('active');
        }
    }
});



// collapse
document.querySelector('.question').onclick = function(e){
    e.preventDefault();

    document.querySelector('.collapse').classList.add('active');
    this.parentElement.parentElement.style.display = "none";
}



// submit
document.querySelector('.pink-btn').onclick = function (e) {
    e.preventDefault();

    // get fields
    var formInputs = document.querySelectorAll('.field'), 
        numField = document.querySelector('.number-field'),
        mailField = document.querySelector('.mail-field'),
        nameField = document.querySelector('.name-field'),
        textField = document.querySelector('.text-field'),
        isTrue = true;

    // check number field if is number
    if (numField.value.length < 1) {
        numField.style.borderBottom = '1px solid #DD357E';
        numField.parentElement.querySelector('.err').innerHTML = "The field is required.";
    } else if (Number.isInteger(parseInt(numField.value)) === false) {
        numField.style.borderBottom = '1px solid #DD357E';
        numField.parentElement.querySelector('.err').innerHTML = "The telephone number is invalid.";
    }  else {
        // remove style attribute
        numField.removeAttribute('style');
        numField.parentElement.querySelector('.err').innerHTML = "";
    }

    // check if mail contains '@'
    if (mailField.value.length < 1) {
        mailField.style.borderBottom = '1px solid #DD357E';
        mailField.parentElement.querySelector('.err').innerHTML = "The field is required.";
    } else if (mailField.value.match('@') === null) {
        mailField.style.borderBottom = '1px solid #DD357E';
        mailField.parentElement.querySelector('.err').innerHTML = "The e-mail address entered is invalid.";
    }  else {
        // remove style attribute
        mailField.removeAttribute('style');
        mailField.parentElement.querySelector('.err').innerHTML = "";
    }

    // check name field
    if (nameField.value.length < 1) {
        nameField.style.borderBottom = '1px solid #DD357E';
        nameField.parentElement.querySelector('.err').innerHTML = "The field is required.";
    } else {
        nameField.removeAttribute('style');
        nameField.parentElement.querySelector('.err').innerHTML = "";
    }

    // check textarea
    if (textField.value.length < 1) {
        textField.style.borderBottom = '1px solid #DD357E';
        textField.parentElement.querySelector('.err').innerHTML = "The field is required.";
    } else {
        textField.removeAttribute('style');
        textField.parentElement.querySelector('.err').innerHTML = "";
    }

    document.querySelectorAll('[required]').forEach(items => {
        if (items.value.length < 1) {
            document.querySelector('#form-error-message').classList.add('active');
            isTrue = false;
        }
    });


    if (isTrue === true) {
        formInputs.forEach(function(items, i) {
            document.querySelector('#form-error-message').classList.remove('active');
            console.log(`${items.name} - ${items.value}`);
        });
    }

}



// scroll to top
window.onscroll = function () {
    if ( pageYOffset > 300 ) {
        document.querySelector('.scroll').style.opacity = '1';
    } else {
        document.querySelector('.scroll').style.opacity = '0';
    }
}

document.querySelector('.scroll').onclick = function (e) {
    e.preventDefault();
    document.body.scrollIntoView({
        behavior:"smooth",
        block: "start"
    });
}




// mobile navigation
document.querySelector('.mob-trigger').onclick = function(e) {
    e.preventDefault();

    let isTrue = this.classList.toggle('active');

    if (isTrue) {
        document.querySelector('#mob-navigation').style.right = '0';
        document.querySelector('#mob-navigation').style.opacity = '1';
        document.querySelector('#mob-navigation').style.visibility = 'visible';
    this.querySelector('i').className = 'fa fa-times';
    } else {
        this.querySelector('i').className = 'fa fa-bars';
        document.querySelector('#mob-navigation').removeAttribute('style');
    }
}


// image upload
document.querySelector('#image-upload input').onchange = function() {
    var reader = new FileReader();
    var file    = document.querySelector('input[type=file]').files[0];
    var imagePrev = document.querySelector('#image-preview');
    reader.addEventListener("load", function () {
        imagePrev.style.background = `url(${reader.result}) no-repeat center / cover`;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
        document.querySelector('.upload-button-container p').innerText = file.name;
        imagePrev.classList.add('active');
    } else {
        imagePrev.classList.remove('active');
    }
};