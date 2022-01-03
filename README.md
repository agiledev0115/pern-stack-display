# :zap: PERN Stack Display

* PostgreSQL Express React Node (PERN) full-stack app, integrates React + Material UI frontend with Node-Express backend and PostgreSQL database.
* Create, Read, Update and Delete (CRUD) project data from SQL database
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/pern-stack-display?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/pern-stack-display?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/pern-stack-display?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/pern-stack-display?style=plastic)

## :page_facing_up: Table of contents

* [:zap: PERN Full Stack Display](#zap-pern-stack-display)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General Info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

### Backend

* PostgreSQL needs to be installed and running - I started it from my Windows 10 PostgreSQL 14 dropdown option 'SQL shell (psql)'
* Postgresql shell commands: `\l` list all databases. `\c database1` connect to database1. `\dt` inspect tables. `\q` to quit.

### Frontend

* Project list displayed in grid of cards with project edit and delete buttons. Clicking on a project links to a project detail page where title and description can be changed
* [Material UI sx prop](https://mui.com/system/the-sx-prop/) shortcuts used to define a custom style that has access to the theme.

## :camera: Screenshots

![Backend screenshot](./img/postgresql.png)
![Frontend screenshot](./img/projects.png)

## :signal_strength: Technologies - Backend

* [PostgreSQL v14](https://www.postgresql.org/)
* [PostgreSQL Installer for Windows](https://www.postgresqltutorial.com/install-postgresql/)
* [pg](https://www.npmjs.com/package/pg) PostgreSQL client for Node.js
* [Express.js v4](https://expressjs.com/) middleware
* [Node.js v12](https://nodejs.org/es/)
* [Nodemon v2](https://www.npmjs.com/package/nodemon) npm module so backend server will automatically restart after code changes

## :signal_strength: Technologies - Frontend

* [React v17](https://reactjs.org/) Javascript library
* [React Router DOM v6](https://www.npmjs.com/package/react-router-dom) bindings for React Router
* [React UI Library v5](https://mui.com/) component library
* [UI React Material icons](https://mui.com/components/material-icons/) used to make buttons more interesting

## :floppy_disk: Setup - Backend

* Install [PostgreSQL](https://www.postgresql.org/) & run it (requires the password you created during installation)
* Add postgresql database credentials to .env file
* `npm run dev` to run backend with automatic restart if you change something

## :floppy_disk: Setup - Frontend

* `npm i` to install dependencies
* `cd client` to change to Client directory
* `npm run dev` runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* `npm run build` Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## :computer: Code Examples - Backend

* tba

```

```

## :computer: Code Examples - Frontend

* tba

```

```

## :cool: Features

* Full CRUD capability with data stored in a Postgres database

## :clipboard: Status & To-Do List

* Status: Working
* To-Do: change to grid of cards, add eslint?, add date to project record, add about page, contact page to nav bar.

## :clap: Inspiration

* [PostgreSQL Quick Command List](http://jcsites.juniata.edu/faculty/rhodes/dbms/pgsql.htm)
* [GeekforGeeks: When to use next() and return next() in Node.js ?](https://www.geeksforgeeks.org/when-to-use-next-and-return-next-in-node-js/)
* [JavaScript in Visual Studio Code](https://code.visualstudio.com/Docs/languages/javascript#_auto-imports) To enable auto imports, set "javascript.suggest.autoImports" in settings to true.
* [Sentry: Warning: Each child in a list should have a unique "key" prop](https://sentry.io/answers/unique-key-prop/)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com