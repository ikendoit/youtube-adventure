import struct
import binascii

codes = {
    "0xc30x9f": '\xdf',
    "0xc2": '',
    "0xc30xb2": '\xf2',
    "0xc30xb3": '\xf3',
    "0xc30xb7": '\xf7',
}

# run at root dir
with open('vid2/vid-1.webm','rb') as f: 
    text = f.read()
    bteArray = bytearray(text)
    filteredText = []
    for i in range(0, len(bteArray)-1):

        byte = hex(bteArray[i])
        byteCombi = byte+hex(bteArray[i+1])

        #if byte in codes :
        #    filteredText = filteredText+codes[byte].replace('0x','\\x')
        #elif byteCombi in codes :
        #    filteredText = filteredText+codes[byteCombi].replace('0x','\\x')
        #else:
        #    filteredText = filteredText+byte.replace('0x','\\x')

        if byte in codes :
            filteredText.append(codes[byte])
        elif byteCombi in codes :
            filteredText.append(codes[byteCombi])
        else:
            filteredText.append(byte)

    filteredHex = bytes(filteredText)
    with open('temp-test.webm', 'wb') as g: 
        g.write(filteredHex)
