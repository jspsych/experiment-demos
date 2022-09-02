
# Trail Making Task
Script copyright: September 2022, Jason Steffener, Neural Cognitive Mapping Laboratory

# Background
This tasks assesses a participant's ability to rapidly scan and sequence a series of circles containing only numbers (version A) or a series of circles containing numbers and letters in alternating sequence (version B).

# Task Description
The participant uses a mouse or touch screen to connect the dots. When the participant enters a circle in the correct order to circle changes color. Therefore, if a participant enters a circle in the incorrect order the circle does not change color.

# Duration
A timer is set for both trials, based on current instructions.


# Modifiable Parameters
- FullScreenMode (true)
- TextFontSize ("30px") (text inside each circle)
- radius (15) (size of each circle)
- CircleColor ('white')
- CorrectCircleColor ('yellow') (Color circle changes too when selected correctly)
- CircleBorderWidth (2)
- FirstCircleLabel ('begin') (label for first circle)
- LastCircleLable ('end') (label for last circle)
- var tolerance (0) (how close to each circle the cursor needs to be)
- pen_width (2) (width of the pen)
- HeightAdj (160) (Adjustment of the height allwoing room for the finished button and the timer)

# Saved data
The drawing for each task is automatically saved as a PNG file with the name TrialA.png or TrialB.png.
The overall error count and total duration are saved. 
The elapsed time is recorded as well as the time when someone entered a circle and when they left a circle. This can be used to calculate thinking time and travel time.

# Special functions
- The plugin-sketchpad has been modified for this task and is called *plugin-sketchpad-trailmaking.js*- FindCanvasSize.js which uses a sugested height/width and finds a possible size basedon the screen and orientation.