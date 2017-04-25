#!/bin/bash
sudo yum  install -y httpd
sudo systemctl enable httpd
sudo systemctl start httpd.service
sudo firewall-cmd --permanent --zone=public --add-service http
sudo firewall-cmd --reload

