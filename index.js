var submit = document.querySelector("#submit-button");//Getting and setting the submit button
submit.addEventListener("click", function(){
    event.preventDefault();

    var output = document.getElementById("output");
    var yearOfBirth = document.querySelector("#year-of-birth").value;//Pulling input value from the frontend
    var currentYear = new Date().getFullYear();//Getting and setting the current human year
    if ( yearOfBirth == 0 || yearOfBirth == null || yearOfBirth < 0 ) { //tests the value yearOfBirth, if negative, null or zero, the input will be clear and placeholder value will be turned to "invalid input".
        document.querySelector("#year-of-birth").value = "";
        document.querySelector("#year-of-birth").setAttribute("placeholder", "Invalid input");
    } else{
        if( age == 1 ) {
            var age = currentYear - yearOfBirth;
            document.querySelector("#year-of-birth").value = "";
            output.innerHTML = "You are " + age + " year old.";
            } else {
                var age = currentYear - yearOfBirth;
                document.querySelector("#year-of-birth").value = "";
                output.innerHTML =  "You are " + age + " years old.";
            }
    } 
    
}); 