const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionDatabase = [
  "What's your name and how would you like to be addressed? ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

rl.question(questionDatabase[0], (name) => {
  rl.question(questionDatabase[1], (activity) => {
    rl.question(questionDatabase[2], (music) => {
      rl.question(questionDatabase[3], (mealtime) => {
        rl.question(questionDatabase[4], (meal) => {
          rl.question(questionDatabase[5], (sport) => {
            rl.question(questionDatabase[6], (superpower) => {
              console.log(`Howdy ${name}! Having fun doing ${activity}? Jamming out to ${music} while you do it! You ever eat ${meal} during ${mealtime}? Big fan of ${sport} and you have the ability to ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
