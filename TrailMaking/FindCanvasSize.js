function FindCanvasSize(SuggestedWidth, SuggestedHeight, HeightOffset, WidthOffset) 
{
	
	// find screen dimension
	var ScreenHeight = screen.height
	var ScreenWidth = screen.width

  // adjust the height and width
  ScreenHeight = ScreenHeight - HeightOffset
  ScreenWidth = ScreenWidth - WidthOffset

  console.log("Suggested Height")
  console.log(SuggestedHeight)
  console.log("Actual Height")
  console.log(ScreenHeight)

  /* Check the canvas size and adjust as needed */
  // is suggested size SMALLER than the full screen?
  ratio = SuggestedWidth/SuggestedHeight
  var EnoughWidth = ScreenWidth > SuggestedWidth
  var EnoughHeight = ScreenHeight > SuggestedHeight

  // if there is not enough height use the max and adjust the width based on the ratio
  
  CanvasWidth = SuggestedWidth
  CanvasHeight = SuggestedHeight
  
  if ( ! EnoughWidth  &&  ! EnoughHeight ) {
    console.log('Not enought height OR width')
    // check if screen is portrair or landscape
    if ( ScreenWidth > ScreenHeight) {
      // landscape -- use height adjust width
      CanvasWidth = ScreenHeight * ratio
    }
    else {
      // portrait
      CanvasHeight = ScreenWidth / ratio
    }
  }
  if ( ! EnoughWidth  &&  EnoughHeight ) {
    console.log("Not enough width")
    CanvasWidth = ScreenWidth
    CanvasHeight = ScreenWidth / ratio
  }

  if ( ! EnoughHeight  &&  EnoughWidth ) {
    console.log("Not enough Height")
    CanvasHeight = ScreenHeight
    CanvasWidth = ScreenHeight * ratio
  }
  console.log(CanvasHeight)
  return {CanvasWidth, CanvasHeight};
}
