var express = require('express');
var app = express();
var fs = require("fs");
var path = require('path');
var http = require('http');


app.use('/', express.static(__dirname + '/public'));

app.get('/orchestration/testdb1/log', function (req, res) {
   fs.readFile( __dirname + "/" + "testdb1.log", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})
app.get('/orchestration/testdb2/log', function (req, res) {
   fs.readFile( __dirname + "/" + "testdb2.log", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})
app.get('/orchestration/testdb3/log', function (req, res) {
   fs.readFile( __dirname + "/" + "testdb3.log", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/orchestration/testdb1/details', function (req, res) {
	
	   	fs.readFile( __dirname + "/" + "testdb1.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})
app.get('/orchestration/testdb2/details', function (req, res) {
		
	fs.readFile( __dirname + "/" + "testdb2.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})
app.get('/orchestration/testdb3/details', function (req, res) {
		
	fs.readFile( __dirname + "/" + "testdb3.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})



app.get('/orchestration/testdb1/genenv', function (req, res) {
	
	var fs = require("fs");
	 var shell = require("shelljs");
	shell.rm("testdb1.sh");
	shell.rm('terraform.tfstate');
	var contents = fs.readFileSync("testdb1.json");
    var dbparams = JSON.parse(contents);
     fs.writeFile("testdb1.sh", "export TF_VAR_tenancy_ocid="+dbparams.tenancy_ocid+"\n"+
    		       "export TF_VAR_subnet_id="+dbparams.subnet_id+"\n"+ 
    		       "export TF_VAR_user_ocid="+dbparams.user_ocid+"\n"+
    		       "export TF_VAR_fingerprint="+dbparams.fingerprint+"\n"+
    		       "export TF_VAR_private_key_path="+dbparams.private_key_path+"\n"+
    		       "export TF_VAR_ssh_authorized_keys="+dbparams.ssh_authorized_keys+"\n"+
    		       "export TF_VAR_private_key_password="+dbparams.private_key_password+"\n"+
    		       "export TF_VAR_ssh_authorized_private_keys="+dbparams.ssh_authorized_private_keys+"\n"+
    		       "export TF_VAR_compartment_ocid="+dbparams.compartment_ocid+"\n"+
    		       "export TF_VAR_vm_image_ocid="+dbparams.vm_image_ocid+"\n"+
    		       "export TF_VAR_shape="+dbparams.shape+"\n"+
    		       "export TF_VAR_label="+dbparams.label+"\n"+
    		       "export TF_VAR_availability_domain="+dbparams.availability_domain+"\n", function(err) {
     if(err) {
        return console.log(err);
    }
     
    console.log("File saved successfully!");
   
    
    fs.readFile( __dirname + "/" + "testdb1.sh", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
     
    });
});
    
    
	
  
})
app.get('/orchestration/testdb2/genenv', function (req, res) {
	
	var fs = require("fs");
	 var shell = require("shelljs");
	shell.rm("testdb2.sh");
	shell.rm('terraform.tfstate');
	var contents = fs.readFileSync("testdb2.json");
    var dbparams = JSON.parse(contents);
     fs.writeFile("testdb2.sh", "export TF_VAR_subscription_id="+dbparams.subscription_id+"\n"+
    		       "export TF_VAR_client_id="+dbparams.client_id+"\n"+ 
    		       "export TF_VAR_client_secret="+dbparams.client_secret+"\n"+
    		       "export TF_VAR_tenant_id="+dbparams.tenant_id+"\n"+    		       
    		       "export TF_VAR_location="+dbparams.location+"\n"+    		       
    		       "export TF_VAR_hostname="+dbparams.hostname+"\n", function(err) {
     if(err) {
        return console.log(err);
    }
     
    console.log("File saved successfully!");

    fs.readFile( __dirname + "/" + "testdb2.sh", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
     
    });
});
    
    
	
  
})

app.get('/orchestration/testdb3/genenv', function (req, res) {
	
	var fs = require("fs");
	 var shell = require("shelljs");
	shell.rm("testdb3.sh");
	shell.rm('terraform.tfstate');
	var contents = fs.readFileSync("testdb3.json");
    var dbparams = JSON.parse(contents);
     fs.writeFile("testdb3.sh", "export TF_VAR_access_key="+dbparams.access_key+"\n"+
    		       "export TF_VAR_secret_key="+dbparams.secret_key+"\n"+ 
    		       "export TF_VAR_ami="+dbparams.ami+"\n"+
    		       "export TF_VAR_region="+dbparams.region+"\n"+
    		       "export TF_VAR_key_name="+dbparams.key_name+"\n"+
    		       "export TF_VAR_instance_type="+dbparams.instance_type+"\n"+
    		       "export TF_VAR_name="+dbparams.name+"\n", function(err) {
     if(err) {
        return console.log(err);
    }
     
    console.log("File saved successfully!");

    fs.readFile( __dirname + "/" + "testdb3.sh", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
     
    });
});
    
    
	
  
})


app.get('/orchestration/testdb3/provision', function (req, res) {
	var shell = require("shelljs");
	shell.rm('terraform.tfstate');
	shell.rm('testdb3.plan');
   shell.exec("bash /opt/orchestration/aws/provision.sh testdb3 >> testdb3.log");
   shell.exec("cp testdb3.png public/");
	fs.readFile( __dirname + "/" + "testdb3.log", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/orchestration/testdb2/provision', function (req, res) {
	var shell = require("shelljs");
	shell.rm('terraform.tfstate');
	shell.rm('testdb2.plan');
   shell.exec("bash /opt/orchestration/azure/provision.sh testdb2 >> testdb2.log");
   shell.exec("cp testdb2.png public/");
	fs.readFile( __dirname + "/" + "testdb2.log", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/orchestration/testdb1/provision', function (req, res) {
	var shell = require("shelljs");
	shell.rm('terraform.tfstate');
	shell.rm('testdb2.plan');
   shell.exec("bash /opt/orchestration/bmcs/provision.sh testdb1 >> testdb1.log");
   shell.exec("cp testdb1.png public/");
	fs.readFile( __dirname + "/" + "testdb1.log", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})



var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Multi_Cloud Orchestration Engine is listening at http://%s:%s", host, port)

})
