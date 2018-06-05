---
title: Deploy Pool² for Development
slug: deployment
---

# Install Docker

The Pool² implements its microservice architecture over [docker](https://www.docker.com/) that can easy setup on the most os-systems. Guides can be found in the [docker documentation](https://docs.docker.com/install/). You need to install the docker-pc package. Don't worry about stage and edge version, it works fine with both. On the staging server we use debian as operating system. If you want deploy the Pool² as develop system it makes sens to setup a virtualmachine via Virtualbox or VmWare. There are a lot of guides online they can help you to setup a vm. Notice that the setup-scripts a writen for bash on a linux system.

If the vm is setup and docker-ce is installed you need to start the docker service `sudo systemctl start docker.service`. Next the user need access to docker.service. For Ubuntu
```
	sudo groupadd docker
	sudo useradd pool (you can use every user you want, this create a new one named pool)
	sudo usermod -aG docker pool (change the user pool to your own)
```

# Startup and controll the Pool² scripts

For setup the Pool² itself, you can use the [pool2-deployment-scripts](https://github.com/Viva-con-Agua/pool2-deployment-scripts) that can be easy downloades over [github](). In the case of develop, you need the develop branch. Please notice that the scripts creates a folder in the upper directory if you dont use the docker-group and start the script with `sudo` this folder can only access by root. On staging, we create a folder Pool and copy the reposetory directly in this folder. On linux you can do this with:
```
	mkdir ~/Pool
	cd ~/Pool
	git clone -b develop https://github.com/Viva-con-Agua/pool2-deployment-scripts.git
``` 
The folder `Pool` contains the `pool2-deployment-scripts` folder in which everything weights setup scripts are located. There you can find the `pool.sh` which works as controll scripts. At startup

1. You can start the pool in dev mode with `./pool.sh dev setup`
2. You can delete the pool with `clean setup`
3. You can full delete the pool with `./pool.sh cleanfull setup`
 
*Please notice that the docker service need root access except the user is not in the docker-group*

After startup, the Pool² should be available at http://localhost.

# Setup your own Microservice

If the Pool² is correct running, the Nginx docker is listing at localhost:8080. Over Browser you can access the content via `http://localhost/sozmed`. Every docker can be access over an IP in the subnet pool-network. You can find this IPs with `docker network inspect pool-network`.  

# Setup more docker

In the case you need a database or stuff like that it can be easy deployed as docker in pool-network. Simply add the --net parameter after the run command. For example: 
```
	docker run --name ms-mariadb --net pool-network -d maria
```
 
This will setup a mariadb with a pool-network IP, the subnet is defined over the IP-Space 172.2.0.0/16. The `-d` parameter starts the docker as daemon in the background. You can access to it over `docker logs ms-mariadb` to read the logs and also with `docker exec -it ms-mariadb bash` if you need a bash access to the docker. 
You can also setup your docker with a static IP or forward ports to the localhost. For example:

```
	docker run --net pool-network --ip 172.2.30.1 -p 4000:3306 -d maria

```
The database can now be access over the ip 172.2.30.1:3306 or over localhost:4000. The `-p` parameter link the localhost port 4000 to the docker port 3306
