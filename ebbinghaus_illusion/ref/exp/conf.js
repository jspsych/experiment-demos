  
  //******************************************/
 //   EBBINGHAUS ILLUSION                    /
//******************************************/


/* Adjust Response Keys */
let leftASCII= 49;
let rightASCII = 48;
let leftKey = '1';
let rightKey = '0';

let stimColor     =   'orange';
let peripheralColor=  'gray';
let standardSize  =   100;
let stimSizes     =   [82, 86, 90, 94, 98, 102, 106, 110, 114, 118];
let peripheralLarge = 125;
let peripheralSmall = 50;
let cxSmall       =   [standardSize*4*1/4, standardSize*4*1/2, standardSize*4*3/4, standardSize*4*1/4, standardSize*4*3/4, standardSize*4*1/4, standardSize*4*1/2, standardSize*4*3/4]
let cxLarge       =   [standardSize*4*1/6, standardSize*4*1/2, standardSize*4*5/6, standardSize*4*1/6, standardSize*4*5/6, standardSize*4*1/6, standardSize*4*1/2, standardSize*4*5/6]
let cySmall       =   [standardSize*4*1/4, standardSize*4*1/4, standardSize*4*1/4, standardSize*4*1/2, standardSize*4*1/2, standardSize*4*3/4, standardSize*4*3/4, standardSize*4*3/4]
let cyLarge       =   [peripheralLarge/2,  peripheralLarge/2,  peripheralLarge/2,  standardSize*4*1/2, standardSize*4*1/2, (standardSize*4-peripheralLarge/2), (standardSize*4-peripheralLarge/2), (standardSize*4-peripheralLarge/2)]

let startText = [
    '<h3 style="color: orange;">Welcome to the experiment!</h3>'+
        '<p><i>Press the spacebar to continue.</i></p>'
   
];

let noContextInstructionsText = [
    '<p>In this task you will be asked to quickly judge the size difference between two circles that appear on the screen.</p>'+
        "<svg width='"+standardSize*4+"' height='"+standardSize*4+"'>"+
            "<circle cx='"+standardSize*2+"' cy='"+standardSize*2+"' r='"+standardSize/2+"' fill='"+stimColor+"'></circle>"+
            "<circle cx='"+cxSmall[0]+"' cy='"+cySmall[0]+"' r='"+peripheralSmall/2+"' fill='white'></circle>"+
            "<circle cx='"+cxSmall[1]+"' cy='"+cySmall[1]+"' r='"+peripheralSmall/2+"' fill='white'></circle>"+
            "<circle cx='"+cxSmall[2]+"' cy='"+cySmall[2]+"' r='"+peripheralSmall/2+"' fill='white'></circle>"+
            "<circle cx='"+cxSmall[3]+"' cy='"+cySmall[3]+"' r='"+peripheralSmall/2+"' fill='white'></circle>"+
            "<circle cx='"+cxSmall[4]+"' cy='"+cySmall[4]+"' r='"+peripheralSmall/2+"' fill='white'></circle>"+
            "<circle cx='"+cxSmall[5]+"' cy='"+cySmall[5]+"' r='"+peripheralSmall/2+"' fill='white'></circle>"+
            "<circle cx='"+cxSmall[6]+"' cy='"+cySmall[6]+"' r='"+peripheralSmall/2+"' fill='white'></circle>"+
            "<circle cx='"+cxSmall[7]+"' cy='"+cySmall[7]+"' r='"+peripheralSmall/2+"' fill='white'></circle>"+
        "</svg>"+
        "<svg width='"+standardSize*4+"' height='"+standardSize*4+"'>"+
            "<circle cx='"+standardSize*2+"' cy='"+standardSize*2+"' r='"+stimSizes[9]/2+"' fill='"+stimColor+"'></circle>"+
            "<circle cx='"+cxLarge[0]+"' cy='"+cyLarge[0]+"' r='"+peripheralLarge/2+"' fill='white'></circle>"+
            "<circle cx='"+cxLarge[1]+"' cy='"+cyLarge[1]+"' r='"+peripheralLarge/2+"' fill='white'></circle>"+
            "<circle cx='"+cxLarge[2]+"' cy='"+cyLarge[2]+"' r='"+peripheralLarge/2+"' fill='white'></circle>"+
            "<circle cx='"+cxLarge[3]+"' cy='"+cyLarge[3]+"' r='"+peripheralLarge/2+"' fill='white'></circle>"+
            "<circle cx='"+cxLarge[4]+"' cy='"+cyLarge[4]+"' r='"+peripheralLarge/2+"' fill='white'></circle>"+
            "<circle cx='"+cxLarge[5]+"' cy='"+cyLarge[5]+"' r='"+peripheralLarge/2+"' fill='white'></circle>"+
            "<circle cx='"+cxLarge[6]+"' cy='"+cyLarge[6]+"' r='"+peripheralLarge/2+"' fill='white'></circle>"+
            "<circle cx='"+cxLarge[7]+"' cy='"+cyLarge[7]+"' r='"+peripheralLarge/2+"' fill='white'></circle>"+
        "</svg>"+
        '<p>The circles will appear at the same time and you will have to quickly judge which one is the larger circle.</p>'+
        '<p>We will start with some practice trials.</p>'+
        '<p><i>Press the spacebar to continue.</i></p>',
 
    '<p>You will now just see two circles on the screen.</p>'+
        '<p>If the left circle is bigger press the '+leftKey+' key as quickly as you can.</p>'+
        '<p>If you think the circle on the right is larger press the '+rightKey+' key as quickly as you can.</p>'+
        '<p>You will only have two seconds to make your response.</p>'+
        '<p><i>Press the spacebar to continue.</i></p>',

        '<p>We ask you to try your best and to give an answer on each trial.</p>'+
        '<p>Some presentations are harder than others. If you are not sure just make a guess.</p>'+
        '<p>Very often when people guess, they are correct.</p>'+
        '<p>The circles both appear at the same time and they appear quickly so get ready.</p>'+
        '<p><i>Press the spacebar to continue.</i></p>',

    '<p>When you are ready, press the spacebar to start the practice trials.</p>'
];

