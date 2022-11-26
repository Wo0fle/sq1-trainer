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

function createCases() {
    //add cases to html
}

function pickCases() {
    // select from the possible cases which should be in checkboxes
    console.log(currentSet);
}

// i also need to learn when to use const, var, and let