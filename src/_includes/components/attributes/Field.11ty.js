// must return strings or template literals

module.exports = (type="text", id="", name, placeholder="", required=true) => {
    return `
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
      leading-tight focus:outline-none focus:shadow-outline"
    id="${id}"
    name="${ name ? name : id }"
    type="${type}"
    placeholder="${placeholder}"
    ${ required ? "required" : ""}
    `
}