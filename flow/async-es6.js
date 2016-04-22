// introducing lambda's

var async = require('async');

var randomDelay = () => {
  return Math.floor(Math.random() * 200) + 100;
}

var genStep = (label, cb) => {
  return (cb) => {
    var delay = randomDelay();
    setTimeout(() => {
      console.log('Executing ' + label + ' ' + delay + 'ms');
      cb(null, 'completed ' + label);
    }, delay);
  }
}

// Step 1 -> Step 2 -> in parallel A B C -> Step 3

async.series({
    step1: genStep('step 1'),
    step2: genStep('step 2'),
    tasks: (next) => {
      async.parallel([genStep('task A'), genStep('task B'), genStep('task C')], next);
    },
    step3: genStep('step 3')
  },
  (err, res) => {
    console.log('Completed', err, res);
  }
);
