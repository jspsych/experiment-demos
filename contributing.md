# Guide for Contributing Experiments to the Repo
Submitted experiments should follow this structure: 
```bash
experiment-demos
└── my_experiment
    ├── Readme.md
    ├── assets
    │   ├── images
    │   └── sound
    ├── my_experiment.html
    ├── jspsych
    ├── my_experiment.css
    └── my_experiment_setup_eng.js
```
* "my_experiment" should be a descriptive name for the experiment, all lower-case. 
* "Readme.md" should contain the following information:
    *  Experiment Name
    *  Who wrote it
    *  Background (about the task and important citations)
    *  Task Description (what happens during the task)
    *  Results File Information (what is included in the output file)
    *  Experimental Set-up (event-related, block design)
    *  Stimuli (what the stimuli are)
    *  Modifiable Parameters (what parameters are modifiable, i.e. number of trials etc.)
* "assets" should contain any image or sound files necessary for the experiment, stored in the folders "images" and "sounds".
* "my_experiment.html" should contain the main experiment code. Sub-experiments can be named using the following convention: "my_experiment_xxx.html", where "xxx" is a short but descriptive name for each sub-experiment.  
* "jspsych" should contain the jspsych files necesserary to run the experiment.
*  "my_experiment.css" is optional and should be named using the name used for the experiment folder, and contain styling information for your website, if necessary. 
*  "my_experiment_setup_eng.js" should be named using the name used for the experiment folder, with "eng" indicating the language (using [ISO 639-3 codes](https://iso639-3.sil.org/code_tables/639/data)). It is a JS file that contain variables for all of the modifiable parameters of the experiment. This includes text (welcome, instructions, feedback) and experiment parameters. This approach because separates everything someone might want to change for their own purposes from the main experiment code. The language code ("eng" in this case) indicates the language used for instructions etc. and make it easier for other contributors to translate the task for other languages.
