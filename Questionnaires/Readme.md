# This is a selection of questionnaires.

## Organization
This folder is organized so that all of the questionnaire setup files are in the *assets* folder

Each questionnaire uses multiple files:

## NAME_setup_eng.js 
_ These are the files in the *assets* folder
- This contains multiple parts stored as javascript (JS) variables. Each unique scale is made by building this file. This separates the code (in the HTML file described below) and the JS file. This also facilitates language translation of questionnaires.
- title
- scale
- if this is a Likert type questionnaires, these are the values used. There can be as many scales as needed for the questionnaire
- ReverseScoreDirection
- This allows for reverse scoring of some questions using a true/false flag
- items
- This is an array of objects containing the prompt for each question and the associated scale to use
- instructions

## NAME.html file 
- There is one HTML file for each questionnaire. This file is created with minor modifications from the BLANK.html file. This file contains the presentation of the questionnaire and provides all scoring of the questionnaire. The responses to all questions and the total score are saved as output. 
- The only required modification is to change the last <script> impoirt line to the JS file name above.

## There are also two other support files.the
- One is the *questionnaire_setup_eng.js* file. This contains general parameters that will affect all questionnires. Currently it contains two parameters: 
-- the number of questions per page
-- the width of the questions on the screen

- The other file *questionnaire_functions.js* contain functions that are used by all questionnaires. Right now there is only the function for splitting a list of questions into separate pages.



### The BDI
The BDI scale is slightly different because it does not use likert type questions. It therefore uses the *jspsych-survey-multi-choice* plugin.