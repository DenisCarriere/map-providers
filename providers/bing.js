module.exports.imagery = {
  name: 'Bing Imagery',
  shortName: 'Imagery',
  categories: [
    'bing',
    'imagery',
    'world'
  ],
  minZoom: 1,
  maxZoom: 20,
  required: [],
  url: 'https://ecn.t{switch:0,1,2,3}.tiles.virtualearth.net/tiles/a{quadkey}.jpeg?g=5250',
  description: 'Bing Imagery',
  attribution: 'Earthstar Geographics SIO, © 2017 Microsoft Corporation, Bing, © 2017 DigitalGlobe, USGS, © 2017 GeoEye',
  format: 'jpg',
  type: 'baselayer'
}

module.exports.roads = {
  name: 'Bing Roads',
  shortName: 'Roads',
  categories: [
    'bing',
    'roads',
    'world'
  ],
  minZoom: 1,
  maxZoom: 20,
  required: [],
  url: 'http://ecn.t{switch:0,1,2,3}.tiles.virtualearth.net/tiles/r{quadkey}.jpeg?g=5693&mkt=&shading=hill',
  description: 'Bing Roads',
  attribution: '© 2017 Microsoft Corporation, Bing, © 2017 HERE, © AND',
  format: 'jpg',
  type: 'baselayer'
}
