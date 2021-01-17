// must return strings or template literals

module.exports = (value = "") => {
    return `
    type="submit"
    value="${value}"
    class="rounded bg-green-500 hover:bg-green-700 py-2 px-4 text-white"
    `;
}