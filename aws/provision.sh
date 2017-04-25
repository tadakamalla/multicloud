#!/bin/sh
. /opt/orchestration/$1.sh
terraform  plan -out=$1.plan /opt/orchestration/aws/myorchestration/
terraform  apply $1.plan 

