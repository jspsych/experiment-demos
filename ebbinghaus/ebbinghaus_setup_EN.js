const color_inner = 'rgb(191, 191, 191)';           // color of inner discs
const color_outer = 'rgb(64, 64, 64)';           // color of outer discs
const fix_color = 'rgb(255, 255, 255)';
const ref_inner = 25;                             // inner disc radius (reference)
const test_inner = [20, 23, 24, 25, 26, 27, 30]   //                   (test)
const ref_outer = 35                              // outer disc radius (reference)
const test_outer = [35, 15]                       //                   (test)
const dist_discs = 80;                            // distance between inner and outer discs
const dist_groups = 200;                          // distance from fixation for each disc group
const repeat_trials = 10;                         // how many times to repeat each trial type
                                                  // total_trials = repeat_trials * 2 * 2 * test_inner.lenght()
const block_number = 10;                          // how many blocks to include in the experiment 

const prompt_msg = "Keep staring at the cross in the center of the screen.\n\n"+
                   "Use the left and right arrow keys to indicate "+
                   "which of the center circles is biggest.\n\n"
                                                  // message to display before each trial.
                                                  // note: '\n\n' is needed at the end of each line 
                                                  // because prompt is displayed using the psychophysics plugin