/* create timeline */
let timeline = [];

/* add instructions to timeline */
let start = [];
let startNext = [];
let noContextInstructions = [];
let contextInstructions = [];

let stimuli = {
  type: "html-keyboard-response",
  stimulus:
    function(){
      var html=
        "<svg width='"+standardSize*4+"' height='"+standardSize*4+"'>"+
          "<circle cx='"+standardSize*2+"' cy='"+standardSize*2+"' r='"+jsPsych.timelineVariable('stimulusLeft', true)/2+"' fill='"+stimColor+"'></circle>"+
            "<circle cx='"+jsPsych.timelineVariable('surroundLeftX0', true)+"' cy='"+jsPsych.timelineVariable('surroundLeftY0', true)+"' r='"+jsPsych.timelineVariable('surroundLeft', true)/2+"' fill='"+jsPsych.timelineVariable('peripheralColor', true)+"'></circle>"+
            "<circle cx='"+jsPsych.timelineVariable('surroundLeftX1', true)+"' cy='"+jsPsych.timelineVariable('surroundLeftY1', true)+"' r='"+jsPsych.timelineVariable('surroundLeft', true)/2+"' fill='"+jsPsych.timelineVariable('peripheralColor', true)+"'></circle>"+
            "<circle cx='"+jsPsych.timelineVariable('surroundLeftX2', true)+"' cy='"+jsPsych.timelineVariable('surroundLeftY2', true)+"' r='"+jsPsych.timelineVariable('surroundLeft', true)/2+"' fill='"+jsPsych.timelineVariable('peripheralColor', true)+"'></circle>"+
            "<circle cx='"+jsPsych.timelineVariable('surroundLeftX3', true)+"' cy='"+jsPsych.timelineVariable('surroundLeftY3', true)+"' r='"+jsPsych.timelineVariable('surroundLeft', true)/2+"' fill='"+jsPsych.timelineVariable('peripheralColor', true)+"'></circle>"+
            "<circle cx='"+jsPsych.timelineVariable('surroundLeftX4', true)+"' cy='"+jsPsych.timelineVariable('surroundLeftY4', true)+"' r='"+jsPsych.timelineVariable('surroundLeft', true)/2+"' fill='"+jsPsych.timelineVariable('peripheralColor', true)+"'></circle>"+
            "<circle cx='"+jsPsych.timelineVariable('surroundLeftX5', true)+"' cy='"+jsPsych.timelineVariable('surroundLeftY5', true)+"' r='"+jsPsych.timelineVariable('surroundLeft', true)/2+"' fill='"+jsPsych.timelineVariable('peripheralColor', true)+"'></circle>"+
            "<circle cx='"+jsPsych.timelineVariable('surroundLeftX6', true)+"' cy='"+jsPsych.timelineVariable('surroundLeftY6', true)+"' r='"+jsPsych.timelineVariable('surroundLeft', true)/2+"' fill='"+jsPsych.timelineVariable('peripheralColor', true)+"'></circle>"+
            "<circle cx='"+jsPsych.timelineVariable('surroundLeftX7', true)+"' cy='"+jsPsych.timelineVariable('surroundLeftY7', true)+"' r='"+jsPsych.timelineVariable('surroundLeft', true)/2+"' fill='"+jsPsych.timelineVariable('peripheralColor', true)+"'></circle>"+
        "</svg>"+
        "<svg width='"+standardSize*4+"' height='"+standardSize*4+"'>"+
          "<circle cx='"+standardSize*2+"' cy='"+standardSize*2+"' r='"+jsPsych.timelineVariable('stimulusRight', true)/2+"' fill='"+stimColor+"'></circle>"+
            "<circle cx='"+jsPsych.timelineVariable('surroundRightX0', true)+"' cy='"+jsPsych.timelineVariable('surroundRightY0', true)+"' r='"+jsPsych.timelineVariable('surroundRight', true)/2+"' fill='"+jsPsych.timelineVariable('peripheralColor', true)+"'></circle>"+
            "<circle cx='"+jsPsych.timelineVariable('surroundRightX1', true)+"' cy='"+jsPsych.timelineVariable('surroundRightY1', true)+"' r='"+jsPsych.timelineVariable('surroundRight', true)/2+"' fill='"+jsPsych.timelineVariable('peripheralColor', true)+"'></circle>"+
            "<circle cx='"+jsPsych.timelineVariable('surroundRightX2', true)+"' cy='"+jsPsych.timelineVariable('surroundRightY2', true)+"' r='"+jsPsych.timelineVariable('surroundRight', true)/2+"' fill='"+jsPsych.timelineVariable('peripheralColor', true)+"'></circle>"+
            "<circle cx='"+jsPsych.timelineVariable('surroundRightX3', true)+"' cy='"+jsPsych.timelineVariable('surroundRightY3', true)+"' r='"+jsPsych.timelineVariable('surroundRight', true)/2+"' fill='"+jsPsych.timelineVariable('peripheralColor', true)+"'></circle>"+
            "<circle cx='"+jsPsych.timelineVariable('surroundRightX4', true)+"' cy='"+jsPsych.timelineVariable('surroundRightY4', true)+"' r='"+jsPsych.timelineVariable('surroundRight', true)/2+"' fill='"+jsPsych.timelineVariable('peripheralColor', true)+"'></circle>"+
            "<circle cx='"+jsPsych.timelineVariable('surroundRightX5', true)+"' cy='"+jsPsych.timelineVariable('surroundRightY5', true)+"' r='"+jsPsych.timelineVariable('surroundRight', true)/2+"' fill='"+jsPsych.timelineVariable('peripheralColor', true)+"'></circle>"+
            "<circle cx='"+jsPsych.timelineVariable('surroundRightX6', true)+"' cy='"+jsPsych.timelineVariable('surroundRightY6', true)+"' r='"+jsPsych.timelineVariable('surroundRight', true)/2+"' fill='"+jsPsych.timelineVariable('peripheralColor', true)+"'></circle>"+
            "<circle cx='"+jsPsych.timelineVariable('surroundRightX7', true)+"' cy='"+jsPsych.timelineVariable('surroundRightY7', true)+"' r='"+jsPsych.timelineVariable('surroundRight', true)/2+"' fill='"+jsPsych.timelineVariable('peripheralColor', true)+"'></circle>"+
        "</svg>"
      return html;
    },
  choices: [leftASCII, rightASCII],
  trial_duration: 2000,
  response_ends_trial: true,
  data: jsPsych.timelineVariable('data'),
  post_trial_gap: 200,
  on_finish:
    function(data){
      data.subjectkey = GUID;
      data.src_subject_id = workerId;
      data.site = siteNumber;
      data.interview_date = today;
      data.interview_age = ageAtAssessment;
      data.sex = sexAtBirth;
      data.phenotype = groupStatus;
      data.handedness = handedness;
      condition     = jsPsych.data.get().last().values()[0].condition;
      stim_left      = jsPsych.data.get().last().values()[0].stim_center_left;
      stim_right     = jsPsych.data.get().last().values()[0].stim_center_right;
      surround_left  = jsPsych.data.get().last().values()[0].stim_surround_left;
      surround_right = jsPsych.data.get().last().values()[0].stim_surround_right;
      correct_resp   = jsPsych.data.get().last().values()[0].correct_response;
      data.index = trialNumber;
      trial_number = data.index;

      data.block = blockNumber;
      block_number = data.block_number;
      if (block_number === 1 || block_number === 6) {
        data.trial_type = 'practice';
        trialNumber--;
      } else {
        data.trial_type = 'experiment';
        trialNumber++;
      }
      if (condition === 'no_context') {
        if (trialNumber === numberOfNoContextTrialsPerBlock+1) {
          trialNumber = 1;
          blockNumber++;
        } 
      } else {
        if (trialNumber === numberOfContextTrialsPerBlock+1) {
          trialNumber = 1;
          blockNumber++;
        }
      }
      if (data.key_press === data.correct_response) {
//        console.log('correct');
        data.accuracy = 1;
      } else if (data.key_press !== data.correct_response) {
//        console.log('incorrect');
        data.accuracy = 0;
      } else {
        data.accuracy = '';
      }
//      console.log(data.practice, condition, block_number, trial_number, stimLeft, stimRight, surroundLeft, surroundRight, correctResp, data.key_press, data.accuracy, data.rt);
    }
};

