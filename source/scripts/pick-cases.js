function selectCases() {
    let caseList = document.getElementById("caseList");
    let currentCase = caseList.options[caseList.selectedIndex].text;  

    document.getElementById("curCase").innerHTML = currentCase;
    console.log(currentCase); // pick cases somehow
}