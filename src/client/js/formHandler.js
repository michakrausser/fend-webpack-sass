/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// Personal API Key for OenWeatherMap API
const apiKey = '&appid=18f4bd3e4bb4ccb550b483c6cf16eb31&units=imperial';

function handleSubmit( event ) {
    event.preventDefault()

    // check what text was put into the form field
    let zip = document.getElementById('name').value
    // Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch( baseURL + zip + apiKey )
        .then( res => res.json() )
        .then(function( res ) {

            // date
            let d = new Date();
            const months = [ "January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December" ];
            const today = d.getDate() + '. ' + months[ d.getMonth() ] + ' ' + d.getFullYear();

            console.log( 'WheaterData: ', res );
            console.log( 'date: ', document.getElementById( 'date' ).innerHTML );

            document.getElementById( 'location' ).innerHTML = `Weather data in ${ res.name }`;
            document.getElementById( 'date' ).innerHTML = `Date: ${ today }`;
            document.getElementById( 'temp' ).innerHTML = `Temperature: ${ res.main.temp } °`;
        }
    )
}

export { handleSubmit }
