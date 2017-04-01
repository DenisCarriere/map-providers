module.exports.english = {
  name: 'Toporama',
  categories: [
    'toporama',
    'canada',
    'topographic',
    'english'
  ],
  minZoom: 1,
  maxZoom: 19,
  url: 'http://wms.ess-ws.nrcan.gc.ca/wms/toporama_en?&service=WMS&request=GetMap&layers=WMS-Toporama&format=image/jpeg&transparent=false&version=1.1.1&height={height}&width={width}&srs={srs}&bbox={bbox}',
  description: 'The National Topographic System (NTS) provides general-purpose topographic map coverage of Canada.',
  attribution: 'Map data Toporama',
  format: 'jpeg',
  type: 'baselayer'
}
