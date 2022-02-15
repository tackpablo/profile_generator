const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :)", (answer1) => {
  console.log(`You said: ${answer1}`);

  rl.question("What's an activity you like doing?", (answer2) => {
    console.log(`You said: ${answer2}`);

    rl.question("What do you listen to while doing that?", (answer3) => {
      console.log(`You said: ${answer3}`);

      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)?",
        (answer4) => {
          console.log(`You said: ${answer4}`);

          rl.question(
            "What's your favourite thing to eat for that meal?",
            (answer5) => {
              console.log(`You said: ${answer5}`);

              rl.question(
                "Which sport is your absolute favourite?",
                (answer6) => {
                  console.log(`You said: ${answer6}`);

                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at!",
                    (answer7) => {
                      console.log(`You said: ${answer7}`);

                      let results = `My name/nickname is ${answer1}. I like to ${answer2} and I listen to ${answer3} while doing it. My favorite meal is ${answer4} and my favorite thing to eat for that mean is ${answer5}. My favorite sport is ${answer6} while my hidden superpower is to ${answer7}.`;
                      console.log(results);

                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
