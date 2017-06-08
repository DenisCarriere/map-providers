module.exports.basemap = {
  name: 'The Canada Base Map - Transportation (CBMT)',
  shortName: 'CBMT',
  categories: [
    'nrcan',
    'topo',
    'canada'
  ],
  minZoom: 1,
  maxZoom: 15,
  url: 'http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3857/MapServer/WMTS/tile/1.0.0/BaseMaps_CBMT_CBCT_GEOM_3857/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpg',
  description: 'The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada.',
  attribution: ' CanVec, GeoBase, the National Topographic Data Base (NTDB) and base data from the Atlas of Canada National Scale datasets. ',
  format: 'jpeg',
  type: 'baselayer'
}
