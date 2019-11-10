var choices = [ "GREETINGS", "GOODBYE", "MANIFEST", "INSIDIOUS", "ETHEREAL", "OBLIVION", "SERENDIPITY", "EUPHORIA", "SINGULARITY", "EPIPHANY", "LOOK" ];
var hints = [ "A Fancy Hello", "A Bittersweet Moment", "To Embody", "To Approach Subtly, with Harmful Effects", "Out of this World", "A Mental Abyss", "Accidental Happiness", "A High of Sorts", "One and one Only", "Sudden Realization", "Observe"]
var randomWord = Math.floor(Math.random()*11);
var word = choices[randomWord];
var dashes="";
var tries = 1;

var pName = prompt("Insert your name young traveller.")

	function myFunction() {

		document.getElementById("attempt").style.width = "0px";
		document.getElementById("attempt").style.height = "0px";
		document.getElementById("attempt").style.fontSize = "0px";
		document.getElementById("attempt").disabled = "true";
		document.getElementById("body").style.backgroundImage = "url('https://i.pinimg.com/originals/b4/c1/6f/b4c16fdd794d5102c8bb0285d6c9080f.png')";
		document.getElementById("subtitle").innerHTML = "Beware, young " + pName + ". If you cross 5 spirits, your fate will be sealed. Spirits lurk everywhere, look to the right.";
		document.getElementById("subtitle").style.backgroundColor = "rgba(0,0,0, 0.3)";
		document.getElementById("subtitle").style.color = "white";
		document.getElementById("progress").style.fontSize = "40px";
		document.getElementById("progress").style.margin = "0px";



		for(x=1; x<=26; x++) {
				//use the createElement function to create known HTML elements
			var btn = document.createElement("BUTTON");
			var myP = document.createElement("br");

				//why start at 64? Because the letter 'A' is code 65
			var letter = String.fromCharCode(x + 64);
			var t = document.createTextNode(letter);

				//add the text stores in t to the button variable
			btn.appendChild(t);

				//give the btn an id to make it easy to access later
			btn.id = letter;
			btn.className = "letters";

				//this is how to add an event to the button -- name the event and then include the function you want it to perform
			btn.addEventListener("click", checkLetter);

				//add button to the page
			document.body.appendChild(btn);

				//add a line break 'mpP' after 3 buttons

				if (x%7 == 0) {

					document.body.appendChild(myP);

				}

		}

	var wordLength = word.length;

		//creating the progress bar
			for(i=1; i<= wordLength; i++) {
				dashes+= "_";
				}
			document.getElementById("progress").innerHTML = dashes;
		}

	function checkLetter() {



		var newText = "";
		document.getElementById("p1").innerHTML += " " + this.id;
		document.getElementById(this.id).style.visibility = "Hidden";

			if (word.includes(this.id)) { // if the letter selected is in the word

				for (i=0; i< word.length; i++) { // check through each character of the word

				if (word.charAt(i) == this.id) {

					newText += word.charAt(i); // if the character of the word at the given index is equal to the letter that was clicked, add the character of the word at that index
				}

				else { // if the character at index i isn't equal to the letter selected
					newText += dashes.charAt(i); // add the letter at the given index to the new text
					}

			}

				dashes = newText;
				document.getElementById("progress").innerHTML = newText;

			if (document.getElementById("progress").innerHTML == word) {

				window.location.href = "SuccessPage.html";

				}

		}

		else {
			tries++;

			if (tries > 5) {

				alert("YOU HAVE FAILED. Meet your fate.");
				window.location.href = "https://www.failarmy.com";

			}

			else {

				if (tries == 4) {

					document.getElementById("hintHint").innerHTML = "HINT: " + hints[randomWord];
					document.getElementById(tries).innerHTML += "<img src=\"https://data.whicdn.com/images/68808843/large.png\">";

				}

				else if ((tries%2)==0) {

					document.getElementById(tries).innerHTML += "<img src=\"https://data.whicdn.com/images/68808843/large.png\">";

				}

				else {

					document.getElementById(tries).innerHTML += "<img src=\"https://image.spreadshirtmedia.com/image-server/v1/designs/3340783,width=178,height=178/kodamas-mini.png\">";

				}

				alert("You have " + (6 - tries) + " attempts left. Click once more.")

			}

		}

}
