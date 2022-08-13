(function(window){
var helloSpeaker = {};
var speakWord = "Hello";


helloSpeaker.speak = function (names) {
  console.log(speakWord + " " + names);
}
window.helloSpeaker = helloSpeaker;
})(window);

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;
