// must return strings or template literals

module.exports = (value = "") => {
    return `
    type="submit"
    value="${value}"
    class="rounded-md font-bold bg-green-500 transition hover:bg-green-600 focus:bg-green-600 py-2 px-4 text-white"
    `;
}