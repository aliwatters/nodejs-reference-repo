var async = require('async');

function randomDelay() {
  return Math.floor(Math.random() * 2000) + 1000;
}


function step1(cb) {
  setTimeout(function() {
    console.log('Executing step 1');
    cb(null, 'completed step 1');
  }, randomDelay());
}

function step2(cb) {
  setTimeout(function() {
    console.log('Executing step 2');
    cb(null, 'completed step 2');
  }, randomDelay());
}

function step3(cb) {
  setTimeout(function() {
    console.log('Executing step 3');
    cb(null, 'completed step 3');
  }, randomDelay());
}

function taskA(cb) {
  setTimeout(function() {
    console.log('Executing task A');
    cb(null, 'completed task A');
  }, randomDelay());
}

function taskB(cb) {
  setTimeout(function() {
    console.log('Executing task B');
    cb(null, 'completed task B');
  }, randomDelay());
}

function taskC(cb) {
  setTimeout(function() {
    console.log('Executing task C');
    cb(null, 'completed task C');
  }, randomDelay());
}

// Step 1 -> Step 2 -> in parallel A B C -> Step 3

async.series({
    step1: step1,
    step2: step2,
    tasks: function(next) {
      async.parallel([taskA, taskB, taskC], next);
    },
    step3: step3
  },
  function done(err, res) {
    console.log('Completed', err, res);
  }
);
