// must return strings or template literals

module.exports = function(forId="") {
    return `
    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    for="${forId}"
    `
}