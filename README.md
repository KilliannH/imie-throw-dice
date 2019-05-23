imie-throw-dice

Object : Tests on nodejs

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

npm install -g bower

(bower is a dependency manager for front-end, nodemon is for ease the launch of our node server,
 to simplify, it runs 'npm start' with a watcher on the repository so you don't need to stop and re run the command).

------- finally ------
All done! :)

Go to the repository, then run :
npm install

run :
npm test

---- Tests -------------
you just have to run :
npm test
you'll be prompt to set a number of dice & faces. 
NB: you have A minute to fill the input, see : package.json test command to change it.
If you don't specify anything, the default throw is : 1 dice with six faces.

You can use the --sum option to see the sum directly


