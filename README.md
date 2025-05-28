### Create Account
POST http://localhost:3000/accounts
Content-Type: application/json

{
  "email": "deexith2016@gmail.com",
  "name": "Deekshith D V",
  "website": "https://myapp.com"
}

### 🟢 Sample Response
HTTP/1.1 201 Created
{
  "id": 1,
  "email": "deexith2016@gmail.com",
  "name": "Deekshith D V",
  "website": "https://myapp.com",
  "secretToken": "f892a4e7-3eac-4784-8a9f-df52ea089472"
}

---

### Get All Accounts
GET http://localhost:3000/accounts

### 🟢 Sample Response
HTTP/1.1 200 OK
[
  {
    "id": 1,
    "email": "deexith2016@gmail.com",
    "name": "Deekshith D V",
    "website": "https://myapp.com",
    "secretToken": "f892a4e7-3eac-4784-8a9f-df52ea089472"
  }
]

---

### Get Account by ID
GET http://localhost:3000/accounts/1

### 🟢 Sample Response
HTTP/1.1 200 OK
{
  "id": 1,
  "email": "deexith2016@gmail.com",
  "name": "Deekshith D V",
  "website": "https://myapp.com",
  "secretToken": "f892a4e7-3eac-4784-8a9f-df52ea089472"
}

---

### Update Account
PUT http://localhost:3000/accounts/1
Content-Type: application/json

{
  "name": "Updated Name"
}

### 🟢 Sample Response
HTTP/1.1 200 OK
{
  "message": "Account updated successfully"
}

---

### Delete Account
DELETE http://localhost:3000/accounts/1

### 🟢 Sample Response
HTTP/1.1 200 OK
{
  "message": "Account deleted successfully"
}

---

### Create Destination
POST http://localhost:3000/destinations
Content-Type: application/json

{
  "accountId": 1,
  "url": "https://webhook.site/5c018892-cc4b-4dc2-92b7-1cef7e3a4184",
  "method": "POST",
  "headers": {
    "APP_ID": "1234APPID1234",
    "APP_SECRET": "41c4bf1f-09ed-41e4-8476-9787396d9d9c",
    "ACTION": "user.update",
    "Content-Type": "application/json",
    "Accept": "*/*"
  }
}

### 🟢 Sample Response
HTTP/1.1 201 Created
{
  "id": 1,
  "accountId": 1,
  "url": "https://webhook.site/5c018892-cc4b-4dc2-92b7-1cef7e3a4184",
  "method": "POST",
  "headers": {
    "APP_ID": "1234APPID1234",
    "APP_SECRET": "41c4bf1f-09ed-41e4-8476-9787396d9d9c",
    "ACTION": "user.update",
    "Content-Type": "application/json",
    "Accept": "*/*"
  }
}

---

### Get All Destinations
GET http://localhost:3000/destinations

### 🟢 Sample Response
HTTP/1.1 200 OK
[
  {
    "id": 1,
    "accountId": 1,
    "url": "https://webhook.site/5c018892-cc4b-4dc2-92b7-1cef7e3a4184",
    "method": "POST",
    "headers": {
      "APP_ID": "1234APPID1234",
      "APP_SECRET": "41c4bf1f-09ed-41e4-8476-9787396d9d9c",
      "ACTION": "user.update",
      "Content-Type": "application/json",
      "Accept": "*/*"
    }
  }
]

---

### Get Destination by ID
GET http://localhost:3000/destinations/1

### 🟢 Sample Response
HTTP/1.1 200 OK
{
  "id": 1,
  "accountId": 1,
  "url": "https://webhook.site/5c018892-cc4b-4dc2-92b7-1cef7e3a4184",
  "method": "POST",
  "headers": {
    "APP_ID": "1234APPID1234",
    "APP_SECRET": "41c4bf1f-09ed-41e4-8476-9787396d9d9c",
    "ACTION": "user.update",
    "Content-Type": "application/json",
    "Accept": "*/*"
  }
}

---

### Update Destination
PUT http://localhost:3000/destinations/1
Content-Type: application/json

{
  "url": "https://webhook.site/new-url"
}

### 🟢 Sample Response
HTTP/1.1 200 OK
{
  "message": "Destination updated successfully"
}

---

### Delete Destination
DELETE http://localhost:3000/destinations/1

### 🟢 Sample Response
HTTP/1.1 200 OK
{
  "message": "Destination deleted successfully"
}

---

### Get Destinations by Account ID
GET http://localhost:3000/accounts/1/destinations

### 🟢 Sample Response
HTTP/1.1 200 OK
[
  {
    "id": 1,
    "accountId": 1,
    "url": "https://webhook.site/...",
    "method": "POST",
    "headers": {
      ...
    }
  }
]

---

### Send Data to Destinations
POST http://localhost:3000/server/incoming_data
Content-Type: application/json
CL-X-TOKEN: f892a4e7-3eac-4784-8a9f-df52ea089472

{
  "message": "Hello world!"
}

### 🟢 Sample Response
HTTP/1.1 200 OK
{
  "message": "Data sent to all destinations"
}