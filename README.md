#Welcome

The API of pune.io can be used to request data that has been uploaded by devices which are scattered all along the area. It is a RESTful API. It returns the data in geo-JSON format which can be used by different programming languages for different applications. 


You can request data from any device from using the following references.

##Temperature
###Request


<code>GET</code>

    http://api.pune.io/sensors/temp/device_id?location="Viman Nagar"

This requests the latest temperature data from the device which has the device id device_id. This method can be used when you know the device id of the device that you need to access. 

| Parameter | Type | Description |
|-----------|------|-------------|
| device_id | Number | Identifies your device and lets you directly access it's data. |

###Response

Success (200)

| Parameter | Type | Description |
|-----------|------|-------------|
| device | geo-json | device information with geo-location. |
| feature | geo-json | gives the geo-location of the device. |

```javascript
HTTP/1.1 200 OK
     {
      "device": {
        "id": "2",
        "location": "Viman Nagar",
        "environment": "Fixed",
        "created": "11-01-2015 1:00:00 PM",
        "last_insert": "11-01-2015 1:45:23 PM",
        "posts": [
          {
            "timestamp": "11-01-2015 1:45:23 PM",
            "temp": 21.6,
            "degree": C
           }
          ],
        "type": "FeatureCollection",
            "features": [
              {
            "type": "Feature",
            "properties": {},
            "geometry": {
            "type": "Point",
                "coordinates": [
                73.83724451065063,
                18.469168551939493
                    ]
                          }
                }
                }
        }
```
Error (4xx)

| Parameter | Description |
|-----------|-------------|
|sensor_data | No content |

```javascript
HTTP/1.1 204 No content
 {
     "error": "data unavailable"
   }
```
 
##Light
###Request


<code>GET</code>

    http://api.pune.io/sensors/light/device_id?location="Viman Nagar"

Usually more than one device will be positioned in an area. So to access the light data available from all the devices within a specific area, you can use the above example. 

| Parameter | Type | Description |
|-----------|------|-------------|
| location | String | used to identify the location of the device. |

###Response

Success (200)

| Parameter | Type | Description |
|-----------|------|-------------|
| device | geo-json | device information with geo-location. |
| feature | geo-json | gives the geo-location of the device. |

```javascript
HTTP/1.1 200 OK
     [{
      "device": {
        "id": "1",
        "location": "Viman Nagar",
        "environment": "Fixed",
        "created": "11-01-2015 1:00:00 PM",
        "last_insert": "11-01-2015 1:45:23 PM",
        "posts": [
          {
            "timestamp": "11-01-2015 1:45:23 PM",
            "light":269
                        
           }
        ],
        "type": "FeatureCollection",
            "features": [
              {
            "type": "Feature",
            "properties": {},
            "geometry": {
            "type": "Point",
                "coordinates": [
                73.83724451065063,
                18.469168551939493
                    ]
                      } 
            }
            }}
```

Error (4xx)

| Parameter | Description |
|-----------|-------------|
|sensor_data | No content |


```javascript
HTTP/1.1 204 No content
   {
     "error": "Data unavailable"
   }
```
##Humidity
###Request


<code>GET</code>

    http://api.pune.io/sensors/humid/device_id?location="Viman Nagar"

This requests the latest humidity data from the device which has the device id device_id. Knowing the device id of the device's information is necessary..

| Parameter | Type | Description |
|-----------|------|-------------|
| device_id | Number | Identifies your device and lets you directly access it's data. |

###Response

Success (200)

| Parameter | Type | Description |
|-----------|------|-------------|
| device | geo-json | device information with geo-location. |
| feature  | geo-json | gives the geo-location of the device. |

```javascript
HTTP/1.1 200 OK
     {
      "device": {
        "id": "2",
        "location": "Viman Nagar",
        "environment": "Fixed",
        "created": "12-01-2015 2:00:00 PM",
        "last_insert": "12-01-2015 2:13:44 PM",
        "posts": [
          {
            "timestamp": "12-01-2015 2:13:44 PM",
            "humid": 38.7
           }
          ],
        "type": "FeatureCollection",
            "features": [
              {
            "type": "Feature",
            "properties": {},
            "geometry": {
            "type": "Point",
                "coordinates": [
                73.83724451065063,
                18.469168551939493
                    ]
                          }
                }
                }
        }
```

Error (4xx)

| Parameter | Description |
|-----------|-------------|
| sensor_data | No content |


