import { sqlSyntax } from './syntax.js'

export default function showSQLSyntax(myEditor) {
  const keywordDivs = sqlSyntax.map(item => {
    let div = document.createElement("div")
    div.className = "syntax-keyword"
    div.textContent = item.keyword
    const editorValue = `${item.optionalComment ? item.optionalComment + "\n" : ""}${item.statement}\n`;

    div.addEventListener("click", function () {
      myEditor.doc.setValue(editorValue);
      window.scrollTo(0, 0);
      let activeSyntax = document.getElementsByClassName("active-keyword")
      if (activeSyntax.length > 0) {
        document.getElementsByClassName("active-keyword")[0].className = "syntax-keyword"
      }
      this.className = "active-keyword syntax-keyword"
    })

    return div
  })

  document.getElementById("syntax")
    .append(...keywordDivs)
}
