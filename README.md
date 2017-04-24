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
var providers = require('map-providers');
var osm = providers.openstreetmap.url;
//= 'https://{switch:a,b,c}.tile.openstreetmap.org/{zoom}/{x}/{y}.png'
```

## Providers

| Name                          | Identifier                |
| ----------------------------- | ------------------------- |
| OpenStreetMap Standard        | `openstreetmap.standard`  |
| OpenStreetMap Cycle Map       | `openstreetmap.cycle`     |
| OpenStreetMap Humanitarian    | `openstreetmap.hot`       |
| OpenStreetMap Transport       | `openstreetmap.transport` |
| OpenStreetMap Wikimedia       | `openstreetmap.wikimedia` |
| OpenStreetMap Lyrk            | `openstreetmap.lyrk`      |
| Bing Imagery                  | `bing.imagery`            |
| National Geographic World Map | `esri.natgeo`             |
| ESRI Imagery                  | `esri.imagery`            |
| ESRI Ocean Basemap            | `esri.ocean`              |
| ESRI USA Topo Maps            | `esri.usatopo`            |
| ESRI World Street Map         | `esri.street`             |
| ESRI World Topographic Map    | `esri.topo`               |
