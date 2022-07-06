var getTopics = function (topics) {
    var maps = ('https://www.loc.gov/search/?=maps?fo=json');
    var audio = ('https://www.loc.gov/search/?=audio?fo=json');
    var photos = ('https://www.loc.gov/search/?=Photos?fo=json');
    var manuscripts = ('https://www.loc.gov/search/?=manuscripts?fo=json');
    var newspapers = ('https://www.loc.gov/search/?=newspapers?fo=json');
    var websites = ('https://www.loc.gov/search/?=websites?fo=json');


    fetch(maps)
        .then(function (topics) {
            console.log('Search for maps')
            return topics.json()
        })

    fetch(audio)
        .then(function (topics))
    return topics.json()






        .then(function (response) {
            if (getTopics.ok) {
                response.json()
                    .then(function (data) {
                        (data, user);
                    });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to GitHub');
        });
};

//click-me button clicked + function
var searchBtn = document.querySelector('#click-me');

function handleSearch(event) {
    event.preventDefault();
    //code to get inputs
}

searchBtn.addEventListener('submit', handleSearch);