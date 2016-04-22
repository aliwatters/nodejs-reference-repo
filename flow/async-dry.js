'use strict';

// clean version

var async = require('async');

function randomDelay() {
  return Math.floor(Math.random() * 2000) + 1000;
}

function genStep(label, cb) {
  return function(cb) {
    var delay = randomDelay();
    setTimeout(function() {
      console.log('Executing ' + label + ' ' + delay + 'ms');
      cb(null, 'completed ' + label);
    }, delay);
  };
}

// Step 1 -> Step 2 -> in parallel A B C -> Step 3

async.series({
    step1: genStep('step 1'),
    step2: genStep('step 2'),
    tasks: function(next) {
      async.parallel([genStep('task A'), genStep('task B'), genStep('task C')], next);
    },
    step3: genStep('step 3')
  },
  function done(err, res) {
    console.log('Completed', err, res);
  }
);
