export const counterMixin = {
    data() {
        return {
            message: '',
            counter: 0
        };
    },
    methods: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        },
        
    },
    computed: {
        countLength() {
            return this.message.length
        }
    }
};