
export default function getDefaultQuery(tables) {
  let firstTableName = getFirstTableName(tables)
  let defaultQuery = `SELECT * FROM ${firstTableName} LIMIT 0,20\n\n`;
  return defaultQuery;
}

function getFirstTableName(tables) {
  let firstTableName = null;
  while (tables.step()) {
    let table = tables.getAsObject();
    if (firstTableName === null) {
      firstTableName = table.name;
    }
  }
  return firstTableName
}