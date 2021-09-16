# Cambridge Face Memory Test
Stimuli provided by Brad Duchaine, from his original 2006 paper and from the 2012 paper by Dennett et al.  

First jsPsych implementation written in 2019 by Andreja Stajduhar. 

Heavily modified for easier parameterization and readability by Peter J. Kohler in 2021. 

# Background
This is the full length Cambridge Face Memory Test (CFMT), comprised of six target faces and a total of 72 items. The user has the option of running the experiment with upright and inverted images. Please see the original paper:

> Duchaine, B., & Nakayama, K. (2006). The Cambridge Face Memory Test: Results for neurologically intact individuals and an investigation of its validity using inverted face stimuli and prosopagnosic participants. Neuropsychologia, 44(4), 576–585.

The user also has the option of using images of cars rather than faces as described in:

> Dennett, H.W., McKone, E., Tavashmi, R. et al. The Cambridge Car Memory Test (2012). A task matched in format to the Cambridge Face Memory Test, with norms, reliability, sex differences, dissociations from face memory, and expertise effects. Behav Res 44, 587–605.

Finally, the user can use masked versions of the face images, as in this study exploring face recognition performance during the COVID-19 pandemic: 

> Freud, E., Stajduhar, A., Rosenbaum, R. S., Avidan, G., & Ganel, T. (2020). The COVID-19 pandemic masks the way people perceive faces. Scientific Reports, 10(1), 22344.
# Task Description
The first level of the CFMT involves showing six target identities (faces, masked faces or cars) from three different viewpoints (right, front, left) for 3 seconds each. Participants are then asked to identify the identity they have previously seen from a choice of three (3-alternative forced choice task). The second level involves simultaneous refresher of the six identities from one (frontal) viewpoint followed by testing from novel viewpoints and lighting conditions. The third (difficult) level is similar to the second level but includes test images with added visual noise. A short practice level precedes the first level. 

# Duration
5-10 minutes

# Results File Information
Beyond the standard data saved by the plugins (stimulus, rt, response, etc.), the following parameters are stored:
* type_of_trial: indicates level ("practice", "easy", "medium", "difficult") and phase ("learn" or "probe")
* image_category: "faces", "cars" or "maskedfaces"
* image_inverted: boolean indicating whether the images was inverted (TRUE) or upright (FALSE)
* correct_key: indicates which key was the correct response on each trial
* response_correct: indicates whether the participant actually made the correct response

# Experimental Set-up
There is a setup file which allows the researcher to modify the experiment parameters, including the category to use, and whether to invert the images or not.

# Stimuli
The stimuli are the original images used in Duchaine & Nakayama (2006), Dennett et al. (2012) and Freud et al. (2020). The images are provided with both the original file names (stored in "/assets/images/faces", etc), and renamed versions for easy of use (stored in "/assets/images/ready_images"). 

The notebook "remapping.ipynb" provides python code that takes the information provided in the Excel files ("faces_mapping.xls" and "cars_mapping.xls"), copies the images to "ready_images" and renames them, and generates strings holding the correct key for each image that can be pasted into the setup file. **Note: This is has already been done with the 3 image sets provided here, and is only necessary to do if a user wants to do a new version of the experiment with a new image set.**

# Modifiable Parameters
* img_category: image category
* inverted: invert the images
* image_height: image size (only specify height, aspect ratio is maintained)
* randomize_view: randomize order of viewpoints during learning phase
<br>**note: this was not done in the original CFMT, and should not be done if users want to run the standard CFMT**
* randomize_ID: randomize order of item identities over the experiment
<br>**note: this was not done in the original CFMT, and should not be done if users want to run the standard CFMT**
* learn_duration, review_duration: learn and review durations
* all prompts and instructions
