# Api Docs

Let's see how we can interact with the RESTful APIs of our nestjs application. To do that, I personally love the platform called `postman`. We will see what endpoints we have:

#### Base URL:
- All endpoints in the app use the following base URL: `http://localhost:3000`
- And I love to follow api version with prefix: `v1`
<br>

## `(POST) /v1/developers`
This endpoint is used to create a new developer.

#### Request Body
```json
{
  "name": "string",
  "email": "string",
  "level": "string"
}
```
- email should be valid one
- level must be one of the following values: junior, senior

#### Response Body
```json
{
  "_id": "string",
  "name": "string",
  "email": "string",
  "level": "string"
}
```


## `(GET) /v1/developers`
This endpoint is used to get all developers.

#### Response Body
```json
[
  {
    "_id": "string",
    "name": "string",
    "email": "string",
    "level": "string"
  }
]
```


## `(GET) /v1/developers/:id`
This endpoint is used to get the details of a developer by ID.

#### Request Parameters
- id (string): The unique identifier of the developer to get.

#### Response Body
```json
{
  "_id": "string",
  "name": "string",
  "email": "string",
  "level": "string"
}
```


## `(POST) /v1/developers/filter`
This endpoint is used to filter developers by level.

#### Request Body
```json
{
  "level": "string"
}
```
- level must be one of the following values: junior, senior

#### Response Body
```json
[
  {
    "_id": "string",
    "name": "string",
    "email": "string",
    "level": "string"
  }
]
```


## `(PUT) /v1/developers/:id`
This endpoint is used to update the details of a developer by ID.

#### Request Body
```json
{
  "name": "string",
  "email": "string",
  "level": "string"
}
```

#### Response Body
```json
{
  "_id": "string",
  "name": "string",
  "email": "string",
  "level": "string"
}
```


## `(DELETE) /v1/developers/:id`
This endpoint is used to delete a developer by ID.

#### Response Body
```json
{
  "_id": "string",
  "name": "string",
  "email": "string",
  "level": "string"
}
```

#### 🍔 Happy Coding!!!

#### 🧑‍💻 Stay in touch

- Author - [Sazal Ahamed](https://sazal.vercel.app)

#### tada! 🎉
