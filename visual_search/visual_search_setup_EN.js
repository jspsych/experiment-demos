const target_present = [true, false] //whether or not the target is present in each trial
const set_size = [1, 5, 15, 30] //number of distractors in each trial

const repeat_trials = 10; // how many times to repeat each trial type
                                                 
const block_number = 10; // how many blocks to include in the experiment 

const conjunction_target = ['assets/images/greenT.png', 'assets/images/greenT.png'] 
const shape_target = ['assets/images/greenS.png', 'assets/images/redS.png']
const colour_target = ['assets/images/blueL.png', 'assets/images/blueT.png']
const foil_images = ['assets/images/greenL.png', 'assets/images/redT.png'] 
const fixation = 'assets/images/blackDot.png' //fixation
const experiment_type = 'conjunction' //can also take the value 'shape' and 'colour'

//keys to press
const the_present_key = 'j'
const the_absent_key = 'f'

//stimulus size
const stimw = 25
const stimh = 25

const circle_diam = 0 //if set at 0, circle diameter will be calculated based stimulus width and height

const prompt_msg = "Keep staring at the black dot in the center of the screen. <br>" +
                   "Use the j and f keys to indicate whether or not the target is present. <br>" +
                   "<strong>If the target is present press j. If not press f.</strong><br>"+
                   "Below you will see an example of the target image." 

const prac_msg = "There will be $PRAC_LEN practice trials before the experiment begins. Press any key to start."

const welcome_msg = "<strong>Welcome to the Visual Search Experiment.</strong><br>"+ 
                    "There will be $BLOCK_NUM blocks in this experiment. There will be $BLOCK_LEN trials in each block.<br>"+
                    "You will have the opportunity to take a break between blocks. Press any key to start the experiment."