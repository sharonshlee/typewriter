//take a sentence and display it as an animation.
const typeWriter = function (sentence) {
  let time = 0;
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    setTimeout(() => {
      process.stdout.write(char);
      if (i + 1 === sentence.length) {
        process.stdout.write("\n");
      }
    }, time);
    time += 50;
  }
};
const sentence = "hello there from lighthouse labs";
typeWriter(sentence);
