const iframe = document.getElementById('kibana-dash');
const currentFilterText = document.getElementById('current-filter');
const filterBar = document.getElementById('offcanvasNavbar');

function print(debug_line) {
    console.log(debug_line);
}

function getDashboardUri(usState) {
    // Get Kibana URL
    const stateQuery = rison.encode_object({State:usState});
    var baseUrl = "ADD BASE URL HERE";
    aState = `&_a=(query:(language:kuery,query:'${stateQuery}'))`;
    return baseUrl + aState;
}

function updateWithState() {
    const stateSelect = document.getElementById('inputState');
    var selectedState = stateSelect.value || '';

    // Set current filter text
    currentFilterText.innerText = `State: ${selectedState}`;

    // Update Kibana iframe
    var dashboardUri = getDashboardUri(selectedState);
    iframe.setAttribute('src', dashboardUri);
}
