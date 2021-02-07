function show_passage(id) {
    /*
    document.getElementById(id).style.display = "block";
    */
    /*
    let passage = document.getElementById(id).style.display
    if (passage == "none") {
        passage = "block";
    }
    else {
        passage = "none";
    }
    */
    let element = document.getElementById(id);
    let result = window.getComputedStyle(element, null).display;
//    console.log(window.getComputedStyle(element, null).display);
    if (result == "none") {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
}