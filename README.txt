express-node-demo README
========================


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



- 	create a dir "express-node-demo" and copy the follow files to that 
	directory (previously pulled from git to PC)

	vagrant@express:~$ mkdir express-node-demo
	vagrant@express:~$ cd express-node-demo/
	vagrant@express:~/express-node-demo$ cp /vagrant/app.js .

-	INSTALL node

	vagrant@express:~/express-node-demo$ sudo apt-get update

	curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

	sudo apt-get install -y nodejs

	vagrant@express:~/express-node-demo$ sudo apt-get install -y nodejs
	Reading package lists... Done
	Building dependency tree
	Reading state information... Done
	The following NEW packages will be installed:
  	nodejs
	0 upgraded, 1 newly installed, 0 to remove and 140 not upgraded.
	Need to get 9,891 kB of archives.
	After this operation, 50.2 MB of additional disk space will be used.
	Fetched 9,891 kB in 2s (3,624 kB/s)
	Selecting previously unselected package nodejs.
	(Reading database ... 62985 files and directories currently installed.)
	Preparing to unpack .../nodejs_6.9.4-1nodesource1~trusty1_amd64.deb ...
	Unpacking nodejs (6.9.4-1nodesource1~trusty1) ...
	Processing triggers for man-db (2.6.7.1-1ubuntu1) ...
	Setting up nodejs (6.9.4-1nodesource1~trusty1) ...
	vagrant@express:~/express-node-demo$
	vagrant@express:~/express-node-demo$
	vagrant@express:~/express-node-demo$ node --version
	v6.9.4
	vagrant@express:~/express-node-demo$


-	INSTALL express



vagrant@express:~/express_demo$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (express_demo)
version: (1.0.0)
description: Simple express demo
entry point: (index.js) app.js
test command: Hello World !! !!!
git repository:
keywords:
author:
license: (ISC)
About to write to /home/vagrant/express_demo/package.json:

{
  "name": "express_demo",
  "version": "1.0.0",
  "description": "Simple express demo",
  "main": "app.js",
  "scripts": {
    "test": "Hello World !! !!!"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes)
vagrant@express:~/express_demo$


vagrant@express:~/express-node-demo$ npm install express --save
express-node-demo@1.0.0 /home/vagrant/express-node-demo
������������������ express@4.14.0
  ������������������ accepts@1.3.3
  ������ ������������������ mime-types@2.1.13
  ������ ������ ������������������ mime-db@1.25.0
  ������ ������������������ negotiator@0.6.1
  ������������������ array-flatten@1.1.1
  ������������������ content-disposition@0.5.1
  ������������������ content-type@1.0.2
  ������������������ cookie@0.3.1
  ������������������ cookie-signature@1.0.6
  ������������������ debug@2.2.0
  ������ ������������������ ms@0.7.1
  ������������������ depd@1.1.0
  ������������������ encodeurl@1.0.1
  ������������������ escape-html@1.0.3
  ������������������ etag@1.7.0
  ������������������ finalhandler@0.5.0
  ������ ������������������ statuses@1.3.1
  ������ ������������������ unpipe@1.0.0
  ������������������ fresh@0.3.0
  ������������������ merge-descriptors@1.0.1
  ������������������ methods@1.1.2
  ������������������ on-finished@2.3.0
  ������ ������������������ ee-first@1.1.1
  ������������������ parseurl@1.3.1
  ������������������ path-to-regexp@0.1.7
  ������������������ proxy-addr@1.1.2
  ������ ������������������ forwarded@0.1.0
  ������ ������������������ ipaddr.js@1.1.1
  ������������������ qs@6.2.0
  ������������������ range-parser@1.2.0
  ������������������ send@0.14.1
  ������ ������������������ destroy@1.0.4
  ������ ������������������ http-errors@1.5.1
  ������ ������ ������������������ inherits@2.0.3
  ������ ������ ������������������ setprototypeof@1.0.2
  ������ ������������������ mime@1.3.4
  ������������������ serve-static@1.11.1
  ������������������ type-is@1.6.14
  ������ ������������������ media-typer@0.3.0
  ������������������ utils-merge@1.0.0
  ������������������ vary@1.1.0

npm WARN express-node-demo@1.0.0 No repository field.
vagrant@express:~/express-node-demo$





-	RUN the app

	
	vagrant@express:~/express-node-demo$ node app.js&
	Example app listening on http://192.168.0.244:3000


-	CHECK app is running

	vagrant@express:~/express-node-demo$ curl 192.168.0.244:3000
	Hello World!!!!!!!!!!!!!!!!!!vagrant@express:~/express-node-demo$
	vagrant@express:~/express-node-demo$




Additional Notes
----------------


express:	See: http://expressjs.com/en/4x/api.html

node:		See:
		https://nodejs.org/dist/latest-v6.x/docs/api/documentation.html

