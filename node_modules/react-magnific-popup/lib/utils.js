"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.extractProps = extractProps;

function extractProps(props) {
	var exclude = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	var extractedProps = {},
	    counter = 0,
	    propNames = Object.keys(props),
	    excludeProp = null;

	for (; counter < propNames.length; counter++) {
		excludeProp = Array.isArray(exclude) ? exclude.includes(propNames[counter]) : exclude === propNames[counter];

		if (!excludeProp) {
			extractedProps[propNames[counter]] = props[propNames[counter]];
		}
	}

	return extractedProps;
}