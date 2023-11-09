function showModal() {
    var name = document.forms["myForm"]["name"].value;
    var surname = document.forms["myForm"]["surname"].value;
    var email = document.forms["myForm"]["adress"].value;
    var url = document.forms["myForm"]["url"].value;

    if (name == "" || surname == "" || email == "" || url == "") {
        alert("Пожалуйста, заполните все поля.");
       
    } else {
        alert("Форма отправлена!");
        
    }
}
