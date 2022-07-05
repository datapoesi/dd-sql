
export function showError(errorMessage) {
    document.getElementById("error").textContent = errorMessage
}

export function resetError() {
    document.getElementById("error").innerHTML = ""
}