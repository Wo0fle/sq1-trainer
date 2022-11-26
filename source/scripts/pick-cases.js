// let currentSet; // var or let?? does it even matter in this case?
let cases;

function pickSet() {
    let caseSets = document.getElementById("caseSet");
    let currentSet = caseSets.options[caseSets.selectedIndex].text;  

    document.getElementById("currentSet").innerHTML = currentSet;
    
    ////////////////////////////
    console.log(currentSet)
    ////////////////////////////

    getCases(currentSet);
}

function getCases(curSet = 'ERROR') {
    // return possible cases (from txt file) from current case set
    let currentSetFileName = curSet.toLowerCase();

    cases = null; // create array of all case names
}

function pickCases() {
    // select from the possible cases which should be in checkboxes
    console.log(currentSet)
}