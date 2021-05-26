var title = "Apathy Evaluation Scale (AES)"


var scale = [
    "Not at all",
    "Slightly",
    "Somewhat",
    "A lot"
]

var ReverseScoreDirection = [false, false, false, false, false, true, false, false, false, true, true, false,false, false, false, false, false, false]

var aesItems = [
    {prompt: "I am interested in things.", labels: scale},
    {prompt: "I get things done during the day.", labels: scale},
    {prompt: "Getting things started on my own is important to me.", labels: scale},
    {prompt: "I am interested in having new experiences.", labels: scale},
    {prompt: "I am interested in learning new things.", labels: scale},
    {prompt: "I put little effort into anything.", labels: scale},
    {prompt: "I approach life with intensity.", labels: scale},
    {prompt: "Seeing a job through to the end is important to me.", labels: scale},
    {prompt: "I spend time doing things that interest me.", labels: scale},
    {prompt: "Someone has to tell me what to do each day.", labels: scale},
    {prompt: "I am less concerned about my problems than I should be.", labels: scale},
    {prompt: "I have friends.", labels: scale},
    {prompt: "Getting together with friends is important to me.", labels: scale},
    {prompt: "When something good happens, I get excited.", labels: scale},
    {prompt: "I have an accurate understanding of my problems.", labels: scale},
    {prompt: "Getting things done during the day is important to me.", labels: scale},
    {prompt: "I have initiative.", labels: scale},
    {prompt: "I have motivation.", labels: scale}
  ]
  
var aesInstructions = 'For each statement, choose the answer that best describes the your thoughts, feelings, and activity in the past 4 weeks.'

var aesReferences = "Marin, R. S., Biedrzycki, R. C., & Firinciogullari, S. (1991). Reliability and validity of the Apathy Evaluation Scale. Psychiatry research, 38(2), 143-162."
