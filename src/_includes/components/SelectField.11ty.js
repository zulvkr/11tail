module.exports = (fieldArgs, ...options) => {
    const select = require('./attributes/Select.11ty');

    let optionHtml = "";

    if (Array.isArray(options)) {
        options.forEach(option => {
            optionHtml += "<option>" + option + "</option>";
        });
    }
    
    console.log(options)

    return "<select " + select(...fieldArgs) + ">" + optionHtml + "</select>"
}