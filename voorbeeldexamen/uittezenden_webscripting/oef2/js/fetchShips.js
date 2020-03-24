// naam: Wannes Vaes

window.addEventListener("load", handleWindowload);

function handleWindowload() {
    let url = 'http://localhost:3000/country/';
    let dropdown = document.getElementById("div_select").appendChild(document.createElement("select"));
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
    let url = 'http://localhost:3000/ship/';
    
}
