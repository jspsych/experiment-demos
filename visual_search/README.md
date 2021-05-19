# Visual Search Task
Script copyright: 05-17-2021 Keshav Pabbi, Kohler Visual Neuroscience Lab

# Background
This is an implementation of the classic visual search task from ____. 

# Task Description
Participants are shown a series of images which are placed around the fixation point. They are asked to record whether or not the target image is present in each trial.

Instructions are shown to the participant where they are told what to do and which keys to use to respond. 

After each trial participants are told how many trials they have completed out of the total number of trials. After each block participants are told how many blocks they have completed out of the total number of blocks and they are told to take a break if needed.

Currently, when the task is completed the results are automatically saved as CSV files. Note, no participant ID is included in the name and files will be overwritten upon a subsequent run of the code.

# Duration
This depends on the timing parameters chosen and the response time of the participants. 

# Results File Information
The results file contains trial level information about response time, accuracy, key press and time elapsed. Fixation, practice and test trials are included in the document. To get responses only for test trials the results need to be filtered to only include "test trials" in the "type" column of the results.

# Experimental Set-up
There is a setup file which allows the researcher to modify all instructions, timing, target, fixation, distractors, types of trails, input keys, number of blocks and number of trials for task.

# Stimuli
The stimuli in this experiment are the distractor images (red L, green l, green T) and or the target image (red T). The number of distractors and the type of distractors will be randomized in each trial. Also whether or not the target image is present will also be randomized in each trial.

# Modifiable Parameters
All instructional text. 
The number of trials.
The number of blocks.
Font size of the instructional text.
Target used.
Distractors used.
Number of distractors.




