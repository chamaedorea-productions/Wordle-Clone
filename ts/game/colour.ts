export { colour_key, colour_letter };

/**
 * Colours an element curresponding to the number.
 * @param element The element that is supposed to be coloured.
 * @param num The number for the colour.
 */
function _colour_element(element: HTMLElement, num: number): void {
    const GREY = "rgb(192, 192, 192)";
    const ORANGE = "rgb(243, 221, 18)";
    const GREEN = "green";
    if (num == 0) {
        if (element.style.backgroundColor == ORANGE) {
            return; 
        }
        if (element.style.backgroundColor == GREEN) {
            return; 
        }
        element.style.backgroundColor = GREY;
    } else if (num == 1) {
        if (element.style.backgroundColor == GREEN) {
            return; 
        }
        element.style.backgroundColor = ORANGE;
    } else if (num == 2) {
        element.style.backgroundColor = GREEN;
    }
}

/**
 * Colours a letter on the game field.
 * @param letter_element The tiles element.
 * @param num The number for the colour.
 */
function colour_letter(letter_element: HTMLDivElement, num: number): void {
    _colour_element(letter_element, num);
}

/**
 * Colours a letter on the keyboard.
 * @param key The letters character.
 * @param num The number for the colour.
 */
function colour_key(key: string, num: number): void {
    let element = document.getElementById(key) as HTMLButtonElement;

    if (element === null) {
        console.error("Could not retreive the html button element with the id:' " + key + "'.");
        return;
    }

    _colour_element(element, num)
}