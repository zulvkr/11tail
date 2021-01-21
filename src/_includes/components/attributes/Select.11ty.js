// must return strings or template literals

module.exports = function(id, name, required) {
    return `
    class="block"
    id="${id}"
    name="${ name ? name : id }"
    ${ required ? "required" : ""}
    `
}