'use strict';
// passes rules both jshint and jscs

function good() {
  // correctly indented - 2 spaces
  var good = true; // hoisted
  if (good === true) { // triple eq
    console.log('everything is awesome!'); // single quoted
  }
}

good();
