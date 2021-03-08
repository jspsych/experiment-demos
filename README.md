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
        ├── assets
        │   ├── images
        │   └── sound
        ├── data
        ├── index.html
        └── jspsych
    ```
    "my_experiment" should be a descriptive name for the experiment, all lower-case. "jspsych" should contain the jspsych files necesserary to run the experiment.     
3. Make a pull request. Other contributors may reach out to you about adaptating or optimizing the experiment. 

## How Can I Run the Experiment?

