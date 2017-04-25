#!/bin/bash
sudo firewall-offline-cmd  --zone=public --add-service http
sudo firewall-cmd --reload
