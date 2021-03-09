<div class="screening" style="background-color:lightgray; text-align:center; margin:35px; vertical-align:middle">
<br>
<h1 style="text-align:center;">CAPR Participant Intake</h1>
<!-- <input type="text" id="result"> -->
  <div id="intake">
    

  <form>
    <!-- <label for="handedness"><b>Are you right or left handed?</b></label> -->
    <p><b>Which is your dominant hand?</b></p>
        <label for="right">Right</label>
        <input type="radio" name="handedness" id="rightHanded" value="rightHanded">

        <label for="left">Left</label>
        <input type="radio" name="handedness" id="leftHanded" value="leftHanded">

        <!-- <span class="checkmark"></span> -->

    <p><b>Before proceeding to the task, please confirm the following are true:</b></p>
    <label class="container">Screen brightness is up to 100% &nbsp&nbsp&nbsp&nbsp  
    <input type="checkbox" name="brightness" id="brightness" value="1"/>
    </label>
    <br>
    <!-- <label class="container">Headphones plugged in? &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp      
    <input type="checkbox" name="headphones" id="headphones" value="1"/>
    </label>
    <br>
    <label class="container">Headphone volume is set to 50% &nbsp&nbsp&nbsp  
    <input type="checkbox" name="volume" id="volume" value="1"/>
  </label> -->
  </form>
  
  <!-- <label class="container">Headphones plugged in? &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp               
    <input type="checkbox"> 
    <br>
  </label>

  <label class="container">Headphones volume at 50%? &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp          
    <input type="checkbox"> 
    <br>
  </label>
</form>
<br> -->
<button id="submitButton" class="btn btn-primary btn-lg loadMain" onclick="validateHandedness(), validateBrightness(),/* validateHeadphones(), validateVolume()*/ submitIntake()" type="button">SUBMIT</button>
</div>
<div id="validation" style="display: none">
    <br>
    <form>
</form>
</div>

<div id="load" style="display: none">
<h3>All validation rules were passed successfully. Click to load the experiment.</h3>
<button id="nextButton" class="noCursor" onclick="startExperiment()">LOAD</button>
<!-- <p id="nextButton" style="display: none" >please make sure you are in a quiet place. When you are ready to begin, click 'START'</p> -->
<br>
</div>
<script>$("button.loadMain").click(function(){
      $.getScript("exp/timeline.js");
      // $.getScript("exp/main.js");
  }); </script>
<script>
$("button.noCursor").click(function(){
$("body").addClass("hideCursor");
}); 
</script>
