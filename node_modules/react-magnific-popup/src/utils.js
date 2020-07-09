export function extractProps(props, exclude = []) {
	let extractedProps = {}, 
		counter=0,
		propNames = Object.keys(props),
		excludeProp=null;

	for (; counter < propNames.length; counter++) {
		excludeProp = (Array.isArray(exclude) ? exclude.includes(propNames[counter]) : exclude === propNames[counter]);

		if (!excludeProp) {
			extractedProps[propNames[counter]] = props[propNames[counter]];
		}
	}

	return extractedProps;
}