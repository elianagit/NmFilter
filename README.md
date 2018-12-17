# NmFilter
REST service that parses json object and finds all "Nm" fields and returns "Nm" fields values in array

Instructions:
Extract the files to folder and run the following commands:
1. npm i
2. node .\tsc\src\Main.js

In order to test: send POST request using POSTMAN:

POST /get_nm_fields HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 62d8c64c-7b85-7b2c-16ee-cd5d2881e9e2

{
	// your JSON object
}
