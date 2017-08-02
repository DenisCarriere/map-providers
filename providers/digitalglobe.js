module.exports.premium = {
  name: 'DigitalGlobe Premium Imagery',
  shortName: 'Premium Imagery',
  categories: [
    'digitalglobe',
    'premium',
    'imagery',
    'world'
  ],
  minZoom: 0,
  maxZoom: 19,
  required: [
    'access_token'
  ],
  url: 'https://{switch:a,b,c}.tiles.mapbox.com/v4/digitalglobe.316c9a2e/{zoom}/{x}/{y}.png',
  description: 'https://wiki.openstreetmap.org/wiki/DigitalGlobe',
  attribution: 'DigitalGlobe',
  format: 'jpg',
  type: 'baselayer'
}

module.exports.standard = {
  name: 'DigitalGlobe Standard Imagery',
  shortName: 'Standard Imagery',
  categories: [
    'digitalglobe',
    'standard',
    'imagery',
    'world'
  ],
  minZoom: 0,
  maxZoom: 19,
  required: [
    'access_token'
  ],
  url: 'http://{switch:a,b,c}.tiles.mapbox.com/v4/digitalglobe.0a8e44ba/{zoom}/{x}/{y}.png',
  description: 'https://wiki.openstreetmap.org/wiki/DigitalGlobe',
  attribution: 'DigitalGlobe',
  format: 'jpg',
  type: 'baselayer'
}
