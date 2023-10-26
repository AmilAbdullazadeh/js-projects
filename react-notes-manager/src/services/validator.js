export class ValidatorService {
    static min(value, min) {
        if (+value.length < min) {
            return `Must be at least ${min} characters long`
        }
    }

    static max(value, max) {
        if (+value.length > max) {
            return `Must be at most ${max} characters long`
        }
    }
}
