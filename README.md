### Express server starter

Boilerplate to start to create a backend application with NodeJS and Express.

### Requeriments

Install [NodejS]

### Configuration

First you must clone this repository:

```bash
git clone https://github.com/marcnava13/express-server-starter.git [name_folder]
```

Enter the folder [name_folder] and execute this command about your terminal to install the necessary dependencies and create and configure .env file

```bash
cd [name_folder]
npm install
cp env-sample .env
```

When the installation is finished, you can start the application and the project will open in your favorite browser:

```bash
npm start
```

Try your api with the follow urls. You can use [Curl] o [Postman].

```
curl -v --cookie "[NAME_COOKIE]=[COOKIE_JWT]" -X GET http://localhost:[::PORT]/api/checkLogin
```

```
curl -v --cookie "[NAME_COOKIE]=[COOKIE_JWT]" -X POST http://localhost:[::PORT]/api/login \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'email=example%40example.com&password=123456'
```

```
curl -v --cookie "[NAME_COOKIE]=[COOKIE_JWT]" -X POST http://localhost:[::PORT]/api/logout
```

Other scripts available:

```bash
  "scripts": {
    "start": "Run project to develpoment",
    "build": "Compile project, this project will be created in the 'build' folder",
    "clean": "Remove folder the build",
    "prod": "Run server compiled"
  },
```

[NodejS]:   https://nodejs.org/en/
[Postman]:   https://www.getpostman.com/
[Curl]:   https://curl.haxx.se/