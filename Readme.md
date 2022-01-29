Front to Back/Back to Front nomenclature

req.query = {}   // { username: value, password: value }
username = string (unique to user)
message = string
comBirdName = string
sciBirdName = string
lat: value  // to back end
long: value  // to back end
location = { area: value } // to front end
timeStamp

Signing up or Logging In

/gainAccess* 
  Get or Post
  /gainAccess?username=value&password=value
  { username: value, password: value }
  response = { valid: boolean }

/community*
  GET
  /community/everyone?username=value&location=value
  { username: value, lat: value, long: value }
  response = { messages: [ { username: value, location: { area: value }, comBirdName: value, timeStamp: value}, {...}, ... ] }

/profile*
  GET, POST, or DELETE
  GET
  /profile?username=value&location=value
  { username: value, lat: value, long: value }
  response = { 
    birds: [ { comBirdName: value, sciBirdName: value }, {...}, ... ],
    seenBirds: [ { comBirdName: value, sciBirdName: value, timeStamp: value }. {...}, ... ]
    }
  POST
  /profile/self?username=value&location=value&timeStamp...
  { username: value, lat: value, long: value, timeStamp: value, commBirdName, sciBirdName }
  response = { valid: boolean }
  POST
  /profile/community?username=value&location=value&timeStamp=value&message=value...
  { username: value, lat: value, long: value, timeStamp: value, commBirdName, sciBirdName, message }
  response = { valid: boolean }