class Calculator {
    number_1: number;
    number_2: number;

    constructor() {
        document.addEventListener("DOMContentLoaded", () => {
            const self = this;
            const result = (document.querySelector('input#result') as HTMLInputElement);

            self.reset();

            result.addEventListener('keyup', function (e) {
                if (e.key === 'Enter') {
                    if (parseInt(this.value) === (self.number_1 * self.number_2)) {
                        self.reset();
                        result.value = "";
                    } else {
                        console.log("nuuul");
                    }
                }
            });
        });
    }

    reset() {
        const input_1 = (document.querySelector('input#number_1') as HTMLInputElement);
        const input_2 = (document.querySelector('input#number_2') as HTMLInputElement);

        this.number_1 = this.rand(10);
        this.number_2 = this.rand(10);

        input_1.value = this.number_1.toString();
        input_2.value = this.number_2.toString();
    }

    rand(max: number) {
        return Math.floor(Math.random() * max) + 1;
    }
}

new Calculator();