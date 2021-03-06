const {test} = require('tap')
const mapProviders = require('./')

test('map-providers', t => {
  for (const provider of Object.keys(mapProviders)) {
    for (const service of Object.keys(mapProviders[provider])) {
      t.assert(mapProviders[provider][service].required !== undefined, `<required> is required [${provider}.${service}]`)
      t.assert(mapProviders[provider][service].attribution !== undefined, `<attribution> is required [${provider}.${service}]`)
      t.assert(mapProviders[provider][service].categories !== undefined, `<categories> is required [${provider}.${service}]`)
      t.assert(mapProviders[provider][service].description !== undefined, `<description> is required [${provider}.${service}]`)
      t.assert(mapProviders[provider][service].format !== undefined, `<format> is required [${provider}.${service}]`)
      t.assert(mapProviders[provider][service].maxZoom !== undefined, `<maxZoom> is required [${provider}.${service}]`)
      t.assert(mapProviders[provider][service].minZoom !== undefined, `<minZoom> is required [${provider}.${service}]`)
      t.assert(mapProviders[provider][service].name !== undefined, `<name> is required [${provider}.${service}]`)
      t.assert(mapProviders[provider][service].type !== undefined, `<type> is required [${provider}.${service}]`)
      t.assert(mapProviders[provider][service].url !== undefined, `<url> is required [${provider}.${service}]`)
      t.assert(mapProviders[provider][service].shortName !== undefined, `<shortName> is required [${provider}.${service}]`)
      t.assert(mapProviders[provider][service].format.toLowerCase() !== 'jpeg', `<format> value must be 'jpg' [${provider}.${service}]`)
    }
  }
  t.end()
})
