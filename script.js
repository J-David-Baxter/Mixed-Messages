//Message component arrays
const neverArray = ['back down', 'give up', 'quit', 'stop trying', "think you can't"];
const alwaysArray = ['give it your all', 'know you can do it', 'believe in yourself', 'put your best foot forward', 'stay positive'];
const motivateArray = ['You can do it', "You're the best", "There's nothing you can't do", 'Keep going', "You'll make your dreams a reality"];

//Random number generator
const randomNumber = Math.floor(Math.random() * 5);

//Message function
const generateMessage = () => {
    console.log(`Never ${neverArray[randomNumber]}. Always ${alwaysArray[randomNumber]}. ${motivateArray[randomNumber]}!`);
}
