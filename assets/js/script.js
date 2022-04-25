

function myfunction() {
    let FormInput = ['nameInput', 'locationInput', 'phoneNumber', 'Date', 'units', 'house description'];
    let nameInput = document.getElementById('name');
    let addressInput = document.getElementById('address');
    let phoneNumber = document.getElementById('phoneNumber');
    let orderDate = document.getElementById('date');
    let howmurch = document.getElementById('number');
    let yourorder = document.getElementById('room');
    let message;


    if (nameInput.value && yourorder.value && orderDate.value && addressInput.value) {
        document.getElementById('display').classList.add('msg');

        message = "<h3>Thank you for considering our service... <br>There are vacant houses available .<br>and we will get to you in a moment</h3>"

    } else {

        document.getElementById("display").classList.add("error");
        message = "please input all the fields as recommeded";
    }

    document.getElementById('display').innerHTML = message;

}