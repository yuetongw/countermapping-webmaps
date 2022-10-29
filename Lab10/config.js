var config = {
    style: 'mapbox://styles/meadowyt/cl9u328vn000j15qto93hum8e',
    accessToken: 'pk.eyJ1IjoibWVhZG93eXQiLCJhIjoiY2w1aGxxeXllMGFtMDNqczljMWU2Z3UzMCJ9.JL8MJiBJg_cRjS7gJ88gmg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    // subtitle: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected.',
    byline: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected.',
    footer: 'Source: https://thebridgebk.com/red-hook-after-sandy-flourishing-but-vulnerable/ <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: 'Predicted Floodplains in 2050 and 2100',
            //image: 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif',
            description: 'With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
            location: {
                center: [-73.89270, 40.76636],
                zoom: 11,
                pitch: 31.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'pluto-hous-type-master-featu-7b5u7f',
                opacity: 0
                }
                // {
                //     layer: 'pluto-hous-type-master-featu-7b5u7f',
                //     opacity: 0,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                {
                layer: 'pluto-hous-type-master-featu-7b5u7f',
                opacity: 1
                }
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Flood-related Damages to the Red Hook Houses',
            image: 'https://thebridgebk.com/wp-content/uploads/2017/10/121029_5267-e1508777751352.jpg',
            description: 'The Red Hook Houses are two connected public housing complexes in Red Hook, Brooklyn, New York City, managed by the New York City Housing Authority (NYCHA). During Hurricane Sandy in 2012, the project was flooded with 6 feet (1.8 meters) of water due to sewer overflow and high tide.',
            location: {
                center: [-74.004608, 40.675838],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};
