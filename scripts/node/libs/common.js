//inject $buffer2 into $buffer 1 at index $id of $buffer1
const bufferSplice = (buff1, buff2, id) => {
	let buff1A = buff1.slice(0, id); 
	let buff1B = buff1.slice(id,buff1.length);
	buff1A = Buffer.concat([buff1A,buff2]); 
	return Buffer.concat([buff1A,buff1B]);;
}

//delete from start to end in a buffer
const bufferDelete = (buff, start, end) => {
	let buff1 = buff.slice(0,start);
	let buff2 = buff.slice(end, buff.length);
	return Buffer.concat([buff1,buff2]);
}

module.exports= {
	bufferSplice, 
	bufferDelete
}
