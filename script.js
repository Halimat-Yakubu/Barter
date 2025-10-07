
    // function changeBackgroundColor() {
    //   // Select the body element
    //   let bodyElement = document.choices;

    //   // Change the background color
    //   bodyElement.style.backgroundColor = 'lightblue'; // Or any other color
    // }

        // script.js
    // function changeClassBackgroundColor(color) {
    //     const elements = document.querySelectorAll('.colorcontainer'); // Select all elements with the class 'my-class'

    //     elements.forEach(element => {
    //         element.style.backgroundColor = color; // Set the background color for each element
    //     });
    // }

    //we use a function to add multiple onclick actions to a particular html element. 
    // if its just one, do it on the element directly
   
    let colorContainer = document.getElementById("info")

    let firstText ="Darling hold my hand!";
    let newText0 ="Nothing beats a jet2 holiday!";
    let newText1 = "And right now, you can get 50 pounds off, per Person!";
    let newText2 ="That's 200 pounds off for a family of four.";
    

    function colorChange () {
        document.getElementById("colorcontainer").style.backgroundColor =  '#836196';
        
        colorContainer.innerText = firstText
    }

    function colorchange0 () {
        document.getElementById("colorcontainer").style.backgroundColor =  '#e8a169' ;
         
         colorContainer.innerText = newText0;
       }

    function colorchange1 () {
        document.getElementById("colorcontainer").style.backgroundColor = '#f0969aff' ;
         
         colorContainer.innerText = newText1;
       }

    function colorchange2 () {
        document.getElementById("colorcontainer").style.backgroundColor = '#727597ff' ;
         
         colorContainer.innerText = newText2;
       }

    
    

    
