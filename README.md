# Map Providers

[![Build Status](https://travis-ci.org/DenisCarriere/map-providers.svg?branch=master)](https://travis-ci.org/DenisCarriere/map-providers)
[![npm version](https://badge.fury.io/js/map-providers.svg)](https://badge.fury.io/js/map-providers)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/DenisCarriere/map-providers/master/LICENSE)

[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

> List of available Map Providers

## Install

**npm**

```bash
$ yarn add map-providers
```

## Quickstart

```javascript
const providers = require('map-providers');
Object.keys(providers)
//= [ 'openstreetmap', 'bing', 'digitalglobe', 'esri', 'nrcan' ]
Object.keys(providers.openstreetmap)
//= [ 'standard', 'hot', 'wikimedia', 'hillshade' ]
providers.openstreetmap.standard;
//= { name: 'OpenStreetMap Standard',
//   shortName: 'Standard',
//   categories: [ 'openstreetmap', 'standard', 'world' ],
//   minZoom: 0,
//   maxZoom: 19,
//   required: [],
//   url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//   description: 'Tiles from OpenStreetMap',
//   attribution: 'Map data © OpenStreetMap',
//   format: 'png',
//   type: 'baselayer' }
providers.openstreetmap.standard.url;
//= 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
```

## Providers

| Name                          | Identifier                | Required        |
| ----------------------------- | ------------------------- |---------------- |
| OpenStreetMap Standard        | `openstreetmap.standard`  |                 |
| OpenStreetMap Humanitarian    | `openstreetmap.hot`       |                 |
| OpenStreetMap Wikimedia       | `openstreetmap.wikimedia` |                 |
| OpenStreetMap Hillshade       | `openstreetmap.hillshade` |                 |
| Bing Imagery                  | `bing.imagery`            |                 |
| Bing Roads                    | `bing.roads`              |                 |
| DigitalGlobe Premium Imagery  | `digitalglobe.premium`    | access_token    |
| DigitalGlobe Standard Imagery | `digitalglobe.standard`   | access_token    |
| National Geographic World Map | `esri.natgeo`             |                 |
| ESRI Imagery                  | `esri.imagery`            |                 |
| ESRI Ocean Basemap            | `esri.ocean`              |                 |
| ESRI USA Topo Maps            | `esri.usatopo`            |                 |
| ESRI World Street Map         | `esri.street`             |                 |
| ESRI World Topographic Map    | `esri.topo`               |                 |
| NRCAN Transportation (CBMT)   | `nrcan.cbmt`              |                 |
| NRCAN Toporama                | `nrcan.toporama`          |                 |
