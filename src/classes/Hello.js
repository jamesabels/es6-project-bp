export default class Hello {
    constructor (message) {
        this.message = message;
    }
    render () {
        console.warn(this.message);
    }
}