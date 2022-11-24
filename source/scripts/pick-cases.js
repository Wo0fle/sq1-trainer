function selectSet() {
    let caseSet = document.getElementById("caseSet");
    let currentSet = caseSet.options[caseSet.selectedIndex].text;  

    document.getElementById("curSet").innerHTML = currentSet;
    console.log(currentSet); // pick cases somehow
}