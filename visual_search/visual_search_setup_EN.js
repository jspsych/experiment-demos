const target_present = [true, false] //whether or not the target is present in each trial
const set_size = [1, 5, 15, 30] //number of distractors in each trial

const repeat_trials = 10; // how many times to repeat each trial type
                                                 
const block_number = 10; // how many blocks to include in the experiment 

const prompt_msg = "Keep staring at the black dot in the center of the screen.\n\n"+
                   "Use the j and f keys to indicate "+
                   "whether or not the red T is present. If it is present press j. If not press f.\n\n"
                                                  // message to display before each trial.
                                                  // note: '\n\n' is needed at the end of each line 
                                                  // because prompt is displayed using the psychophysics plugin
const conjunction_target = ['assets/images/greenT.png', 'assets/images/greenT.png'] 
const shape_target = ['assets/images/greenS.png', 'assets/images/redS.png']
const colour_target = ['assets/images/blueL.png', 'assets/images/blueT.png']
const foil_images = ['assets/images/greenL.png', 'assets/images/redT.png'] 
const fixation = 'assets/images/blackDot.png' //fixation
const experiment_type = 'conjunction' //can also take the value 'shape' and 'colour'

const the_present_key = 'j'
const the_absent_key = 'f'