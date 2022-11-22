function selectCases() {
    let caseList = document.getElementById("caseList");
    document.getElementById("curCase").value = caseList.options[caseList.selectedIndex].text;  

    let currentCase = document.getElementById("curCase").value
    console.log(currentCase) // pick cases somehow
}