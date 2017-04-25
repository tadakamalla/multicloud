#!/bin/sh
. /opt/orchestration/bmcs/$1.sh 
terraform  plan -out=$1.plan /opt/orchestration/bmcs/myorchestration/
terraform  apply $1.plan 

