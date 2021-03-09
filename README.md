# experiment-demos

Repository for hosting **working experiments** created in jsPsych. 

Experiments should be based on already published work, with an emphasis on well-known/influential studies - this is not the place for new studies. 

We have two goals with this repository:
1. *Supporting Education in Experimental Psychology* by providing a set of experiments that can be hosted online so that students can collect behavioral data from themselves and each other, and analyze the data, as a part of lab and programming courses.   
1. *Supporting new research with jsPsych* by providing inspiration and a starting point for researchers interested in using jsPsych to develop new studies. 

## How Do I Contribute a Study?
1. Raise an issue [here](https://github.com/jspsych/experiment-demos/issues) to announce the experiment that you plan to contribute. Provide enough detail so that your other contributors can know which experiment you are planning to do. After you have raised the issue, maintainers will apply label "DemoTaskDevelopment" and assign you to the issue.
2. Make a branch of the experiment-demos repository. Add your new experiment as a subfolder at the top-level using this structure: 
    ```bash
    experiment-demos
    └── my_experiment
        ├── Readme.md
        ├── assets
        │   ├── images
        │   └── sound
        ├── data
        ├── index.html
        ├── jspsych
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
    * "index.html" should contain the main experiment code. 
    * "jspsych" should contain the jspsych files necesserary to run the experiment.
    *  "my_experiment_setup_eng.js" should be named using the name used for the experiment folder, with "eng" indicating the language (using [ISO 639-3 codes](https://iso639-3.sil.org/code_tables/639/data)). It is a JS file that contain variables for all of the modifiable parameters of the experiment. This includes text (welcome, instructions, feedback) and experiment parameters. This approach because separates everything someone might want to change for their own purposes from the main experiment code. The language code ("eng" in this case) indicates the language used for instructions etc. and make it easier for other contributors to translate the task for other languages.
3. Make a pull request. Other contributors may reach out to you about adaptating or optimizing the experiment. 

## How Can I Test an Experiment? 
Simply clone the repository or download the files to your local machine. Each experiment (or in some cases: set of sub-experiments) lives within in its own self-contained folder. Opening the index.html folder in your browser will launch the experiment.  

## How Can I Collect Data Using an Experiment?
### Cognition.run
...
### Pavlovia
...
### Self-hosting
...



