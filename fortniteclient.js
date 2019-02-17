
const email = process.env.email;
const password = process.env.password;
const Fortnite = require("fortnite-api");

var self = module.exports = {

    fortniteAPI: new Fortnite(
        [
            email,
            password,
            "MzRhMDJjZjhmNDQxNGUyOWIxNTkyMTg3NmRhMzZmOWE6ZGFhZmJjY2M3Mzc3NDUwMzlkZmZlNTNkOTRmYzc2Y2Y=",
            "ZWM2ODRiOGM2ODdmNDc5ZmFkZWEzY2IyYWQ4M2Y1YzY6ZTFmMzFjMjExZjI4NDEzMTg2MjYyZDM3YTEzZmM4NGQ"
        ],
        {
            debug: true
        }
    ),
    news: (channel) => {

        self.fortniteAPI.login().then(() => {
            self.fortniteAPI
            .getFortniteNews("en")
            .then(news => {
                console.log(news);
            })
            .catch(err => {
                console.log(err);
            });
    }

}