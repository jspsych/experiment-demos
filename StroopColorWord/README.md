# Stroop color, word task with keyboard input
Script copyright: 03-01-2021 Jason Steffener, Neurocognitive Mapping Laboratory

# Background
This is an implementation of the classic Stroop task with keyboard input. 

# Task Description
Participants see rectangles of different color and need to indentify the color of the rectangle. Participants are next shown words presented in black font color and they need to identify the color that the word represents. Finally, participants see words, which are the same names of colors as in teh previous task, and they need to identify the font color that the word is presented in.

# Duration
This depends on the timing parameters chosen and the response time of the participants. 

# Results File Information
The results fil contains trial level information about response time, accuracy, key press and time elapsed. Fixation, practice and test trials are included in the document. To get responses only for test trials the results need to be filtered for all trials occuring after the test trials begin and only "trials" in the "test_part" column of the results.

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




