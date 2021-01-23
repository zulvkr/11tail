// must return strings or template literals

module.exports = (id, name, placeholder, required) => {
    return `
    class="block w-full py-2 px-3 rounded-md border border-gray-500 focus:outline-none focus:border-green-400 focus:ring-2 ring-green-400 transition"
    id="${id}"
    name="${name}"
    type="text"
    placeholder="${placeholder}"
    ${ required ? "required" : ""}
    `
}