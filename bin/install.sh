#!/bin/bash

cp ./bin/prepush.hook .git/hooks/pre-push
chmod 755 .git/hooks/pre-push
