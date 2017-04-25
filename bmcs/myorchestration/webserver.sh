#!/bin/bash
sudo yum install -y httpd
sudo systemctl start httpd
sudo firewall-offline-cmd  --zone=public --add-service http
sudo firewall-cmd --reload
