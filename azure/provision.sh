#!/bin/sh
. /c/Users/artadaka/workspace/orchestration/$1.sh
/c/home/azure/terraform  plan -out=$1.plan /c/home/azure/myorchestration/
#/c/home/azure/terraform apply $1.plan


