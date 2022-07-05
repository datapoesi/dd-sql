import { tables, currentDatabase } from "../index.js";

export default function getMetadata() {
    let tablesMetadata = []
    while (tables.step()) {
        let table = tables.getAsObject();
        tablesMetadata.push({
            name: table.name,
            rowCount: getNumRows(table.name)
        })
    }
    return tablesMetadata
}

function getNumRows(tableName) {
    const table = currentDatabase.prepare("SELECT COUNT(*) AS count FROM '" + tableName + "'");
    if (table.step()) {
        return table.getAsObject().count;
    } else { return -1; }
}