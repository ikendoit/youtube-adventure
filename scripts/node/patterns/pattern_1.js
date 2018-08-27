// patterns found in vid[1,2]/vid-1.webm
// based on the Matroska specifications to find irregularities
const pattern = {
	"0xc30x9f": 0xdf,
	"0xc2": null,
	"0xc30xb2": 0xf2,
	"0xc30xb3": 0xf3,
	"0xc30xb7": 0xf7,
}

module.exports = pattern
