ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("SOYEZenligne", "Abondance888")
RTC_DS1307.DateTime(
2024,
4,
8,
13,
0,
0
)
basic.forever(function () {
    ESP8266_IoT.connectThingSpeak()
    ESP8266_IoT.setData(
    "C6R0XNAZ6DKJL8JI",
    Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C),
    Environment.octopus_BME280(Environment.BME280_state.BME280_humidity),
    Environment.octopus_BME280(Environment.BME280_state.BME280_pressure),
    Environment.octopus_BME280(Environment.BME280_state.BME280_altitude),
    Environment.ReadLightIntensity(AnalogPin.P1)
    )
    ESP8266_IoT.uploadData()
})
