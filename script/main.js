function selectUnderline(event) {
    var parent = event.target.parentElement;
    var underlines = getAllUnderlines()
    var underline = getUnderline(parent);
    removeId(underlines);
    makeVisible(underline);
}

function getAllUnderlines() {
    return document.getElementsByClassName("underline")
}

function getUnderline(parent) {
    return parent.getElementsByClassName("underline")[0]
}

function makeVisible(element) {
    element.id = "visible";
}

function removeId(elements) {
    for (i = 0; i < elements.length; i++) {
        elements[i].id = "";
    }
}