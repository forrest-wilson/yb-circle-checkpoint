(function() {
    // Variable declarations
    var buttons = document.getElementsByClassName("button"),
        circle = document.getElementById("circle"),
        innerCircle = document.getElementById("innerCircle"),
        degrees = 0, // Initialized the rotation of the circle to 0 degrees;
        numOfSpins;

    // Loops through the buttons array
    for (i = 0; i < buttons.length; i++) {

        // Adds an event listener to each button
        buttons[i].addEventListener("click", function() {

            // Gets the elements in the document with the active-button class
            var activeButtons = document.getElementsByClassName("active-button");

            // Assigns the HTML of this button to the global numOfSpins variable
            numOfSpins = this.textContent;

            // Checks the length of the activeButtons array. There should only ever be one in the array
            if (activeButtons.length > 0) {

                // Loops through and removes the class from all elements in the array just in case
                for (j = 0; j < activeButtons.length; j++) {

                    // Removes the class from the button at each index
                    activeButtons[j].classList.remove("active-button");
                }
            }
            
            // Add the active class to the selected button
            this.classList.add("active-button");
        });
    }

    // Adds an event listner to the circleContainer
    document.getElementById("circleContainer").addEventListener("click", function() {

        // Calls the spin() function and passes the numOfSpins global variable to it
        spin(numOfSpins);
    });

    // Spinning function
    function spin(spins) {

        // Parses the String passed to the function to a Number
        var spinsInt = parseInt(spins);

        // Calculate the amount of degrees to turn
        degrees += spinsInt * 180;

        // Set the CSS Transform property and concatenate in the degrees Number
        circle.style.transform = "rotate3d(1,0,0," + degrees + "deg)";
        innerCircle.style.transform = "rotate3d(0,1,0," + degrees + "deg)";
    }
})();