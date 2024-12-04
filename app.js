const volWetEl = document.getElementById("volWet");
const cementEl = document.getElementById("cement");
const sandEl = document.getElementById("sand");
const coarseEl = document.getElementById("coarse");
const waterEl = document.getElementById("water");
const btnEl = document.getElementById("btn");
const cementResultEl = document.getElementById("cementResult");
const sandResultEl = document.getElementById("sandResult");
const coarseResultEl = document.getElementById("coarseResult");
const waterResultEl = document.getElementById("waterResult");

function calculate(){
    const volWetVal = volWetEl.value;
    const cementVal = cementEl.value;
    const sandVal = sandEl.value;
    const coarseVal = coarseEl.value;
    const waterVal = waterEl.value;

    const VolDryVal = volWetVal/1.5;
    const add = cementVal+sandVal+coarseVal;
    const waterResult = VolDryVal*waterVal;
    waterResultEl.innerText = waterResult.toFixed(2);
    const cementResult = ((VolDryVal*cementVal/add)/1.25);
    cementResultEl.innerText = cementResult.toFixed(2);
    const sandResult = (VolDryVal*sandVal/add);
    sandResultEl.innerText = sandResult.toFixed(2);
    const coarseResult = (VolDryVal*coarseVal/add);
    coarseResultEl.innerText = coarseResult.toFixed(2);




}


btnEl.addEventListener("click", calculate);