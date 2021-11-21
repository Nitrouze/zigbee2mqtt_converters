const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
        fingerprint: [{modelID: 'TS0505B', manufacturerName: '_TZ3000_th6zqqy6'}],
        model: 'HG07834B',
        vendor: 'Lidl',
        description: 'Livarno Lux E14 candle RGB',
        ...extend.light_onoff_brightness_colortemp_color({disableColorTempStartup: true, colorTempRange: [153, 500]}),
        meta: {applyRedFix: true, enhancedHue: false},
        configure: async (device, coordinatorEndpoint, logger) => {
            device.getEndpoint(1).saveClusterAttributeKeyValue('lightingColorCtrl', {colorCapabilities: 29}); 
        },
};

module.exports = definition;
