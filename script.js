const fortuneMessages = ["An unexpected compliment will come your way—receive it with a smile.", "Your creativity will open doors; don’t be afraid to share your wild ideas.", "A small act of kindness today will come back to you tenfold.", "Something you lost will soon find its way back to you. Keep an open heart.", "Embrace change, for it’s the beginning of something wonderful.", "Today’s obstacles are tomorrow’s funny stories—laugh through them.", "Trust in the journey; the path is leading you exactly where you need to be."];

let todayMessage = fortuneMessages[Math.floor(Math.random() * fortuneMessages.length)];

const asciiArt = `           
  |\\_/|        
 / @ @ \\   >>>  "${todayMessage}"
( > º < )       
 \`>>x<<\´     
`;

console.log('How\'s your day look like Today!');

console.log(asciiArt);