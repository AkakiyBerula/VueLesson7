export const formMixin = {
    data() {
        return {
            formData: {
                email: '',
                password: ''
            },
            errors: {
                email: [],
                password: []
            }
        };
    },
    methods: {
        submitForm() {
            this.errors = { email: [], password: [] };
            if (!this.formData.email) {
                this.errors.email.push("Будь ласка, введіть електронну пошту.");
            } else if (!this.isValidEmail(this.formData.email)) {
                this.errors.email.push("Будь ласка, введіть правильну електронну пошту.");
            }

            if (!this.formData.password) {
                this.errors.password.push("Будь ласка, введіть пароль.");
            } else if (!this.isValidPassword(this.formData.password)) {
                this.errors.password.push("Пароль має бути не менше ніж 8 символів і мати хоча б одну літеру, одну цифру і один символ.");
            }
    
            if (Object.keys(this.errors).length === 0) {
                console.log("Форма відправлена:", this.formData);
            }
        },
        isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        },
        isValidPassword(password) {
            const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            return passwordPattern.test(password)
        }
    },
    mounted() {
        console.log(this.$route.meta.message);
    }
}