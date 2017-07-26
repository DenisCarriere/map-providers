module.exports.standard = {
  name: 'OpenStreetMap Standard',
  shortName: 'Standard',
  categories: [
    'openstreetmap',
    'standard',
    'world'
  ],
  minZoom: 0,
  maxZoom: 19,
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  description: 'Tiles from OpenStreetMap',
  attribution: 'Map data © OpenStreetMap',
  format: 'png',
  type: 'baselayer'
}

module.exports.hot = {
  name: 'OpenStreetMap Humanitarian',
  shortName: 'Humanitarian',
  categories: [
    'openstreetmap',
    'hot',
    'humanitarian',
    'world'
  ],
  minZoom: 0,
  maxZoom: 19,
  url: 'https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png',
  description: 'Tiles from OpenStreetMap',
  attribution: 'Map data © OpenStreetMap',
  format: 'png',
  type: 'baselayer'
}

module.exports.wikimedia = {
  name: 'OpenStreetMap Wikimedia',
  shortName: 'Wikimedia',
  categories: [
    'openstreetmap',
    'wikimedia',
    'world'
  ],
  minZoom: 0,
  maxZoom: 19,
  url: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',
  description: 'Tiles from OSM',
  attribution: 'Map data © OSM',
  format: 'png',
  type: 'baselayer'
}

module.exports.hillshade = {
  name: 'OpenStreetMap Hillshade',
  shortName: 'Hillshade',
  categories: [
    'openstreetmap',
    'hillshade',
    'world'
  ],
  minZoom: 0,
  maxZoom: 19,
  url: 'https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}',
  description: 'Tiles from OpenStreetMap',
  attribution: 'Map data © OpenStreetMap',
  format: 'png',
  type: 'baselayer'
}
