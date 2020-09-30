const $template = document.getElementById('template-form-register');

class FormRegister extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild($template.content.cloneNode(true));

        this.$name = this.shadowRoot.getElementById('name');
        this.$email = this.shadowRoot.getElementById('email');
        this.$password = this.shadowRoot.getElementById('password');
        this.$passwordConfirmation = this.shadowRoot.getElementById('password-confirmation');

        this.$formRegister = this.shadowRoot.querySelector('.form-register');
        this.$formRegister.onsubmit = (event) => {
            event.preventDefault();
            this.register();
        }
    }

    register() {
        // lấy dữ liệu
        let email = this.$email.value;
        let name = this.$name.value;
        let password = this.$password.value;
        let passwordConfirmation = this.$passwordConfirmation.value;

        console.log(name, email, password, passwordConfirmation);

        // check dữ liệu
        if(this.validate(name, email, password, passwordConfirmation)) {
            alert('đăng kí thành công');
        }

    }

    validate(name, email, password, passwordConfirmation) {
        let isPassed = true;
        if(name == '') {
            this.$name.error = "Nhập vào tên";
            isPassed = false;
        } else {
            this.$name.error = "";
        }

        if(email == '') {
            this.$email.error = "Nhập vào email";
            isPassed = false;
        } else {
            this.$email.error = "";
        }

        if(password == '') {
            isPassed = false;
            this.$password.error = "Nhập vào mật khẩu"
        } else {
            this.$password.error = "";
        }

        if(passwordConfirmation == '' || passwordConfirmation != password) {
            isPassed = false;
            this.$passwordConfirmation.error = "Xác thực mật khẩu không đúng";
        } else {
            this.$passwordConfirmation.error = "";
        }

        return isPassed;
    }
}

window.customElements.define('form-register', FormRegister);