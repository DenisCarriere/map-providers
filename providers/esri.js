module.exports.natgeo = {
  name: 'ESRI National Geographic World Map',
  shortName: 'NatGeo',
  categories: [
    'esri',
    'national',
    'geographic',
    'world'
  ],
  minZoom: 0,
  maxZoom: 12,
  required: [],
  url: 'https://services.arcgisonline.com/arcgis/rest/services/NatGeo_World_Map/MapServer/WMTS/tile/1.0.0/World_Imagery/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpeg',
  description: 'This map is designed to be used as a general reference map for informational and educational purposes as well as a basemap by GIS professionals and other users for creating web maps and web mapping applications.',
  attribution: 'National Geographic, Esri, DeLorme, HERE, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, INCREMENT P',
  format: 'jpg',
  type: 'baselayer'
}

module.exports.ocean = {
  name: 'ESRI Ocean Basemap',
  shortName: 'Ocean',
  categories: [
    'esri',
    'ocean',
    'world'
  ],
  minZoom: 0,
  maxZoom: 10,
  required: [],
  url: 'https://services.arcgisonline.com/arcgis/rest/services/Ocean_Basemap/MapServer/WMTS/tile/1.0.0/World_Imagery/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpeg',
  description: 'The ocean basemap includes bathymetry, surface and subsurface feature names, and derived depths. This service is designed to be used as a basemap by marine GIS professionals and as a reference map by anyone interested in ocean data.',
  attribution: 'Esri, GEBCO, NOAA, National Geographic, DeLorme, HERE, Geonames.org, and other contributors',
  format: 'jpg',
  type: 'baselayer'
}

module.exports.usatopo = {
  name: 'ESRI USA Topo Maps',
  shortName: 'USA Topo',
  categories: [
    'esri',
    'topo',
    'topographicusa'
  ],
  minZoom: 0,
  maxZoom: 15,
  required: [],
  url: 'https://services.arcgisonline.com/arcgis/rest/services/USA_Topo_Maps/MapServer/WMTS/tile/1.0.0/World_Imagery/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpeg',
  description: 'This map service presents detailed USGS topographic maps for the United States at multiple scales.',
  attribution: '© 2011 National Geographic Society, i-cubed',
  format: 'jpg',
  type: 'baselayer'
}

module.exports.imagery = {
  name: 'ESRI World Imagery',
  shortName: 'Imagery',
  categories: [
    'esri',
    'imagery',
    'world'
  ],
  minZoom: 0,
  maxZoom: 19,
  required: [],
  url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/WMTS/tile/1.0.0/World_Imagery/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpeg',
  description: 'This map service presents satellite imagery for the world and high-resolution imagery for the United States and other areas around the world.',
  attribution: 'Esri, DigitalGlobe, Earthstar Geographics, CNES/Airbus DS, GeoEye, USDA FSA, USGS, Getmapping, Aerogrid, IGN, IGP, and the GIS User Community',
  format: 'jpg',
  type: 'baselayer'
}

module.exports.street = {
  name: 'ESRI World Street Map',
  shortName: 'Street',
  categories: [
    'esri',
    'street',
    'world'
  ],
  minZoom: 0,
  maxZoom: 19,
  required: [],
  url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/WMTS/tile/1.0.0/World_Topo_Map/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpeg',
  description: 'This map service presents highway-level data for the world and street-level data for North America, Europe, Africa, parts of the Middle East, Asia, and more.',
  attribution: 'Esri, HERE, DeLorme, USGS, Intermap, INCREMENT P, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), MapmyIndia, © OpenStreetMap contributors, and the GIS User Community',
  format: 'jpg',
  type: 'baselayer'
}

module.exports.topo = {
  name: 'ESRI World Topographic Map',
  shortName: 'Topo',
  categories: [
    'esri',
    'topo',
    'topographic',
    'world'
  ],
  minZoom: 0,
  maxZoom: 19,
  required: [],
  url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/WMTS/tile/1.0.0/World_Imagery/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.jpeg',
  description: 'This world topographic map includes boundaries, cities, water features, physiographic features, parks, landmarks, transportation, and buildings.',
  attribution: 'Esri, HERE, DeLorme, Intermap, INCREMENT P, GEBCO, USGS, FAO, NPS, NRCAN, GeoBase, IGN, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), swisstopo, MapmyIndia, © OpenStreetMap contributors, GIS User Community',
  format: 'jpg',
  type: 'baselayer'
}
