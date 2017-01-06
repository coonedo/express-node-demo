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
