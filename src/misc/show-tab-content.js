
export default function tabContent() {
    document.getElementById("tab-query-output")
        .addEventListener("click", event => showTabContent('query-output', event))

    document.getElementById("tab-metadata")
        .addEventListener("click", event => showTabContent('metadata', event))

    document.getElementById("tab-syntax")
        .addEventListener("click", event => showTabContent('syntax', event))
}

function showTabContent(contentName, event) {
    let tabContent = document.getElementsByClassName("db-content");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    let content = document.getElementById(contentName)
    if (content.localName == "table") {
        content.style.display = "table";
    } else { content.style.display = "flex"; }

    let activeTab = document.getElementsByClassName("tab");
    for (let i = 0; i < tabContent.length; i++) {
        activeTab[i].className = activeTab[i].className.replace(" active-tab", "");
    }
    event.currentTarget.className += " active-tab";
}