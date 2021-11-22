# zigbee2mqtt_converters
This is a simple repository to store some converters not yet available in the stable version of [Zigbee2mqtt](https://www.zigbee2mqtt.io/ "Zigbee2mqtt").

Most (all ?) of these converters are already available in the dev branch of [Zigbee2mqtt](https://www.zigbee2mqtt.io/ "Zigbee2mqtt").
The main purpose of this repository is therefor to provide a simple way to use new converters without having to switch to the dev branch (in case of a new batch of device for exemple).

Stable versions from [Zigbee2mqtt](https://www.zigbee2mqtt.io/ "Zigbee2mqtt") are, off course, always preferable when they become available. **So use files listed here with caution and always make a backup before trying it.** 

### In order to use a custom converter, you need to ...

1. **Add some lines to your Zigbee2mqtt configuration.yaml file ...**
```yaml
external_converters:
 - converter1_name.js
 - converter2_name.js
```
Where converter1_name.js **MUST** match the model of your device **AND** the associated file name.
According to the table below, that would be something like this ...
```yaml
external_converters:
 - HG07834A.js
 - HG07834B.js
```
2. **Copy associated file(s) listed in the table below in the same directory of your configuration.yaml.**


3. **Restart Zigbee2mqtt to let it use the new converters.**


#### Currently available converters are ...
	
|Vendor|Commercial name|Model|Associated file|
| ------------ | ------------ | ------------ | ------------ |
|Lidl|Livarno Lux GU10 spot RGB|HG07834A|[HG07834A.js](Lidl/HG07834A.js "HG07834A.js")|
|Lidl|Livarno Lux E14 candle RGB|HG07834B|[HG07834B.js](Lidl/HG07834B.js "HG07834B.js")|
|Lidl|Livarno Lux E27 bulb RGB|HG07834C|[HG07834C.js](Lidl/HG07834C.js "HG07834C.js")|
|   |   |   |   |
|   |   |   |   |

### To remove a converter, simply remove the lines you've added in your configuration.yaml and restart Zigbee2mqtt.
