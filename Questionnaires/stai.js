var title = "Stait Trait Anxiety Index"

var scale = [
    "Almost always",
    "Often",
    "Sometimes",
    "Almost never"
  ]

var ReverseScoreDirection = [false, true, false, true, true, false, false, false, false, false, true, true, false, false, true, false, true, true, false, true]

var items = [
    {prompt: "I feel pleasant.", labels: scale},
    {prompt: "I feel nervous and restless.", labels: scale},
    {prompt: "I feel satisfied with myself.",labels: scale},
    {prompt: "I wish I could be as happy as others seem to be.",labels: scale},
    {prompt: "I feel like a failure.",labels: scale},
    {prompt: "I feel rested.",labels: scale},
    {prompt: 'I am "calm, cool, and collected".',labels: scale},
    {prompt: "I feel that difficulties are piling up so that I cannot overcome them.",labels: scale},
    {prompt: "I worry too much over something that doesn't really matter.",labels: scale},
    {prompt: "I am happy.",labels: scale},
    {prompt: "I have disturbing thoughts.",labels: scale},
    {prompt: "I lack self-confidence.",labels: scale},
    {prompt: "I feel secure.",labels: scale},
    {prompt: "I make decisions easily.",labels: scale},
    {prompt: "I feel inadequate.",labels: scale},
    {prompt: "I am content.",labels: scale},
    {prompt: "Some unimportant thought runs through my mind and bothers me.",labels: scale},
    {prompt: "I take disappointments so keenly that I can't put them out of my mind.",labels: scale},
    {prompt: "I am a steady person.",labels: scale},
    {prompt: "I get in a state of tension or turmoil as I think over my recent concerns and interest.", labels: scale},
  ]

  var instructions = 'Read each statement and then choose the answer to indicate how you generally feel.'
