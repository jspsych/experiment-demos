


var FullScreenMode = false;
var TextFontSize = "30px";
var StimulusFontSize = '60px';

var keyboard_path = "./assets/images/StroopColorsKeyboard.png";

// size of each circle
var radius = 25;
// color of circle
var CircleColor = 'grey'
// color of circle if correct
var CorrectCircleColor = 'blue'
// how close to each circle thge cursor needs to be
var tolerance = 1;
// width of the pen
var pen_width = 2;
// list of circle locations and their labels
// The order in this list is the correct and expected order


//Whether or not to change the color of the circle when response is correct
var GiveFeedback = true;          
/* To do: 
 - optimize screen and canvas size
 - add start button
 - remove the clear/undo/redo buttons
 - create final list of circles for trails A and B
 - make training lists
 - calculate cursor entry and exit times from a circle
 - save results to file/database
 - optimize font and its center within a circle
 - record time when circles are displayed
 - record completion times
*/
 
