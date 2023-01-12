/**
 * Removes a html element with the passed id.
 * @param element_id The id of the lement to remove.
 */
function remove_element(element_id) {
    var element = document.getElementById(element_id);
    if (element === null) {
        console.error("Could not retreive the html element with the id: '" + element_id + "'.");
        return;
    }
    element.remove();
}