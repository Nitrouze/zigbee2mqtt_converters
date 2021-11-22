const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const e = exposes.presets;
const {repInterval} = require('zigbee-herdsman-converters/lib/constants');

const fzLocal = {
    xiaomi_tvoc: {
        cluster: 'genAnalogInput',
        type: ['attributeReport', 'readResponse'],
        convert: (model, msg, publish, options, meta) => {
            return {
                voc: msg.data.presentValue
            };
        },
    }
};

const reportingLocal = {
    xiaomi_tvoc: async (endpoint, overrides) => {
        const p = reporting.payload('presentValue', 10, repInterval.HOUR, 0, overrides);                
        await endpoint.configureReporting('genAnalogInput', p);                                 
    }  
};

const device = {
        zigbeeModel: ['lumi.airmonitor.acn01'],
        model: 'VOCKQJK11LM',
        vendor: 'LUMI',
        description: 'LUMI TVOC Air Quality Monitor',
        fromZigbee: [fzLocal.xiaomi_tvoc, fz.battery, fz.temperature, fz.humidity],
        toZigbee: [],
        meta: {battery: {voltageToPercentage: '3V_2100'}},
        exposes: [e.battery(), e.temperature(), e.humidity(), e.voc()],
        configure: async (device, coordinatorEndpoint, logger) => {
            await reporting.bind(device.getEndpoint(1), coordinatorEndpoint, ['msTemperatureMeasurement', 'msRelativeHumidity', 'genPowerCfg', 'genAnalogInput']);
            await reporting.batteryVoltage(device.getEndpoint(1));
            await reporting.humidity(device.getEndpoint(1));
            await reporting.temperature(device.getEndpoint(1));
            await reportingLocal.xiaomi_tvoc(device.getEndpoint(1));
        },
    };

module.exports = device;