let save_data = {
  type: "html-keyboard-response",
  stimulus: "<p>Data saving...</p>"+
  '<div class="sk-cube-grid">'+
'<div class="sk-cube sk-cube1"></div>'+
'<div class="sk-cube sk-cube2"></div>'+
'<div class="sk-cube sk-cube3"></div>'+
'<div class="sk-cube sk-cube4"></div>'+
'<div class="sk-cube sk-cube5"></div>'+
'<div class="sk-cube sk-cube6"></div>'+
'<div class="sk-cube sk-cube7"></div>'+
'<div class="sk-cube sk-cube8"></div>'+
'<div class="sk-cube sk-cube9"></div>'+
'</div>'+
  "<p>Do not close this window until the text dissapears.</p>",

  choices: jsPsych.NO_KEYS,
  trial_duration: 5000,
  on_finish: function(){
    saveData("ebbinghaus_" + workerId, jsPsych.data.get().csv());
    document.getElementById("unload").onbeforeunload='';
    $(document).ready(function(){
    $("body").addClass("showCursor"); // returns cursor functionality
});
  }
};

let end = {
  type: "html-keyboard-response",
  stimulus:   "<p>Thank you!</p>"+
  "<p>You have successfully completed the experiment and your data has been saved.</p>"+
  "<p>To leave feedback on this task, please click the following link:</p>"+
  "<p style='color:white;'><a href="+feedbackLink+">Leave Task Feedback!</a></p>"+
  // "<p>Please wait for the experimenter to continue.</p>"+
  "<p><i>You may now close the expriment window at anytime.</i></p>",
  choices: jsPsych.NO_KEYS,
};

$.getScript("exp/main.js");