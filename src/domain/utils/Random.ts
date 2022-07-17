export class Random {
    randInt(min: number, max: number) {
        if (min > max) {
            throw new Error("Min value should be less than max value");
        }
        return Math.floor(Math.random() * (max - min) + min);
    }
}
