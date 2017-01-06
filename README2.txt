express-node-demo ["dockerise"] README
========================

Same demo as per README.txt ..except, using docker. 


Created by: Donal Cooney

Note: 	This demo is a very basic introduction to the topic named above created 
	purely as a tutorial for myself. Absolutely no gaurantees whatsoever 
	wrt these instructions and/or software.


express-node-demo Summary:
--------------------------

1. 	Environment (Assumed installed/created already): express-node-demo 
	runs on Windows PC using Oracle VirtualBox managed by Vagrant. 
	Essentially Unbuntu running virtualised on Windows PC.
2. 	Creates/runs a small node server using express



Instructions:
-------------

-	START DEMO
- 	Windoze: Create a directory 'express_project'

- 	Windoze: From dir 'express_project', create a file 'Vagrantfile' with 
	the following contents (ref: https://www.vagrantup.com/docs/)



	Vagrant.configure(2) do |config|
  	  config.vm.define "express" do |express|
    	    express.vm.box = "ubuntu/trusty64"
    	    express.vm.network "private_network", ip: "192.168.0.244"
    	    express.vm.hostname = "express.demo.com"
    	    express.vm.provider "virtualbox" do |vb|
      	      vb.memory = 2048
      	      vb.cpus = 2
    	    end
  	  end
	end



OR

-- Clone the following repo from my github

	https://github.com/coonedo/express-node-demo


- 	Windoze: From dir 'express_project', run the following command: 
	'vagrant up'
	C:\Users\coonedo\express_project>vagrant up

- 	Windoze: From dir 'express_project' check the status of your vm:
	C:\Users\coonedo\express_project>vagrant status
	Current machine states:

	express                    running (virtualbox)

	The VM is running. To stop this VM, you can run `vagrant halt` to
	shut it down forcefully, or you can run `vagrant suspend` to simply
	suspend the virtual machine. In either case, to restart it again,
	simply run `vagrant up`.

- 	Windoze: From dir 'express_project', ssh to the express vm
	C:\Users\coonedo\express_project>vagrant ssh express
	(note: you will need ssh installed on your windoze box. 
	I have git installed, which includeds ssh. 
	Also, vagrant up will generate a keypair + insert the public key 
	within the guest)

- 	** Next cmds are from the vm (linux) **





-	INSTALL latest doecker

	UPDATE TO THE LATEST DOCKER

	Follow the instructions at: 
	https://docs.docker.com/engine/installation/linux/ubuntulinux/


	In summary:

        - Update package information, ensure that APT works with the https
        method, and that CA certificates are installed.

        $ sudo apt-get update

        $ sudo apt-get install apt-transport-https ca-certificates



        - Add the new GPG key.

        $ sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80
        --recv-keys 58118E89F3A912897C070ADBF76221572C52609D




        - Open the /etc/apt/sources.list.d/docker.list file or create
        Add: (For Ubuntu Trusty 14.04 (LTS) )
        deb https://apt.dockerproject.org/repo ubuntu-trusty main



        - Update your APT package index.
        $ sudo apt-get update

        - Install Docker.
        $ sudo apt-get install docker-engine


        - Check version:
        vagrant@docker:~$ sudo docker --versio
        Docker version 1.12.1, build 23cf638




-	CREATE A DOCKER GROUP, ADD YOUR USERID (AVOID HAVING TO SUDO)

	vagrant@docker:~$ sudo groupadd docker
	vagrant@docker:~$ sudo usermod -aG docker vagrant

	logout / login

	vagrant@docker:~$ docker ps
	Cannot connect to the Docker daemon. Is the docker daemon running on 
	this host?



	- stop / restart the docker daemon (when docker daemon starts, it
	will make the unix socker used by docker r/w by docker group)

	vagrant@docker:~$ sudo service docker stop
	docker stop/waiting

	vagrant@docker:~$ sudo service docker start
	docker start/running, process 21539






- 	create a dir "express-node-demo" and copy the follow files to that 
	directory (previously pulled from git to PC)

	vagrant@express:~$ mkdir express-node-demo
	vagrant@express:~$ cd express-node-demo/
	vagrant@express:~/express-node-demo$ cp /vagrant/app.js .
	vagrant@express:~/express-node-demo$ cp /vagrant/Dockerfile .
	vagrant@express:~/express-node-demo$ cp /vagrant/package.json .






-	RUN the app



	- Run the docker container

vagrant@express:~/express-node-demo$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED
SIZE
<none>              <none>              6a02a3ac47a7        3 minutes ago
663.3 MB
<none>              <none>              5dfc26eb2c6b        14 minutes ago
663.3 MB
node                7.4.0               7c4d899628d5        42 hours ago
660.3 MB

vagrant@express:~/express-node-demo$ docker run -p 8080:3000 -t 6a02a3ac47a7
Example app listening on http://:::3000







-	CHECK app is running

	vagrant@express:~/express-node-demo$ curl 192.168.0.244:8080
	Hello World!!!!!!!!!!!!!!!!!!vagrant@express:~/express-node-demo$
	vagrant@express:~/express-node-demo$





NOTE: Review docker networking. eg. app.js is listening on localhost (ie is
running in a container). Does not work when listening on 192.168.0.244 .. this
is a host address. Review port mapping.









Additional Notes
----------------


express:	See: http://expressjs.com/en/4x/api.html

node:		See:
		https://nodejs.org/dist/latest-v6.x/docs/api/documentation.html

