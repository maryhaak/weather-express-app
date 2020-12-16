const request = require('request');

const geocode = (location, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=pk.eyJ1IjoibWFyaXlhbWFyaXlhIiwiYSI6ImNraW94amo3MDEycjIycXAzOTc0cTBoOXkifQ.OKaoEghLjcNS0RJtGi7BHg`;

    request.get({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Can\'t connect the geocoding service!', undefined);
        } else if (!body.features || body.features.length === 0) {
            callback('Nothing found in geocoding service. Try another search', undefined);
        } else {
            const {
                center: [
                    longtitude,
                    latitude
                ],
                place_name
            } = body.features[0];

            callback(undefined, {
                latitude,
                longtitude,
                place_name
            });        
        }
    });
}

module.exports = geocode;