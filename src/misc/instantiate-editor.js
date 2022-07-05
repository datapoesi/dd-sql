
let editorNode = document.getElementById("editor-sql")

const config = {
    value: "",
    mode: "sql",
    theme: "juejin", // Either 'juejin' or '3024-day'.
    lineWrapping: true, // Whether CodeMirror should scroll or wrap for long lines.
    lineNumbers: true,
    autofocus: true,
}

export default function instantiateEditor() {
    return CodeMirror(editorNode, config);
}