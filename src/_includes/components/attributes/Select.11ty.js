// must return strings or template literals

module.exports = function(id="", required=true) {
    return `
    class="block appearance-none w-full bg-gray-200 border border-gray-200 
      text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none 
      focus:bg-white focus:border-gray-500"
    id="${id}"
    name="${id}"
    ${ required ? "required" : ""}
    `
}