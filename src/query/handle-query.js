import showQueryResult from "./show-query-result.js";
import { showError } from "../misc/error-handling.js";
import { myEditor, currentDatabase } from "../index.js";

export default function handleQuery() {
    try {
        const query = myEditor.doc.getValue()
        const queryResult = currentDatabase.prepare(query)
        showQueryResult(queryResult);
    } catch (error) { showError(error) }
}
