

export default function showQueryData(queryResult) {
    // Append the table's HEADERS to the DOM
    let thead = document.querySelector("#query-output > thead");
    thead.innerHTML = ""
    let tr = document.createElement("tr")
    const columnNames = queryResult.getColumnNames();
    for (let i = 0; i < columnNames.length; i++) {
        let th = document.createElement("th")
        th.innerHTML = columnNames[i]
        tr.appendChild(th)
    };
    thead.appendChild(tr)

    // Append the table's ROWS OF DATA to the DOM
    let tbody = document.querySelector("#query-output > tbody");
    tbody.innerHTML = ""
    while (queryResult.step()) {
        let tr = document.createElement("tr")
        let row = queryResult.get();
        for (let i = 0; i < row.length; i++) {
            let td = document.createElement("td")
            td.innerHTML = row[i]
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}
