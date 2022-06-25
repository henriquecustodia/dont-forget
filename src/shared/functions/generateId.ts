import { getRandomInt } from "./getRandomInt";

export function generateId() {
    let id = '';

    for (let index = 0; index < 10; index++) {
        const randomNumber = getRandomInt(1, 10)
        id += String(randomNumber);
    }

    return id;
}