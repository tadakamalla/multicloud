#!/bin/bash
sudo yum install mysql-server
sudo systemctl start mysqld
sudo systemctl status mysqld
