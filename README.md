this is dnygandha readme file
to be done this week 
create api and login page
create new ec2 instance and document it 
also write commands and why those commands
should be idiot proof so anyone can do it.


commands: 
1- create a new dir :- mkdir actions-runner && cd actions-runner

2- Download the latest runner package :-curl -o actions-runner-linux-x64-2.303.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.303.0/actions-runner-linux-x64-2.303.0.tar.gz

3- Validate the hash :- echo "e4a9fb7269c1a156eb5d5369232d0cd62e06bec2fd2b321600e85ac914a9cc73  actions-runner-linux-x64-2.303.0.tar.gz" | shasum -a 256 -c

4- Extract the installer :- tar xzf ./actions-runner-linux-x64-2.303.0.tar.gz

5- Create the runner and start the configuration experience :- ./config.sh --url https://github.com/pratikk2609/dnyangandh-backend --token A2YSTJAIXDRCVEAKMUYUZZLEGJ3HQ

6- run sudo ./svc.sh install

7- run sudo ./svc.sh start

8- yaml file will be created and runner will start.

removed all hardcoding of localhost:5555 to relative path of nginx command - Again
