export { create_game_field };
/**
 * Creates a html table for the game tiles. Each tile is supposed to contain one letter. The style fot the table is set here as well.
 * @param tiles The array to which the tiles are to be appended. For each row a new array for the tiles is created.
 * @param word_length The length of the word/ how many tiles there should be per row.
 * @param amount_tries How many tries the user has to guess the word/ how many columns there should be for the tiles.
 * @param append_to The html element to which the table is to supposed to be appended to.
 */
function create_game_field(tiles, word_length, amount_tries, append_to) {
    let cell_width = 90 / word_length;
    let font_size = cell_width * 0.55;
    let table = document.createElement("table");
    append_to.appendChild(table);
    table.className = "text-center m-auto";
    for (let column = 0; column < amount_tries; column++) {
        let row_element = document.createElement("tr");
        table.appendChild(row_element);
        let row_list = [];
        tiles.push(row_list);
        for (let row = 0; row < word_length; row++) {
            let cell = document.createElement("td");
            row_element.appendChild(cell);
            let div = document.createElement("div");
            cell.appendChild(div);
            row_list.push(div);
            div.textContent = "";
            div.className = "aspect-square border-4 border-grey-500";
            div.style.width = cell_width + "vw";
            div.style.fontSize = font_size + "vw";
        }
    }
}
