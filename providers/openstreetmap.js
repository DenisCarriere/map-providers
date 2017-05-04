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

module.exports.cycle = {
  name: 'OpenStreetMap Cycle Map',
  shortName: 'Cycle',
  categories: [
    'openstreetmap',
    'cycle',
    'world'
  ],
  minZoom: 0,
  maxZoom: 19,
  url: 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
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

module.exports.transport = {
  name: 'OpenStreetMap Transport Map',
  shortName: 'Transport',
  categories: [
    'openstreetmap',
    'transport',
    'world'
  ],
  minZoom: 0,
  maxZoom: 19,
  url: 'https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png',
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

module.exports.lyrk = {
  name: 'OpenStreetMap Lyrk',
  shortName: 'Lyrk',
  categories: [
    'openstreetmap',
    'lyrk',
    'world'
  ],
  minZoom: 0,
  maxZoom: 19,
  url: 'https://tiles.lyrk.org/ls/{z}/{x}/{y}?apikey=6e8cfef737a140e2a58c8122aaa26077',
  description: 'Tiles from OpenStreetMap',
  attribution: 'Map data © OpenStreetMap',
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
