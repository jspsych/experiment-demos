This is a selection of questionnaires.

Each questionnaire requires two files:
- a javascipt NAME_setup_eng.js file which contains multiple parts stored as javascript (JS) variables. Each unique scale is made by building this file. This separates the code (in the HTNL file described below) and the JS file. This also facilitates language translation of questionnaires.
- title
- scale
- if this is a Likert type questionnaires, these are the values used. There can be as many scales as needed for the questionnaire
- ReverseScoreDirection
- This allows for reverse scoring of some questions using a true/false flag
- items
- This is an array of objects containing the prompt for each question and the associated scale to use
- instructions

- an html NAME.html file. There is one HTML file for each questionnaire. This file is created with minor modifications from the BLANK.html file. This file contains the presentation of the questionnaire and provides all scoring of the questionnaire. The responses to all questions and the total score are saved as output. 
- The only required modification is to change the last <script> impoirt line to the JS file name above.
