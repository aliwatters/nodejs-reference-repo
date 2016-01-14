#!/bin/bash

cp ./bin/prepare-commit-msg.hook .git/hooks/prepare-commit-msg
chmod 755 .git/hooks/pre-push

cp ./bin/prepush.hook .git/hooks/pre-push
chmod 755 .git/hooks/pre-push

