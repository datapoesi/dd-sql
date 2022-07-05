import formatBytes from "../misc/format-bytes.js";
import { dbName, dbSize } from "../index.js";

export default function showMetadata(tablesMetadata) {
    let dbTables = document.getElementById("metadata-tables");
    dbTables.innerHTML = ""

    for (let data of tablesMetadata) {
        let metadataRow = document.createElement("div")
        let tableName = document.createElement("span")
        tableName.className = "metadata-tableName"
        tableName.textContent = data.name
        metadataRow.appendChild(tableName)
        metadataRow.innerHTML += ` — (${data.rowCount} rows)`
        dbTables.appendChild(metadataRow);
    }

    document.querySelector("#metadata-dbName > span").textContent = dbName;
    document.querySelector("#metadata-dbSize > span").textContent = formatBytes(dbSize);
}