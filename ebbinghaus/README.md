# Ebbinghaus experiment
Written in 2021 by Peter J. Kohler, Kohler Visual Neuroscience Laboratory, York University

# Background
This is an implementation of an experiment to measure the Ebbinghaus effect. The Experiment uses jspsych version 6.3 and the jspsych-psychophysics plugin which is currently available [here](https://github.com/kurokida/jspsych-psychophysics/releases).

# Task Description
Participants see circular discs presented on either side of the fixation point and need to use the arrow keys to identify which disc is bigger. Each disc is surrounded by a set of smaller discs. Reference disc always have the same size and are always surrounded by discs of the same size. Tests discs vary in size and are surrounded by discs that can either have the same size as the surrounding discs used for the reference discs (control condition), or be a different size, typically smaller (test condition). Every combination of test discs location (left vs right), test vs reference condition, and test disc size is presented in random order across the trials. The number of repetitions of each combination can be modified by the user - note that because test disc location is factored into the design but typically not analyzed, the effective number of trials per test disc size will be twice the number of repetitions. Trials are broken into blocks so that participants can take occasional breaks. When the experiment is complete the results are automatically saved as CSV files. Note, no participant ID is included in the name and files will be overwritten upon a subsequent run of the code.

# Duration
This depends on the timing parameters chosen and the response time of the participants. By default there are 10 repetitions leading to a total of 280 trials. 

# Results File Information
The results fil contains trial level information about response time, key press, time elapsed and whether the test disc was chosen to be larger ("test_bigger"). Pre-trial prompts and other non-trial evens are included in the data. To get responses only for test trials the results need to be filtered to only include columns where "test_bigger" is not NaN.

# Experimental Set-up
There is a setup file which allows the researcher to modify the experiment parameters, number of repetitions and the prompt shown to the user before each trial.

# Stimuli
The stimuli are grayscale filled discs generated using the jspsych-psychophysics plugin.

# Modifiable Parameters
* Number of repetitions
* Colors of the inner and outer discs
* Fixation point color
* Test and reference inner disc sizes
* Test and reference outer disc sizes
* Distance between inner and outer discs
* Distance of each disc group from fixation
* Welcome message shown in the beginning of the experiment.
* Prompt message shown before each trial 
* Message telling participants to press any key to continue.
* Message telling participants how many trials they have completed. 
* Message shown during breaks between blocks.




