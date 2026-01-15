#!/bin/bash
cd /home/ec2-user/app
npm install
nohup npm start > app.log 2>&1 &
