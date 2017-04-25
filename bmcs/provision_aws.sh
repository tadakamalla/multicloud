#!/bin/sh
. /c/Users/artadaka/workspace/orchestration/$1.sh
/c/home/terraform_0.8.7_windows_386/terraform  plan -out=$1.plan /c/home/terraform_0.8.7_windows_386/aws/
/c/home/terraform_0.8.7_windows_386/terraform  apply $1.plan 

