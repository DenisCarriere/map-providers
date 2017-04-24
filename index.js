const esri = require('./providers/esri')
const bing = require('./providers/bing')
const openstreetmap = require('./providers/openstreetmap')
const toporama = require('./providers/toporama')

module.exports = {
  esri: esri,
  bing: bing,
  openstreetmap: openstreetmap,
  toporama: toporama
}
