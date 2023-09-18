import React from "react";
// - This file handled by Jacob M.

/**CLASS OF API:
 * api calls will be made here, the JSON object will be returned to
 * repository where it will be parsed into model class data.
 * 
 * Currently: this is a test run of the foods database api - JM
 */
function foodApi({input}){
    // please ensure api key isn't here when pushing to git hub - JM
    // Below are the settings for the api call.
    const API_KEY = 'ae5ef507587e326bbaa18fe2bc7f9c3c';
    const APP_ID = 'f3e2a4b4';
    //const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/auto-complete?q='+input;
    const url = 'https://api.edamam.com/api/nutrition-data?app_id='+APP_ID+'&app_key='+API_KEY+'&nutrition-type=logging&ingr=rice';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
    };

    //this will ensure that react native runs this API off the mean thread - JM
    async function fetchData(){
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log('foodApi: recieved result: ' + result);
        } catch (error) {
            console.error('foodApi: error - fetchData:' + error);
        }
    }
    fetchData() //calls the async func
};

export { foodApi };