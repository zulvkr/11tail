module.exports = (id, name, required, options) => {
    const Select = require('./attributes/Select.11ty');

    let optionHtml = "";

    if (Array.isArray(options)) {
        options.forEach(option => {
            optionHtml += `<option>${option}</option>`;
        });
    }

    return `
    <div class="relative">
        <select ${Select(id, name, required)}>
            ${optionHtml}
        </select>
    </div>
    `
}