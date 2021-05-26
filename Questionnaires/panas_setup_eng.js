var title = "Positive and Negative Affect Schedule (PANAS)"

var scale = [
    "Very slightly or not at all",
    "A little",
    "Moderately",
    "Quite a bit",
    "Extremely"
  ]
  
// All questions use the same direction so enter that single flag as an array of size 1
var ReverseScoreDirection = [false]

var items = [
    {prompt: "Interested", labels: scale},
    {prompt: "Distressed", labels: scale},
    {prompt: "Excited", labels: scale},
    {prompt: "Upset", labels: scale},
    {prompt: "Strong", labels: scale},
    {prompt: "Guilty", labels: scale},
    {prompt: "Scared", labels: scale},
    {prompt: "Hostile", labels: scale},
    {prompt: "Enthusiastic", labels: scale},
    {prompt: "Proud", labels: scale},
    {prompt: "Irritable", labels: scale},
    {prompt: "Alert", labels: scale},
    {prompt: "Ashamed", labels: scale},
    {prompt: "Inspired", labels: scale},
    {prompt: "Nervous", labels: scale},
    {prompt: "Determined", labels: scale},
    {prompt: "Attentive", labels: scale},
    {prompt: "Jittery", labels: scale},
    {prompt: "Active", labels: scale},
    {prompt: "Afraid", labels: scale},
  ]

var instructions = 'This scale consists of a number of words that describe different feelings and emotions. Indicate to what extent you feel this way right now, that is, at the present moment.'

var references = "Watson, D., Clark, L. A., & Tellegan, A. (1988). Development and validation of brief measures of positive and negative affect: The PANAS scales. *Journal of Personality and Social Psychology, 54*(6), 1063–1070."

