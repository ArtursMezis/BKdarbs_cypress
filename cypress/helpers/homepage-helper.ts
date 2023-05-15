export class HomepageHelper {
    randomString(length: number): string {
        let text = "";
        let possible = "abcdefghijklmnopqrstuvwxyz";
        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    randomValidEmail(): string {
        return `${this.randomString(5)}${this.randomNumber(3)}@yahoo.co.uk`;
    };

    randomValidPassword(): string {
        return `P${this.randomString(5)}!${this.randomNumber(3)}`;
    };

    randomNumber(length: number, ignoreZero = false): string {
        let text = "";
        let possible = "1234567890";
        let lngth = possible.length;
        for (let i = 0; i < length; i++) {
            if (ignoreZero) {
                lngth = possible.length - 1;
            }
            text += possible.charAt(Math.floor(Math.random() * lngth));
        }
        return text;
    };
}