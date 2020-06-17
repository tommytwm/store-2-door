# store-2-door
A final project for CPSC 304 - Introduction to Relational Databases, Summer 2020 T1. This project is a bare bones skeleton for a delivery/service app. In light of the COVID-19 pandemic, this app was designed to help people who are immunocompromised, disabled, or for other reasons - aren't able to go out to purchase essential items.

Database is hosted on Heroku via ClearDB addon with NodeJS & Express JS, and ReactJS functioning as our back-end and front-end stack respectively.

## Getting Started

### Dependencies
- [MYSQL Community Edition 8.x.xx](https://www.mysql.com/products/community/)
- NodeJS v12.xx.x
- NPM v6.xx.x

### Setting up
1. Clone the repository onto your desktop. You can do this by launching **Terminal** and entering `git clone https://github.com/tommytwm/store-2-door.git`
2. Launch terminal and make sure the root is at the repository. You can do this by entering `cd store-2-door` on Terminal.
3. Run the following script on your Terminal: `npm install`. It should install all node dependencies.

### How to run (API)
1. Run the app by entering `node app.js`. You should see some logs printed on your terminal.
2. Launch your local host in your browser of choice. For example, `http://localhost:3000/`

### How to run (Web-app)
1. Run the app by entering `npm run dev`. You should see some logs printed on your terminal.
2. Launch your local host in your browser of choice. For example, `http://localhost:3000/`. This is webpage of your app.

### Adding to DB manually:
We are using Heroku as our hosting service to store and manage our database via MYSQL. To manually connect and contribute to the database, connect to the MYSQL server (credentials can be found in the config file(s)): `mysql --host={HOSTNAME} --user={USERNAME} --password={PASSWORD} --reconnect {DB}`
You should now be able to enter SQL commands and contribute to the database.
