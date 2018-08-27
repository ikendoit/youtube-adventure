const fs = require("fs");
const pattern_1 = require('./patterns/pattern_1')
const { bufferSplice, bufferDelete } = require('./libs/common')

let hexOriginal = fs.readFileSync('vid2/vid-1.webm');

for (let i of hexOriginal) {
	if (i === 0xc3){
		console.log('found')
		break;
	}
	console.log(i)
}
