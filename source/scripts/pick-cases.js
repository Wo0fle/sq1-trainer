let cases;

function pickSet() {
    const caseSets = document.getElementById("caseSet");
    const currentSet = caseSets.options[caseSets.selectedIndex].text;  

    document.getElementById("currentSet").innerHTML = currentSet;
    
    ////////////////////////////
    console.log(currentSet)
    ////////////////////////////

    getCases(currentSet);
}

async function getCases(currentSet) {
    const currentSetFileName = currentSet.toLowerCase();
    try {
        const module = await import(`./case-sets/${currentSetFileName}.js`);
        cases = module.cases;
    } catch {
        console.log(`Error in loading case set: "${currentSet}"`)
    }
    
    ////////////////////////////
    console.log(cases);
    ////////////////////////////

    createCases();
    pickCases();
}

function removeOldCases() {
    const caseCheckboxes = document.querySelectorAll(".case-checkbox")

    caseCheckboxes.forEach(caseCheckbox => {
        caseCheckbox.remove();
    });
}

function createCases() {
    removeOldCases();

    const caseContainer = document.getElementById("case-container")
    const casePlace = document.getElementById("casesGoHere");

    for (let curCase in cases.evenCases) {
        const caseName = cases.evenCases[curCase][0]

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
        const caseName = cases.oddCases[curCase][0]

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

    // probably can remove repitition in there somehow
}

function pickCases() {
    // select from the possible cases which should be in checkboxes
    //console.log(currentSet);
}