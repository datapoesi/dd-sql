import showMetadata from "./show-metadata.js";
import getMetadata from "./get-metadata.js";

export default function handleMetadata() {
  let tablesMetadata = getMetadata()
  showMetadata(tablesMetadata)
}
