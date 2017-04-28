module.exports.imagery = {
  name: 'Google Imagery',
  categories: [
    'google',
    'imagery',
    'world'
  ],
  minZoom: 1,
  maxZoom: 20,
  url: 'http://khm{switch:0,1,2,3}.googleapis.com/kh?v=722&hl=en-CA&&x={x}&y={y}&z={z}',
  description: 'Google Imagery',
  attribution: 'Imagery ©2017 Google',
  format: 'jpeg',
  type: 'baselayer'
}
