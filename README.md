# 03 JavaScript: Password Generator
- Wrapped everything within the "generatePassword()" function.

- Placed the first prompt "length" inside the function so that it starts after the button is clicked because I did not want it to prompt when the page loads.

- First "if" conditional is there to alert the user if they enter a number less than 8 or greater than 128. Finished it with a "return" conditional so that it would start the "generatePassword()" function over with the original prompt.

- Everything else is wrapped in an "else if" conditional for valid number inputs between 8 and 128.

- I added "var userInput = charType.toLowerCase();" so that if the user entered an uppercase letter it would auto-correct it to be lowercase and comply with the "userInput".

- Lastly, is the "for" loop and the "return" value. I placed "retVal += charSet.charAt(Math.floor(Math.random() * charSet.length))" within the "for" loop so that it would start as nothing, then take all the userInputs that were selected and then place them in a random order.