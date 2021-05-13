const repeat_trials = 10;                         // how many times to repeat each trial type
                                                  // total_trials = repeat_trials * 2 * 2 * test_inner.lenght()
const block_number = 10;                          // how many blocks to include in the experiment 

const prompt_msg = "Keep staring at the cross in the center of the screen.\n\n"+
                   "Use the j and f keys to indicate "+
                   "whether or not the red T is present.\n\n"
                                                  // message to display before each trial.
                                                  // note: '\n\n' is needed at the end of each line 
                                                  // because prompt is displayed using the psychophysics plugin
const target_image = ''
const foil_images = ['',]