let startNextText = [
    '<h3 style="color: orange;">Good Job.</h3>'+
        '<p>Now we will start the next set of trials.</p>'+
        '<p><i>Press the spacebar to continue.</i></p>'
        
];

let contextInstructionsText = [
    '<p>In this task you will be asked to quickly judge the size difference between two circles that appear on the screen.</p>'+
        "<svg width='"+standardSize*4+"' height='"+standardSize*4+"'>"+
            "<circle cx='"+standardSize*2+"' cy='"+standardSize*2+"' r='"+standardSize/2+"' fill='"+stimColor+"'></circle>"+
            "<circle cx='"+cxSmall[0]+"' cy='"+cySmall[0]+"' r='"+peripheralSmall/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxSmall[1]+"' cy='"+cySmall[1]+"' r='"+peripheralSmall/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxSmall[2]+"' cy='"+cySmall[2]+"' r='"+peripheralSmall/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxSmall[3]+"' cy='"+cySmall[3]+"' r='"+peripheralSmall/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxSmall[4]+"' cy='"+cySmall[4]+"' r='"+peripheralSmall/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxSmall[5]+"' cy='"+cySmall[5]+"' r='"+peripheralSmall/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxSmall[6]+"' cy='"+cySmall[6]+"' r='"+peripheralSmall/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxSmall[7]+"' cy='"+cySmall[7]+"' r='"+peripheralSmall/2+"' fill='"+peripheralColor+"'></circle>"+
        "</svg>"+
        "<svg width='"+standardSize*4+"' height='"+standardSize*4+"'>"+
            "<circle cx='"+standardSize*2+"' cy='"+standardSize*2+"' r='"+stimSizes[9]/2+"' fill='"+stimColor+"'></circle>"+
            "<circle cx='"+cxLarge[0]+"' cy='"+cyLarge[0]+"' r='"+peripheralLarge/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxLarge[1]+"' cy='"+cyLarge[1]+"' r='"+peripheralLarge/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxLarge[2]+"' cy='"+cyLarge[2]+"' r='"+peripheralLarge/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxLarge[3]+"' cy='"+cyLarge[3]+"' r='"+peripheralLarge/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxLarge[4]+"' cy='"+cyLarge[4]+"' r='"+peripheralLarge/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxLarge[5]+"' cy='"+cyLarge[5]+"' r='"+peripheralLarge/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxLarge[6]+"' cy='"+cyLarge[6]+"' r='"+peripheralLarge/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxLarge[7]+"' cy='"+cyLarge[7]+"' r='"+peripheralLarge/2+"' fill='"+peripheralColor+"'></circle>"+
        "</svg>"+
        '<p>We don\'t care about the '+peripheralColor+' circles...</p>'+
        '<p>Only the central circles are important.</p>'+
        '<p><i>Press the spacebar to continue.</i></p>',
    
    '<p>So, when they appear like this:</p>'+
        "<svg width='"+standardSize*4+"' height='"+standardSize*4+"'>"+
            "<circle cx='"+standardSize*2+"' cy='"+standardSize*2+"' r='"+standardSize/2+"' fill='"+stimColor+"'></circle>"+
            "<circle cx='"+cxSmall[0]+"' cy='"+cySmall[0]+"' r='"+peripheralSmall/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxSmall[1]+"' cy='"+cySmall[1]+"' r='"+peripheralSmall/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxSmall[2]+"' cy='"+cySmall[2]+"' r='"+peripheralSmall/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxSmall[3]+"' cy='"+cySmall[3]+"' r='"+peripheralSmall/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxSmall[4]+"' cy='"+cySmall[4]+"' r='"+peripheralSmall/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxSmall[5]+"' cy='"+cySmall[5]+"' r='"+peripheralSmall/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxSmall[6]+"' cy='"+cySmall[6]+"' r='"+peripheralSmall/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxSmall[7]+"' cy='"+cySmall[7]+"' r='"+peripheralSmall/2+"' fill='"+peripheralColor+"'></circle>"+
        "</svg>"+
        "<svg width='"+standardSize*4+"' height='"+standardSize*4+"'>"+
            "<circle cx='"+standardSize*2+"' cy='"+standardSize*2+"' r='"+stimSizes[9]/2+"' fill='"+stimColor+"'></circle>"+
            "<circle cx='"+cxLarge[0]+"' cy='"+cyLarge[0]+"' r='"+peripheralLarge/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxLarge[1]+"' cy='"+cyLarge[1]+"' r='"+peripheralLarge/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxLarge[2]+"' cy='"+cyLarge[2]+"' r='"+peripheralLarge/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxLarge[3]+"' cy='"+cyLarge[3]+"' r='"+peripheralLarge/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxLarge[4]+"' cy='"+cyLarge[4]+"' r='"+peripheralLarge/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxLarge[5]+"' cy='"+cyLarge[5]+"' r='"+peripheralLarge/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxLarge[6]+"' cy='"+cyLarge[6]+"' r='"+peripheralLarge/2+"' fill='"+peripheralColor+"'></circle>"+
            "<circle cx='"+cxLarge[7]+"' cy='"+cyLarge[7]+"' r='"+peripheralLarge/2+"' fill='"+peripheralColor+"'></circle>"+
        "</svg>"+
        '<p>We want to know which inner circle is bigger than the other inner circle,</p>'+
        '<p>the left one or the right one.</p>'+
        '<p><i>Press the spacebar to continue.</i></p>',

    '<p>Press the '+leftKey+' if the inside circle on the left is bigger than the inside circle on the right.</p>'+
        '<p>Press the '+rightKey+' if the inside circle on the right is bigger than the inside circle on the left.</p>'+
        '<p>Press as quickly as you can because you will only have two seconds to make your response.</p>'+
        '<p><i>Press the spacebar to continue.</i></p>',

        '<p>Some presentations are harder than others so if you are not sure, just make a guess.</p>'+
        '<p>Also, try to make a response after every single presentation if you can.</p>'+
        '<p>The circles all appear at the same time and they appear quickly so get ready.</p>'+
        '<p><i>Press the spacebar to continue.</i></p>',

    '<p>When you are ready press the spacebar to begin the task.</p>'
];

// Qualtrics survery link 
// let link = "https://survey.az1.qualtrics.com/SE/?SID=SV_9uARDX1aXEXq1pP&Q_JFE=0&workerId=";
