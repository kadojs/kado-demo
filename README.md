# Kado Demo

This repository is a quick sample of running raw Kado core. It can
be used as a template to quickly scale up new applications and skip
a couple steps that arent covered by traditional generators.

To use this repository the following steps are needed.

Environment: Node.JS 8+, MySQL 5.7
1) Clone the repository to a location locally.
2) From the repository folder execute `npm install`
3) Open and edit `app.js` to correct the database configuration
to match your local environment. If you would like to skip opening
any files then to run this demo considering you have root access to
the MySQL instance, (Please use a better method of authenticating MySQL in
production!) execute the following query: `CREATE DATABASE kadodemo;
GRANT ALL ON kadodemo.* TO 'kadodemo'@'localhost' IDENTIFIED BY 'kadodemo';
FLUSH PRIVILEGES;`
4) Initialize your database and install sample content by executing
`node app kado insertsamples`
5) Start your application and test it out by executing `npm start`

In order to access Kado it brings 2 ports alive by default.

Admin Panel: **http://localhost:3000**

Default Administrator
* Email: sample@kado.org
* Password: kado

Main Panel: **http://localhost:3001**

To find out more check out the documentation at https://kado.org

Thanks for trying us out!
