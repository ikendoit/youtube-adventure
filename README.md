# Youtube Adventure, investigating youtube's algorithm for video encription

### Now we are taking some time off to learn a bit of web audio, which may help me reach my goal faster. 

## Mission: 

```
  Explore how Youtube encripts its videos 
  Explore how Youtube manages its webm clusters
  Investigate Youtube's Ciphers Algorithms, people say there are 3 operations: Swap, Slice, Reverse
  Find Way to generate audio from a youtube url (yes, we all know youtube-dl exists...)
  Find Way to manipulate audio on the fly in web browsers
```

## Findings: 

```
  - It seems the 3 operations ( slice, swap, reverse ) is obvious when we investigate the hex structures of .webm 
  - Youtube is using muxed streams for its packet transmission in the browser ( audio separate from video )
  - First packets in the network monitor has the headers, be careful not to lose them. 
  - OPUS, VP9 ( thanks Google ! ) 
	- The hex encription pattern has been the same for a month.
```

## Findings (less irrelevant): 
```
	0xAA (hex) is 170 (decimal), amazing. 
```

## Confusions: 
```
	- The hex encription pattern has ( 2 bytes => 1 bytes ), (swap), (replace). But what if it has (1 byte => 2 bytes ) ? Can I deduce how it should look like.
	- How to check for ending bytes, is the ending byte in the first packet or it exists in every packet ? ( or webm doesn't need ending packet at all now ?) 
```

## TODO: 

```
  1. Get as much video data as possible
  2. How to assemble different webm packets
  10. hex them, add to files
  20. Search for patterns in it's algorithm ( reverse engineer that *** )
  30. make a script to decipher those algorithms 
```

## Resources:

- https://www.tyrrrz.me/Blog/Reverse-engineering-YouTube

- https://www.webmproject.org/docs/container/

- https://www.quora.com/How-does-YouTube-make-videos-with-1080p-What-do-I-need-to-know-about-this ( answer of James McInnes )
