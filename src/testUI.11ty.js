class formUI {
    data() {
        return {
            layout: "layouts/base.njk"
        };
    }

    render() {
        const Form = require('./_includes/components/_all');
        const SelectField = Form.SelectField('name', 'Name', true, ['a', 'b', '1', '2']);
        const Text = `<input ${Form.att.Text('name', 'name', 'Name', true)}/>`

        return `
        <div class="flex justify-center items-center mb-4">
            <div class="mx-auto px-5 max-w-xl">
            <p class="text-gray-400 mb-5">#render form jsuahs csdsad swdjsaj saduhsadm sadadsj sadhdjs sadhjsa</p>
            <form>
                ${Form.Group(SelectField, 'name', 'name')}
                ${Form.Group(Text, 'name', 'name')}
            </form>
            </div>
        </div>
        `
    }
}

module.exports = formUI;