import axios from "axios";

class GeonamesService {
    constructor(citiesUrl, searchUrl, username, countryCode) {
        this.citiesUrl = citiesUrl;
        this.searchUrl = searchUrl;
        this.username = username;
        this.countryCode = countryCode;
    }

    fetchAllCities() {
        const config = {
            params: {
                // "country": this.countryCode,
                "featureClass": "P",
                "username": this.username,
                "north": 37.6,
                "south": 8.4,
                "east": 97.25,
                "west": 68.7
            }
        }
        return axios.get(this.citiesUrl, config).then(res => {
            console.log(res.data);
            return res.data.geonames;
        });
    }

    fetchByKeyword(keyword) {
        const config = {
            params: {
                "q": keyword,
                // "country": this.countryCode,
                "featureClass": "P",
                'maxRows': 100,
                "username": this.username,
                "north": 37.6,
                "south": 8.4,
                "east": 97.25,
                "west": 68.7
            }
        }
        return axios.get(this.searchUrl, config).then(res => {
            return res.data.geonames;
        });
    }
}

export default new GeonamesService('http://api.geonames.org/citiesJSON',
    'http://api.geonames.org/searchJSON', 'shourya20', 'IN')