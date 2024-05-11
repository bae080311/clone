function selectAll(selectAll)  {
    const checkboxes = document.querySelectorAll('#agree input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
});
}
function checkIt(){
    var email = userinput.email.value
    var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

        if(exptext.test(email)==false){
			

        alert("이메일형식이 올바르지 않습니다.");

        userinput.email.focus();

    return false;
        }
    
}