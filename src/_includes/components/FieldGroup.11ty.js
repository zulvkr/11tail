module.exports = (content, id, name) => {
    const Label = require('./attributes/Label.11ty');

    return `
    <div class="mb-6">
        <label ${Label(id)}>${name}</label>
        ${content}
    </div>
    `
}