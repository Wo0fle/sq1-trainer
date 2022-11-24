function selectSet() {
    let caseSet = document.getElementById("caseSet");
    let currentSet = caseSet.options[caseSet.selectedIndex].text;  

    document.getElementById("curSet").innerHTML = currentSet;
    console.log(currentSet);

    retrieveCases(currentSet);
}

function retrieveCases(curSet = 'ERROR') {
    // return possible cases (from txt file) from current case set
    let currentSet = curSet.toLowerCase();

    selectCases(currentSet);
}

function selectCases(curSet) {
    // select from the possible cases which should be in checkboxes
}