/**
 * Uses AJAX to query an internet data source for zip codes
 * @param {string} numId The element id that has the number
 *
 */
function findNumber(numId, typeId) {
    var nume = document.getElementById(numId).value;
    var typee = document.getElementById(typeId).value;
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                displayResponse(this.responseText);
            }
            else if (this.status === 404) {
                displayResponse("none");
            }
            else {
                console.log("We have a problem...server responded with code: " + this.status);
            }
        }
        else {
        }
    };
    var url = "http://numbersapi.com/" + nume + "/" + typee;

    httpRequest.open("GET", url, true);
    httpRequest.send();
}
/**
 * Displays the zip code place given the JSON data
 * @param {string} data JSON data representing place for given response
 */
function displayResponse(data) {
    if (data == "none") {
        document.getElementById("name").className = "alert alert-danger";
        document.getElementById("name").innerHTML = "No Trivia Found";
    }
    else {
        document.getElementById("name").className = "alert alert-success";
        document.getElementById("name").innerHTML = data;
    }
}
