const request = require('request');

const forecast = (latitude, longtitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=f9a6a15af60c91ef368f637c44d40dec&query=${latitude},${longtitude}`;

    request.get({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Can\'t connect the weather service!', undefined);
        } else if (body.error) {
            callback(body.error.info, undefined);
        } else {
            const {
                weather_descriptions,
                temperature,
                feelslike
            } = body.current;

            callback(undefined, `${weather_descriptions}. Current temperature is ${temperature}. It feels like ${feelslike}`);
        }
    });
};

module.exports = forecast;