// must return strings or template literals

module.exports = function(id, name, required) {
    return `
    class="block appearance-none w-full bg-gray-200 border border-gray-200 
      text-gray-700 py-2 px-3 rounded leading-tight focus:outline-none 
      focus:bg-white focus:border-gray-500"
    id="${id}"
    name="${ name ? name : id }"
    ${ required ? "required" : ""}
    `
}