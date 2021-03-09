
for (let i = 0; i < startText.length; i++) {
    start.push({
      type: "html-keyboard-response",
      stimulus: startText[i],
      choices: [32]
    });
    timeline.push(start[i]);
  };
  
  if (Math.random() >= 0.5) { // no-context condition first
    /* no context instructions */
    for (let i = 0; i < noContextInstructionsText.length; i++) {
      noContextInstructions.push({
        type: "html-keyboard-response",
        stimulus: noContextInstructionsText[i],
        choices: [32]
      });
      timeline.push(noContextInstructions[i]);
    };
  
    for (let block = 0; block<5; block++) {
      /* no context trials */
      let noContextProcedure = {
        timeline: [stimuli],
        timeline_variables: noContextStim,
        randomize_order: true,
        type: 'fixed-repititions',
        repetitions: 1
      };
      timeline.push(noContextProcedure);
      for (let i = 0; i < startNextText.length; i++) {
        startNext.push({
          type: "html-keyboard-response",
          stimulus: startNextText[i],
          choices: [32]
        });
        timeline.push(startNext[i]);
      };
    };
  
    /* context instructions */
    for (let i = 0; i < contextInstructionsText.length; i++) {
      contextInstructions.push({
        type: "html-keyboard-response",
        stimulus: contextInstructionsText[i],
        choices: [32]
      });
      timeline.push(contextInstructions[i]);
    };
  
    for (let block = 0; block<5; block++) {
      /* context trials */
      let contextProcedure = {
        timeline: [stimuli],
        timeline_variables: contextStim,
        randomize_order: true,
        type: 'fixed-repititions',
        repetitions: 1
      };
      timeline.push(contextProcedure);
      for (let i = 0; i < startNextText.length; i++) {
        startNext.push({
          type: "html-keyboard-response",
          stimulus: startNextText[i],
          choices: [32]
        });
        timeline.push(startNext[i]);
      };
    };
  
  } else { // context condition first
    /* context instructions */
    for (let i = 0; i < contextInstructionsText.length; i++) {
      contextInstructions.push({
        type: "html-keyboard-response",
        stimulus: contextInstructionsText[i],
        choices: [32]
      });
      timeline.push(contextInstructions[i]);
    };
  
    for (let block = 0; block<5; block++) {
      /* context trials */
      let contextProcedure = {
        timeline: [stimuli],
        timeline_variables: contextStim,
        randomize_order: true,
        type: 'fixed-repititions',
        repetitions: 1
      };
      timeline.push(contextProcedure);
      for (let i = 0; i < startNextText.length; i++) {
        startNext.push({
          type: "html-keyboard-response",
          stimulus: startNextText[i],
          choices: [32]
        });
        timeline.push(startNext[i]);
      };
    };
  
    /* no context instructions */
    for (let i = 0; i < noContextInstructionsText.length; i++) {
      noContextInstructions.push({
        type: "html-keyboard-response",
        stimulus: noContextInstructionsText[i],
        choices: [32]
      });
      timeline.push(noContextInstructions[i]);
    };
  
    for (let block = 0; block<5; block++) {
      /* no context trials */
      let noContextProcedure = {
        timeline: [stimuli],
        timeline_variables: noContextStim,
        randomize_order: true,
        type: 'fixed-repititions',
        repetitions: 1
      };
      timeline.push(noContextProcedure);
      for (let i = 0; i < startNextText.length; i++) {
        startNext.push({
          type: "html-keyboard-response",
          stimulus: startNextText[i],
          choices: [32]
        });
        timeline.push(startNext[i]);
      };
    };
  }
  
  /* completion */
  timeline.push(save_data);
  timeline.push(end);