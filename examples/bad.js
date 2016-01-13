function example()
{ // on newline - we don't want this
	// doesn't conform to coding standards or style!
	if (bad == false) { // only double eq
            // bad indentation
		console.log("everything is awful!") // double quoted - we want single
	}

	var bad = false; // not hoisted
}

example() // and no trailing line on EOF