```javascript
 HTTP/1.1 204 No content
   {
     "error": "Data unavailable"
   }


```
##Accelerometer
###Request


<code>GET</code>

    http://api.pune.io/sensors/accel?location="Viman Nagar"

Usually more than one device will be positioned in an area. So to access accelerometer data available from all the devices within a specific area, you can use the above example. 

| Parameter | Type | Description |
|-----------|------|-------------|
| location | String | Used to identify the location of the device. |


###Response

Success (200)

| Parameter | Type | Description |
|-----------|------|-------------|
| device | geo-json | device information with geo-location. |
| feature | geo-json | gives the geo-location of the device. |

```javascript

HTTP/1.1 200 OK
     [{
      "device": {
        "id": "1",
        "location": "Viman Nagar",
        "environment": "Fixed",
        "created": "12-01-2015 2:00:00 PM",
        "last_insert": "12-01-2015 2:13:44 PM",
        "posts": [
          {
            "timestamp": "12-01-2015 2:13:44 PM",
           "accel":[560,
                    256,
                    441]
  
           }
        ],
        "type": "FeatureCollection",
            "features": [
              {
            "type": "Feature",
            "properties": {},
            "geometry": {
            "type": "Point",
                "coordinates": [
                73.83724451065063,
                18.469168551939493
                    ]
                      } 
            }
            }
```
Error (4xx)

| Parameter | Description |
|-----------|-------------| 
| sensor_data | No content |


```javascript
 HTTP/1.1 204 No content
   {
     "error": "Data unavailable"
   }
```
You can request data from any device from using the following references.

##PIR
###Request


<code>GET</code>

    http://api.pune.io/sensors/pir/device_id?location="Viman Nagar"

This requests the latest PIR(motion) data from the device which has the device id device_id. This method can be used when you know the device id of the device that you need to access. 

| Parameter | Type | Description |
|-----------|------|-------------|
| device_id | Number | Identifies your device and lets you directly access it's data. |

###Response

Success (200)

| Parameter | Type | Description |
|-----------|------|-------------|
| device | geo-json | device information with geo-location. |
| feature | geo-json | gives the geo-location of the device. |

```javascript
HTTP/1.1 200 OK
     {
      "device": {
        "id": "3",
        "location": "Viman Nagar",
        "environment": "Fixed",
        "created": "12-01-2015 1:00:00 PM",
        "last_insert": "12-01-2015 1:45:23 PM",
        "posts": [
          {
            "timestamp": "11-01-2015 1:45:23 PM",
            "pir": 265
          
           }
          ],
        "type": "FeatureCollection",
            "features": [
              {
            "type": "Feature",
            "properties": {},
            "geometry": {
            "type": "Point",
                "coordinates": [
                73.83724451065063,
                18.469168551939493
                    ]
                          }
                }
                }
        }
```
Error (4xx)

| Parameter | Description |
|-----------|-------------|
|sensor_data | No content |

 
```javascript
HTTP/1.1 204 No content
 {
     "error": "Data unavailable"
   }
```
##Sensor_data
###Request

If a user wants to get all the sensor data available then ,he must request like as follows

<code>GET</code>

    http://api.pune.io/sensors/device_id?location="Viman Nagar"

###Response

Success (200)

| Parameter | Type | Description |
|-----------|------|-------------|
| device | geo-json | device information with geo-location. |
| feature | geo-json | gives the geo-location of the device. |

```javascript

HTTP/1.1 200 OK
     [{
      "device": {
        "id": "1",
        "location": "Viman Nagar",
        "environment": "Fixed",
        "created": "12-01-2015 2:00:00 PM",
        "last_insert": "12-01-2015 2:13:44 PM",
        "posts": [
          {
            "timestamp": "12-01-2015 2:13:44 PM",
            "temp":23.5,
            "light": 95,
            "humid":87,
            "PIR": 54,
            "accel":[560,
                    256,
                    441]

           }
        ],

        "type": "FeatureCollection",
            "features": [
              {
            "type": "Feature",
            "properties": {},
            "geometry": {
            "type": "Point",
                "coordinates": [
                73.83724451065063,
                18.469168551939493
                    ]
                      } 
            }
            }
```
Error (4xx)

| Parameter | Description |
|-----------|-------------| 
| sensor_data | No content |

```javascript
 HTTP/1.1 204 No content
   {
     "error": "Data unavailable"
   }
```

      