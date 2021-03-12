# Stroop color, word task with keyboard input
Script copyright: 03-01-2021 Jason Steffener, Neurocognitive Mapping Laboratory

# Background
This is an implementation of the classic Stroop task with keyboard input. 

# Task Description
Participants see rectangles of different color and need to indentify the color of the rectangle. Participants are next shown words presented in black font color and they need to identify the color that the word represents. Finally, participants see words, which are the same names of colors as in teh previous task, and they need to identify the font color that the word is presented in.

The three parts of the Stroop are broekn into three separate HTML files. 
For each task instructions are shown to the participant where they are told what to do and which keys to use to respond. 
After the instructions practice trials are presented and accuracy feedback is provided. If the participant gets 50% accuracy then the test trials are run. If accuracy is below 50% then the practice is run a second time. Practice will be run a maximum of 3 times if accuracy is below 50%. After that the test trials are presented. Test trials do not present feedback. The same structure is used for the Color, Word and Color/Word versions of the task.

Currently, when the task is completed the results are automatically saved as CSV files. Note, no participant ID is included in the name and files will be overwritten upon a subsequent run of the code.

# Duration
This depends on the timing parameters chosen and the response time of the participants. 

# Results File Information
The results fil contains trial level information about response time, accuracy, key press and time elapsed. Fixation, practice and test trials are included in the document. To get responses only for test trials the results need to be filtered to only include "test trials" in the "type" column of the results.

# Experimental Set-up
There is a setup file which allows the researcher to modify all instructions, timing and number fo trials for all three of the tasks.

# Stimuli
The "color" part of the task uses rectangles as stimuli. The "word" part of the task uses the words: red, yellow, green and blue as stimuli presented in black font color. The "color/word" part of the task uses the same words presented in any of the colors. Therefore, some trials are considered congruent where the word and color match. Other trials are considered incongruent where the word and the colors do not match.


# Modifiable Parameters
All instructional text. 
The number of trials for practice and test phases.
Font size of the instructional text
Font size of the stimuli text
Feedback length
Colors used. For instance, the green is rather bright.




