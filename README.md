#Youtube Adventure, investigating youtube's algorithm for video encription

##Mission: 

```
  Explore how Youtube encripts its videos 
  Explore how Youtube manages its webm clusters
  Investigate Youtube's Ciphers Algorithms, people say there are 3 operations: Swap, Slice, Reverse
  Find Way to generate audio from a youtube url (yes, we all know youtube-dl exists...)
  Find Way to manipulate audio on the fly in web browsers
```

##Findings: 

```
  It seems the 3 operations ( slice, swap, reverse ) is obvious when we investigate the hex structures of .webm 
  Youtube is using muxed streams for its packet transmission in the browser ( audio separate from video )
  First packets in the network monitor has the headers, be careful not to lose them. 
  OPUS, VP9 ( thanks Google ! ) 
```

##TODO: 

```
  1. get as much video data as possible ( a web scraper )
  2. How to assemble different webm packets
  10. hex them, add to files
  20. Search for patterns in it's algorithm ( reverse engineer that *** )
  30. make a script to decipher those algorithms 
```

##Resources:

- https://www.tyrrrz.me/Blog/Reverse-engineering-YouTube

- https://www.webmproject.org/docs/container/
