# Visual Search Task
Script copyright: 06-17-2021 Keshav Pabbi, Kohler Visual Neuroscience Lab

# Background
This is an implementation of the classic visual search task from Treisman and Gelade (1980). 

# Task Description
Participants are shown a series of images which are placed around the fixation point. They are asked to record whether or not the target image is present in each trial.

Instructions are shown to the participant where they are told what to do and which keys to use to respond. 

After each trial participants are told how many trials they have completed out of the total number of trials. After each block participants are told how many blocks they have completed out of the total number of blocks and they are told to take a break if needed.

Currently, when the task is completed the results are automatically saved as CSV files. Note, no participant ID is included in the name and files will be overwritten upon a subsequent run of the code.

# Duration
This depends on the timing parameters chosen and the response time of the participants. By default there are 10 repetitions leading to a total of 160 trials.

# Results File Information
The results file contains information about accuracy, key pressed, response time, number of items in the array, and if the target is present.

# Experimental Set-up
There is a setup file which allows the researcher to modify all instructions, target, fixation, stimulus size, distractors, types of trails, input keys, number of blocks and number of trials for task. Also keep in mind that the value for the visual search circle diameter can be calculated based on the stimulus size by default, however if the researcher wishes to not use this calculation, they can set the value of circle_diam to greater than 0.

The reseacher can also change the type of experiment in the setup file. By default it is set to conjunction however, the experiment can be run based on target shape or colour instead.

# Stimuli
The stimuli in this experiment are the distractor images (green L and red T) and or the target image (green T). The number of distractors and the type of distractors will be randomized in each trial. Also whether or not the target image is present will also be randomized in each trial.

# Modifiable Parameters
All instructional text. 
The number of trials.
The number of blocks.
Target used.
Distractors used.
Number of distractors.
Stimulus size.
Input keys used.
