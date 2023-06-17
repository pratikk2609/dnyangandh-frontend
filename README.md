this is Dnyangandh readme file

commands for creating runner: 
1- create a new dir :- mkdir actions-runner && cd actions-runner

2- Download the latest runner package :-curl -o actions-runner-linux-x64-2.303.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.303.0/actions-runner-linux-x64-2.303.0.tar.gz

3- Validate the hash :- echo "e4a9fb7269c1a156eb5d5369232d0cd62e06bec2fd2b321600e85ac914a9cc73  actions-runner-linux-x64-2.303.0.tar.gz" | shasum -a 256 -c

4- Extract the installer :- tar xzf ./actions-runner-linux-x64-2.303.0.tar.gz

5- Create the runner and start the configuration experience :- ./config.sh --url https://github.com/pratikk2609/dnyangandh-backend --token A2YSTJAIXDRCVEAKMUYUZZLEGJ3HQ

After configuring runner:
-ls
-sudo ./svc.sh install
-sudo ./svc.sh start

-yaml file will be created and runner will start.

-After committing yaml file:
-sudo apt install nginx

-After nginx site comes up:
-ls
-cd _work
-ls
-cd folder of github
-ls
-cd build
-pwd
-cd /etc/nginx
-ls
-cd sites-available
-ls
-sudo rm default
-sudo nano default
-sudo service nginx restart
-sudo chmod +x

Code for default nginx file:

-server {
  listen 80 default_server;
  server_name _;

  # react app & front-end files
  location / {
   root __path__;
   try_files $uri /index.html;
  }

}

-Chmod + all path

