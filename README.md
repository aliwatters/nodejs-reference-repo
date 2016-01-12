# Nodejs Reference - a repo containing config for nodejs projects

Aim here is to automate as many of the linting and styling steps, and provide a good starting point for a nodejs based project.

NOTE: requires git > 1.8

Currently includes:

* gitignore - don't check in logs, node_modules, tempfiles and the like.
* editorconfig - www.editorconfig.org - use the editor of your choice and remain consistent.
* jshint - lint javascript files - don't put style rules here
* jscs - javascript code style - command line and plugins available - (-x to write output!)

NOTE: assumes ES5 - to update for ES6 (maybe a branch or another repo)
NOTE: jscs and jshint - need to be installed globally in order to run under npm

```
sudo npm i jscs --global
sudo npm i jshint --global

npm run lint
npm run jscs
```
 
TODO: adding git hook as a `pre-push` step - so that non-compliant code cannot be pushed without a `--no-verify` flag.
