// naam: Wannes Vaes

window.addEventListener("load", handleWindowload);
document.getElementById("get_ships").addEventListener("click", handleGetShips);

function handleWindowload() {
    let url = 'http://localhost:3000/country/';
    let dropdown = document.getElementById("div_select").appendChild(document.createElement("select"));
    dropdown.length = 0;
    dropdown.setAttribute("id", "country_select");

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose a country.';
    defaultOption.disabled;

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    fetch(url)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.warn('Er trad een probleem op. Status code: ' + response.status);
                    return;
                }

                response.json().then(function (data) {
                    let option;

                    for (let i = 0; i < data.length; i++) {
                        option = document.createElement('option');
                        option.text = data[i].name;
                        option.value = data[i].id;
                        dropdown.add(option);
                    }

                });
            }
        )
        .catch(function(err) {
            console.error('Fetch Error -', err);
        });

}

function handleGetShips() {
    var e = document.getElementById("country_select");
    var selectValue = e.options[e.selectedIndex].value;
    let url = 'http://localhost:3000/ship/';
    let output = document.getElementById("div_output");
    let list = document.createElement("ul");
    makeElementEmpty(output);
    fetch(`${url}?country_id=${selectValue}`)
        .then((response) =>{
            if (response.status==200) {
                return response.json();
            } else {
                throw `error with status ${response.status}`;
            }
        })
        .then((ships) => {
            var fastestShip  = 0;
            for (let ship of ships) {
                if (ship.speed > fastestShip){
                    fastestShip = ship.speed;
                }
            }
            for (let ship of ships) {
                li = document.createElement("li");
                if (ship.speed == fastestShip){
                    li.setAttribute("style", "color:red");
                }
                listItemText = document.createTextNode(`${ship.id}, ${ship.name}`);
                li.appendChild(listItemText)
                list.appendChild(li);
            }
            output.appendChild(list);
        })
        .catch( (error) => {
            output.appendChild(document.createTextNode(error));
        });

}

function makeElementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}

function makeTable(matrix) {
    let table = document.createElement("table");
    for (let i = 0; i < matrix.length; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < matrix[i].length; j++) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode(matrix[i][j]));
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}
