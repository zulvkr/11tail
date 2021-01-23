// must return strings or template literals

module.exports = (value="", classes="") => {
    return `
    type="submit"
    value="${value}"
    class="${classes} rounded-md font-bold bg-green-500 transition focus:outline-none focus:bg-green-100 focus:ring ring-green-400 py-2 px-4 text-white focus:text-green-500"
    `;
}