var selected = "";
//selecting before click control
const clickUp = () => {
    document.onmouseup = (e) =>{
        //click up
        if (e) {
            selectingCtrl();
        }
        else {
            return;
        }
    }
}
//selecting up click
const selectingCtrl = () => {
    //selecting event
    selected = window.getSelection().toString();
    if (selected !== "" && selected.length !== 0) {
        alert(selected);
    }
    else {
        return;
    }
}
//after page loaded
document.addEventListener("DOMContentLoaded", clickUp);