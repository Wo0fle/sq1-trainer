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

async function getCases(currentSet = 'ERROR') {
    let currentSetFileName = currentSet.toLowerCase();
    const module = await import(`./case-sets/${currentSetFileName}.js`);
    cases = module.cases;
    
    ////////////////////////////
    console.log(cases);
    ////////////////////////////

    createCases();
    pickCases();
}

/*function removeOldCases() {
    // remove the old cases
    // use Element.remove()

    // prob gotta loop through all cases in current case set, and remove em
}*/

function createCases() {
    const caseContainer = document.getElementById("case-container")
    const casePlace = document.getElementById("casesGoHere");

    for (let curCase in cases.evenCases) {
        let caseName = cases.evenCases[curCase][0]

        const newCaseDiv = document.createElement("div");
        newCaseDiv.setAttribute("class", "case-checkbox")
        newCaseDiv.setAttribute("value", caseName)
        const newCaseContent = document.createTextNode(caseName);

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("value", caseName)

        newCaseDiv.appendChild(checkbox);
        newCaseDiv.appendChild(newCaseContent);

        caseContainer.insertBefore(newCaseDiv, casePlace);
    } //create even parity cases

    for (let curCase in cases.oddCases) {
        let caseName = cases.oddCases[curCase][0]

        const newCaseDiv = document.createElement("div");
        newCaseDiv.setAttribute("class", "case-checkbox")
        newCaseDiv.setAttribute("value", caseName)
        const newCaseContent = document.createTextNode(caseName);

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("value", caseName)

        newCaseDiv.appendChild(checkbox);
        newCaseDiv.appendChild(newCaseContent);

        caseContainer.insertBefore(newCaseDiv, casePlace);
    } //create odd parity cases
}

function pickCases() {
    // select from the possible cases which should be in checkboxes
    console.log(currentSet);
}

// i also need to learn when to use const, var, and let