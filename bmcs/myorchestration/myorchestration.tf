variable "tenancy_ocid" {}
variable "user_ocid" {}
variable "fingerprint" {}
variable "private_key_path" {}
variable "private_key_password" {}
variable "ssh_authorized_keys" {}
variable "ssh_authorized_private_keys" {}
variable "compartment_ocid" {}
variable "vm_image_ocid"{}
variable "shape" {}
variable "availability_domain" {}
variable "subnet_id" {}
variable "label"{}


provider "baremetal" {
  tenancy_ocid = "${var.tenancy_ocid}"
    user_ocid = "${var.user_ocid}"
      fingerprint = "${var.fingerprint}"
       private_key_path= "${var.private_key_path}"
        private_key_password="${var.private_key_password}"
       
	}

	    resource "baremetal_core_instance" "dbinstance" {
	      availability_domain = "${var.availability_domain}"
	        compartment_id = "${var.compartment_ocid}"
		  display_name = "${var.label}"
		    image = "${var.vm_image_ocid}"
		      shape = "${var.shape}"
		        subnet_id = "${var.subnet_id}"
			  metadata {

			       ssh_authorized_keys="${file("${var.ssh_authorized_keys}")}"

			    
			      
			       }


				}

