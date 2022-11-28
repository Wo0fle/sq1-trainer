let cases;

function pickSet() {
    const caseSets = document.getElementById("caseSet");
    const currentSet = caseSets.options[caseSets.selectedIndex].text;  

    document.getElementById("currentSet").innerHTML = currentSet;
    
    ////////////////////////////
    //console.log(currentSet)
    ////////////////////////////

    getCases(currentSet);
}

function pickCases() {
    const caseCheckboxes = document.querySelectorAll(".case-checkbox")

    let selectedCases = []
    caseCheckboxes.forEach(caseCheckbox => {
        if (caseCheckbox.checked) {
            selectedCases.push(caseCheckbox.value)
        }
    });

    ////////////////////////////
    //console.log(selectedCases)
    ////////////////////////////
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const getCases = async currentSet => {
    const currentSetFileName = currentSet.toLowerCase();
    try {
        const module = await import(`./case-sets/${currentSetFileName}.js`);
        cases = module.cases;
    } catch {
        console.log(`Error in loading case set: "${currentSet}"`)
        // this should not occur under any normal circumstances
    }
    
    ////////////////////////////
    //console.log(cases);
    ////////////////////////////

    addCases();
}

const removeOldCases = () => {
    const caseCheckboxes = document.querySelectorAll(".case-checkbox-container")

    caseCheckboxes.forEach(caseCheckbox => {
        caseCheckbox.remove();
    });
}

const addCases = () => {
    removeOldCases();

    const caseContainer = document.getElementById("case-container")
    const casePlace = document.getElementById("casesGoHere");

    createCases(caseContainer, casePlace, cases.evenCases);
    createCases(caseContainer, casePlace, cases.oddCases);
}

const createCases = (container, location, caseList) => {
    for (let curCase in caseList) {
        const caseName = caseList[curCase][0]

        const newCaseDiv = document.createElement("div");
        newCaseDiv.setAttribute("class", "case-checkbox-container")
        newCaseDiv.setAttribute("value", caseName)
        const newCaseContent = document.createTextNode(caseName);

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", "case-checkbox")
        checkbox.setAttribute("value", caseName)

        newCaseDiv.appendChild(checkbox);
        newCaseDiv.appendChild(newCaseContent);

        container.insertBefore(newCaseDiv, location);
    }
}