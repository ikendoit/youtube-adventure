/* 
	author: Ken Nguyen
*/
const fs = require("fs");
const pattern_1 = require('./patterns/pattern_1')
const { bufferSplice, bufferDelete } = require('./libs/common')

let hexOriginal = fs.readFileSync('vid2/vid-1.webm');

for (let i=0; i < hexOriginal.length-1; i++) {

	const curByte  		= hexOriginal[i]
	const nextByte 		= hexOriginal[i+1]
	let 	writeByte  	= curByte

	const exists_single = pattern_1['0x'+curByte.toString(16)]
	const exists_multi = pattern_1['0x'+curByte.toString(16)+'0x'+nextByte.toString(16)]

	if (exists_single){
		if (exists_single === 'none') {
			hexOriginal = bufferDelete(i, i+1)
		} else {
			hexOriginal = bufferDelete(i,i+1)
			hexOriginal = buffer.Splice(hexOriginal, new Buffer.from([exists_single]), i+1)
		}
	}

	if (exists_multi){
		if (exists_multi === 'none') {
			hexOriginal = bufferDelete(i, i+2)
		} else {
			hexOriginal = bufferDelete(i,i+2)
			hexOriginal = buffer.Splice(hexOriginal, new Buffer.from([exists_multi]), i+1)
		}
	}

}

fs.writeFile('test-temp', hexOriginal, "hex", function(err){
	console.log(err);
});
