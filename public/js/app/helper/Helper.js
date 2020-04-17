class Helper {

    static desc(a, b, attr) {
        if (a[`${attr}`] > b[`${attr}`]) {
            return -1;
        }
        if (a[`${attr}`] < b[`${attr}`]) {
            return 1;
        }
        return 0;
    }
    static asc(a, b, attr) {
        if (a[`${attr}`] > b[`${attr}`]) {
            return 1;
        }
        if (a[`${attr}`] < b[`${attr}`]) {
            return -1;
        }
        return 0;
    }

    
    static getMin(data, attr) {
        return Math.min(...data.map(apto => apto[attr]))
    }
    static getMax(data, attr) {
        return Math.max(...data.map(apto => apto[attr]))
    }

    static configurateMap(lat, lng, address) {
        var cities = L.layerGroup();

        L.marker([lat, lng]).bindPopup(address).addTo(cities);


        var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

        var streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });

        var map = L.map('map', {
            center: [lat, lng],
            zoom: 15,
            layers: [streets, cities]
        });

        var baseLayers = {
            "Streets": streets
        };

        var overlays = {
            "Cities": cities
        };

        L.control.layers(baseLayers, overlays).addTo(map);
    }
}