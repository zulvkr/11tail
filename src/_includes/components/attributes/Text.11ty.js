// must return strings or template literals

module.exports = (id, name, placeholder, required) => {
    return `
    class="block"
    id="${id}"
    name="${ name ? name : id }"
    type="text"
    placeholder="${placeholder}"
    ${ required ? "required" : ""}
    `
}