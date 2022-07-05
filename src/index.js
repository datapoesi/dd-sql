import getDefaultQuery from "./query/get-default-query.js";
import tabContent from './misc/show-tab-content.js'
import handleMetadata from "./tables-metadata/handle-metadata.js";
import handleQuery from "./query/handle-query.js";
import showSQLSyntax from './sql-syntax/show-syntax.js'
import instantiateEditor from "./misc/instantiate-editor.js";
import { showError, resetError } from "./misc/error-handling.js";

export let currentDatabase
export let tables
export let dbSize
export let dbName
export const myEditor = instantiateEditor()

let SQLjs
// "sql.js needs to fetch its wasm file, so we cannot immediately instantiate the database. Without any configuration, initSqlJs will fetch the wasm files directly from the same path as the js"
initSqlJs().then(response => { SQLjs = response })
  .then(handleSampleDB).catch(showError)

document.getElementById("input-localDB")
  .addEventListener("change", handleLocalDB)

document.getElementById("button-resetSQL")
  .addEventListener("click", function () {
    const defaultQuery = getDefaultQuery(tables);
    myEditor.doc.setValue(defaultQuery);
    handleQuery();
  })

document.getElementById("button-execSQL")
  .addEventListener("click", function () {
    handleQuery()
  });

window.addEventListener('DOMContentLoaded', function () {
  tabContent()
  showSQLSyntax(myEditor)
});


function handleLocalDB(input) {
  const files = input.target.files[0];
  dbName = files.name;
  dbSize = files.size;
  let reader = new FileReader();
  reader.readAsArrayBuffer(files);
  reader.onload = () => handleDB(reader.result);
  reader.onerror = () => showError(reader.error);
}

async function handleSampleDB() {
  try {
    const chinook = await fetch("./chinook.db");
    // arrayBuffer is an Uint8Array representing an SQLite database file
    const arrayBuffer = await chinook.arrayBuffer();
    dbName = "chinook.db";
    dbSize = arrayBuffer.byteLength;
    handleDB(arrayBuffer)
  } catch (error) { showError(error) }
}

function handleDB(database) {
  try {
    currentDatabase = new SQLjs.Database(new Uint8Array(database));
    tables = currentDatabase.prepare(
      "SELECT * FROM sqlite_master WHERE type='table' OR type='view' ORDER BY name"
    );
    resetError()
    const defaultQuery = getDefaultQuery(tables);
    myEditor.doc.setValue(defaultQuery);
    handleMetadata();
    handleQuery()
  } catch (error) { showError(error) }
}
