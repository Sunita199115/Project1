var btnTranslate = document.querySelector("#btn-Translate");
btnTranslate.addEventListener("click", function clickEventHandler() {
    var value = document.querySelector("#inputTag").value
    document.querySelector("#learning1").style.background = value
})





var btnTranslateChangeTextColor = document.querySelector("#btnChangeTextColor");
btnTranslateChangeTextColor.addEventListener("click", function clickEventHandler() {
    var value = document.querySelector("#inputTagTextChange").value
    document.querySelector(".sampleText").style.color = value
    document.querySelector(".sampleText").innerText = value
})










