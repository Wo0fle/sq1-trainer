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

function getCases(currentSet = 'ERROR') {
    let currentSetFileName = currentSet.toLowerCase();
    let location = '../case-sets/' + currentSetFileName

    cases = null // get cases from location somehow, but only the ones I need
}

function pickCases() {
    // select from the possible cases which should be in checkboxes
    console.log(currentSet)
}