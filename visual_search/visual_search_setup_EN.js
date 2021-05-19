const repeat_trials = 10;                         // how many times to repeat each trial type
                                                 
const block_number = 10;                          // how many blocks to include in the experiment 

const prompt_msg = "Keep staring at the black dot in the center of the screen.\n\n"+
                   "Use the j and f keys to indicate "+
                   "whether or not the red T is present.\n\n"
                                                  // message to display before each trial.
                                                  // note: '\n\n' is needed at the end of each line 
                                                  // because prompt is displayed using the psychophysics plugin
const target_image = 'assets/images/redT.png' //red T
const foil_images = ['assets/images/greenL.png', 'assets/images/greenT.png', 'assets/images/redL.png'] //distractor images
const fixation = 'assets/images/blackDot.png' //fixation

const the_present_key = 'j'
const the_absent_key = 'f'