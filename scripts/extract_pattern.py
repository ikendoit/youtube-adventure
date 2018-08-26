import struct
import binascii

with open('vid2/vid-1.webm','rb') as f: 
    text = f.read()
    bteArray = bytearray(text)
    for bte in bteArray[0:50]:
        print(hex(bte), end='  ')
    print()

    #for char in text:
    #    print(bytes([char]), end='')
        #decoded = struct.unpack('I', char)
        #print(decoded, end='')
    #hexContent = binascii.unhexlify(f.read())
    #print(hexContent)

