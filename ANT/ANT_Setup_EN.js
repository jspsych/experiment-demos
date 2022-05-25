// This variablke affects the distance between the center of 
// the screen and the high and low line

var ScreenSpacing = 300

var NFlankers = 2;

var flankersR = '';

var flankersL = '';

var flankersN = '';

for (i = 0; i < NFlankers; i++) 
   {
	// the following are the codes for the specific arrows and star to use
	// https://www.fileformat.info/info/unicode/char/2190/index.htm
      flankersR += "\u2192";
      flankersL += "\u2190";
      flankersN += "\u2014";
    }

var FontSize = 45


function PutIntoTable(top='top', middle='mid', bottom='bot', width=600, height=ScreenSpacing) {
      return '<table margin-left="auto" margin-right="auto" border="0" width="'+width+'"><tr height="'+height+'"><td>'+top+'</td></tr><tr height="'+height+'"><td><div style="font-size:'+FontSize+'px;">'+middle+'</div></td></tr> <tr height="'+height+'"><td>'+bottom+'</td></tr></table>';
    }

         // What type of trial is this?
          // Factors: 
          // flanker: left, right, none [3]
          // central arrow direction: left, right [2]
          // star: top&bot, top, bot, none, middle [5]
          // position: top, bottom [2]


// Create the array of objects dynamically
// https://stackoverflow.com/questions/7858385/how-to-add-values-to-an-array-of-objects-dynamically-in-javascript
var KeyboardChoices = ['arrowleft', 'arrowright'];
// the following is used for scoring and allows the keyboard choices to be whatever you would like
var ResponseMapping = ['left', 'right'];

var flankers = [flankersL, flankersR, flankersN];
var centralArrow = ["\u2192", "\u2190"]; // right, left
var fixation = [PutIntoTable("\u2217","+","\u2217"), PutIntoTable("\u2217","+"," "), PutIntoTable(" ","+","\u2217"), PutIntoTable(" ","+"," "), PutIntoTable(" ","\u2217"," ")];
var position = ["high","low"];
var count = 0;
var ANT = [];

for(var i=0; i<3; i++) { // cycle over flanker type
	for (var j = 0; j < 2; j++) { // cycle over central arrow directions
		for (var k = 0; k < 5; k++) { // cycle over cue types
			for (var m = 0; m < 2; m++) { // cycle over stimulus position
				ANT[count] = {};
				ANT[count].flanker = flankers[i];
				ANT[count].centralArrow = centralArrow[j];
				ANT[count].fixation = fixation[k];
				ANT[count].position = position[m];
				if (j==0) {ANT[count].correct = 'right'}
				if (j==1) {ANT[count].correct = 'left'}
				// map the stim to the type
				// using the indices is a convenience. It would be better if this was more explicit
				// This information will be used for scoring this experiment
				if (i==0 & j ==1) {ANT[count].flankerType = 'conFlanker';}
				if (i==1 & j ==0) {ANT[count].flankerType = 'conFlanker';}
				if (i==2) {ANT[count].flankerType = 'neuFlanker';}
				if (i==0 & j ==0) {ANT[count].flankerType = 'incFlanker';}
				if (i==1 & j ==1) {ANT[count].flankerType = 'incFlanker';}
				if (k==0) {ANT[count].cuePos = 'both';}
				if (k==1) {ANT[count].cuePos = 'upper';}
				if (k==2) {ANT[count].cuePos = 'lower';}
				if (k==3) {ANT[count].cuePos = 'none';}
				if (k==4) {ANT[count].cuePos = 'center';}
				if (k==1 & m==0) {ANT[count].cueType = 'conCue';}
				else if (k==2 & m==1) {ANT[count].cueType = 'conCue';}
				else {ANT[count].cueType = 'incCue';}

				count += 1;
			}
		}
	}
}
