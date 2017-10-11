
/**
 * [servicesList description]
 * @type {Array}
 * {name} = Name of service
 * {requests} = Total of requests today
 * {maxPerDay} = Max request service allow
 * {key} = Your API KEY
 * {url} = URL of API
 * {returnTree} = Where to find data
 */
export const ServicesList = [

    {
      'name': 'Google Maps',
      'requests': 0,
      'maxPerDay': 2500,
      'key': 'YOUR API KEY',
      'url': 'https://maps.googleapis.com/maps/api/geocode/json?key={KEY}&address={ADDRESS}',
      'returnTree': {
        'address': 'results.0.formatted_address',
        'lat': 'results.0.geometry.location.lat',
        'lng': 'results.0.geometry.location.lng'
      }
    }

    ,{
      'name': 'Mapbox',
      'requests': 0,
      'maxPerDay': 2500,
      'key': 'YOUR API KEY',
      'url': 'https://api.mapbox.com/geocoding/v5/mapbox.places/{ADDRESS}.json?access_token={KEY}',
      'returnTree': {
        'address': 'features.0.place_name',
        'lat': 'features.0.center.1',
        'lng': 'features.0.center.0'
      }
    }

    ,{
      'name': 'Mapquest',
      'requests': 0,
      'maxPerDay': 500,
      'key': 'YOUR API KEY',
      'url': 'http://www.mapquestapi.com/geocoding/v1/address?key={KEY}&location={ADDRESS}',
      'returnTree': {
        'address': 'results.0.providedLocation.location',
        'lat': 'results.0.locations.0.latLng.lat',
        'lng': 'results.0.locations.0.latLng.lng'
      }
    }

    /* ... U can insert more services like objects */

];
