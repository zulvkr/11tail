class formUI {
    data() {
        return {
            layout: "layouts/base.njk",
            title: "UI testing only"
        };
    }

    render() {
        const Form = require('./_includes/components/_all');
        const SelectField = Form.SelectField('banks', 'banks', true,
         ['Bank Mandiri', 'Bank BNI', 'Bank BRI', 'Bank BTPN']);
        const Text = `<input ${Form.att.Text('name', 'name', 'Nama lengkap', true)}/>`

        return `
        <div class="flex justify-center items-center mb-4">
            <div class="w-full max-w-lg px-5 mx-auto">
            <form>
                ${Form.Group(Text, 'name', 'Nama')}
                ${Form.Group(SelectField, 'banks', 'Bank')}
                <button ${Form.att.Button("")}>Call Me!</<button>
            </form>
            </div>
        </div>
        `
    }
}

module.exports = formUI;