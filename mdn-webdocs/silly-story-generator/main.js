/*********** VARIABLES ***********/
const customName = document.querySelector("#customname");
const story = document.querySelector(".story");
const randomizeButton = document.querySelector(".randomize");
const storyString =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. \
  When they got to :inserty:, they stared in horror for a few moments, \
  then :insertz:. Bob saw the whole thing, but was not surprised \
   — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];
/*********** VARIABLES END ***********/

/*********** FUNCTIONS CALLS ***********/

randomizeButton.addEventListener("click", result);

/*********** FUNCTIONS CALLS END ***********/

/*********** FUNCTIONS LOGIC ***********/

function result() {
  console.log("Randomize click!");
  xItem = randomValueFromArray(insertX);
  yItem = randomValueFromArray(insertY);
  zItem = randomValueFromArray(insertZ);
  let newStory = storyString.replaceAll(":insertx:", xItem);
  newStory = newStory.replaceAll(":inserty:", yItem);
  newStory = newStory.replaceAll(":insertz:", zItem);

  story.textContent = newStory;
  story.style.visibility = "visible";
}

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}
