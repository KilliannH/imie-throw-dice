imie-throw-dice

Object : Tests on angularjs

---- Theme --------------------

I want to make an app that throws dices for RPG games.

I can choose the number of faces and the number of dices.

---- Instructions -------------

Install an LTS version of nodejs
using nvm

terminal:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
exit
relaunch a bash, then run :
nvm install 10.13.0 (latest version of node lts is 10.13.0)

ensure npm is installed by running : npm -v

install bower & nodemon globally :
npm install -g nodemon bower

(bower is a dependency manager for front-end, nodemon is for ease the launch of our node server,
 to simplify, it runs 'npm start' with a watcher on the repository so you don't need to stop and re run the command).

for the backend part, install PostgreSQL
sudo apt update
sudo apt upgrade
sudo apt install postgresql postgresql-contrib

check postgres has been installed successfully :
sudo -i -u postgres
psql
-> you might be on the postgres cli

postgres=# 

enter : \password

you'll be prompt to change the postgres password.

------- The Python3 part ------

We will use python3 to create / drop the database with the tables needed for the app.

make sure you have python installed in your machine by running : python3

a python3 shell will run with the version installed.
If you have 'python3 command not found', it means that python3 is not installed in your machine.

**** iN CASE YOU DON'T HAVE PYTHON3 INSTALLED ****
run those commands to install python3 :

sudo apt get update

sudo apt-get upgrade python3

sudo apt-get install python3

sudo apt-get install build-essential libssl-dev libffi-dev python-dev

sudo apt install python3-pip

sudo apt install -y python3-venv

We will use psycopg2 to create our database, and it needs some linux dependencies :

sudo apt-get install python-psycopg2
sudo apt-get install libpq-dev

------- finally ------
All done! :)

Go to the repository, then run :
npm install

open a terminal and go to the repository
then go to ./psqlScript_v3

create a python3 virtualenv by running :

python3 -m venv myenv (myenv is the name of your python3 venv, choose any name you want)

activate your env by running :

source myenv/bin/activate

then you need to install the required python dependancies :
(you will notice your venv is activated by the (myenv) before your username on the terminal prompt)

run:
pip3 install wheel
pip3 install psycopg2

if you have a 'pip3 command not found' error, just run : sudo apt install python3-pip


---- Tests -------------
you just have to run :
npm test
you'll be prompt to set a number of dice & faces.
NB: a timeout of 15s has been set for you to fill those fields.
If you wait until this timeout, the test will set your throw to the default one : one dice with 6 faces.
To setup the timeout, see more : test cmd in your package.json

---- Usage -------------
if you run the app for the first time, you need to create your database :
(assuming your postgres password, roleName is postgres, and your postgres host is localhost)

python3 main.py imie-throw-dice-db, every time you want to wipe your data, re-run this command.

when the script is finished, you can run nodemon

go to your repository, run : nodemon

the server will be running locally on localhost:3000


