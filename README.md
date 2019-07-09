# stack

A simple vagrant stack I use. It contains:

- Nginx
- PHP
- MySQL
- Redis

It will also:

- Generate certificate to run on https
- Install many common PHP modules
- Install PRedis
- Install Imagick
- Contains "Adminer" for MYSQL Viewer
- Sets up folders for symfony at `/symfony`

## Info

- 1 CPU
- 1024 MB RAM
- DB: tester / tester
- DB Viewer: http://mysql.local

The site runs on ip: `50.50.50.50`, this is hard coded into the Vagrantfile as a random IP will spawn multiple VM network adapters.

# Starting the stack

## Pre-Req

- Install vagrant: https://www.vagrantup.com/
- Install vagrant host manager plugin: https://github.com/devopsgroup-io/vagrant-hostmanager
- clone the repo
- cd into `stack`
- edit `Vagrantfile` and put in a custom url you want

## On computer boot

- run: `vagrant up`
- profit
