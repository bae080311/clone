function emailCheck(email) {

    var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    
    return email_regex.test(email);
}

function checkEmail() {
    var emailInput = document.getElementById('email');
    var resultDiv = document.getElementById('result');

    var email = emailInput.value;

    if (emailCheck(email)) {
        resultDiv.innerHTML = '유효한 이메일 주소입니다.';
    } else {
        resultDiv.innerHTML = '유효하지 않은 이메일 주소입니다.';
    }
}
   
function passwordCheck(password) {
    
    var password_regex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/;
    
   
    return password_regex.test(password);
}

function checkPassword() {
    var passwordInput = document.getElementById('password');
    var resultDiv = document.getElementById('result1');

    var password = passwordInput.value;

    if (passwordCheck(password)) {
        resultDiv.innerHTML = '유효한 비밀번호입니다.';
    } else {
        resultDiv.innerHTML = '비밀번호는 최소 8자 이상, 최소 하나의 숫자, 하나의 소문자, 하나의 특수 문자를 포함해야 합니다.';
    }
}
function passwordMatch(password, confirmPassword) {

    return password === confirmPassword;
}

function checkcheckPassword() {
    var passwordInput = document.getElementById('password');
    var confirmPasswordInput = document.getElementById('confirmPassword');
    var resultDiv = document.getElementById('result2');

    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;

    if (passwordMatch(password, confirmPassword)) {
        resultDiv.innerHTML = '비밀번호가 일치합니다.';
    } else {
        resultDiv.innerHTML = '비밀번호가 일치하지 않습니다.';
    }
}
