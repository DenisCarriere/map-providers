(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.mapProviders = factory());
}(this, (function () {

var natgeo = {
  name: 'ESRI National Geographic World Map',
  categories: [
    'esri',
    'national',
    'geographic',
    'world'
  ],
  minZoom: 0,
  maxZoom: 12,
  url: 'https://services.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/WMTS/tile/1.0.0/World_Imagery/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpeg',
  description: 'This map is designed to be used as a general reference map for informational and educational purposes as well as a basemap by GIS professionals and other users for creating web maps and web mapping applications.',
  attribution: 'National Geographic, Esri, DeLorme, HERE, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, INCREMENT P',
  format: 'jpeg',
  type: 'baselayer'
};

var ocean = {
  name: 'ESRI Ocean Basemap',
  categories: [
    'esri',
    'ocean',
    'world'
  ],
  minZoom: 0,
  maxZoom: 10,
  url: 'https://services.arcgisonline.com/arcgis/rest/services/Ocean_Basemap/MapServer/WMTS/tile/1.0.0/World_Imagery/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpeg',
  description: 'The ocean basemap includes bathymetry, surface and subsurface feature names, and derived depths. This service is designed to be used as a basemap by marine GIS professionals and as a reference map by anyone interested in ocean data.',
  attribution: 'Esri, GEBCO, NOAA, National Geographic, DeLorme, HERE, Geonames.org, and other contributors',
  format: 'jpeg',
  type: 'baselayer'
};

var usatopo = {
  name: 'ESRI USA Topo Maps',
  categories: [
    'esri',
    'topo',
    'topographicusa'
  ],
  minZoom: 0,
  maxZoom: 15,
  url: 'https://services.arcgisonline.com/arcgis/rest/services/USA_Topo_Maps/MapServer/WMTS/tile/1.0.0/World_Imagery/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpeg',
  description: 'This map service presents detailed USGS topographic maps for the United States at multiple scales.',
  attribution: '© 2011 National Geographic Society, i-cubed',
  format: 'jpeg',
  type: 'baselayer'
};

var imagery = {
  name: 'ESRI World Imagery',
  categories: [
    'esri',
    'imagery',
    'world'
  ],
  minZoom: 0,
  maxZoom: 19,
  url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/WMTS/tile/1.0.0/World_Imagery/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpeg',
  description: 'This map service presents satellite imagery for the world and high-resolution imagery for the United States and other areas around the world.',
  attribution: 'Esri, DigitalGlobe, Earthstar Geographics, CNES/Airbus DS, GeoEye, USDA FSA, USGS, Getmapping, Aerogrid, IGN, IGP, and the GIS User Community',
  format: 'jpeg',
  type: 'baselayer'
};

var street = {
  name: 'ESRI World Street Map',
  categories: [
    'esri',
    'street',
    'world'
  ],
  minZoom: 0,
  maxZoom: 19,
  url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/WMTS/tile/1.0.0/World_Topo_Map/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpeg',
  description: 'This map service presents highway-level data for the world and street-level data for North America, Europe, Africa, parts of the Middle East, Asia, and more.',
  attribution: 'Esri, HERE, DeLorme, USGS, Intermap, INCREMENT P, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), MapmyIndia, © OpenStreetMap contributors, and the GIS User Community',
  format: 'jpeg',
  type: 'baselayer'
};

var topo = {
  name: 'ESRI World Topographic Map',
  categories: [
    'esri',
    'topo',
    'topographic',
    'world'
  ],
  minZoom: 0,
  maxZoom: 19,
  url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/WMTS/tile/1.0.0/World_Imagery/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpeg',
  description: 'This world topographic map includes boundaries, cities, water features, physiographic features, parks, landmarks, transportation, and buildings.',
  attribution: 'Esri, HERE, DeLorme, Intermap, INCREMENT P, GEBCO, USGS, FAO, NPS, NRCAN, GeoBase, IGN, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), swisstopo, MapmyIndia, © OpenStreetMap contributors, GIS User Community',
  format: 'jpeg',
  type: 'baselayer'
};

var esri = {
	natgeo: natgeo,
	ocean: ocean,
	usatopo: usatopo,
	imagery: imagery,
	street: street,
	topo: topo
};

var imagery$1 = {
  name: 'Bing Imagery',
  categories: [
    'bing',
    'imagery',
    'world'
  ],
  minZoom: 1,
  maxZoom: 20,
  url: 'https://ecn.t{switch:0,1,2,3}.tiles.virtualearth.net/tiles/a{quadkey}.jpeg?g=5250',
  description: 'Tiles from Bing',
  attribution: 'Map data © Bing',
  format: 'jpeg',
  type: 'baselayer'
};

var bing = {
	imagery: imagery$1
};

var standard = {
  name: 'OpenStreetMap Standard',
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
};

var cycle = {
  name: 'OpenStreetMap Cycle Map',
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
};

var hot = {
  name: 'OpenStreetMap Humanitarian',
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
};

var transport = {
  name: 'OpenStreetMap Transport Map',
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
};

var wikimedia = {
  name: 'OpenStreetMap Wikimedia',
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
};

var lyrk = {
  name: 'OpenStreetMap Lyrk',
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
};

var openstreetmap = {
	standard: standard,
	cycle: cycle,
	hot: hot,
	transport: transport,
	wikimedia: wikimedia,
	lyrk: lyrk
};

var english = {
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
};

var toporama = {
	english: english
};

var index = {
  esri: esri,
  bing: bing,
  openstreetmap: openstreetmap,
  toporama: toporama
};

return index;

})));
