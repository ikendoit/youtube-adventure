#!/bin/bash

videoID='Xjv2-F6Quls'

# 0
curl https://www.youtube.com/get_video_info?video_id=$videoID -o get_video_info

# 1
grep -o "adaptive_fmts.*\&" get_video_info > adaptive_stream

# 1.1
sed -i "s/%25/%/g" adaptive_stream

# 1.2
python -c "import sys, urllib as ul; \
    print ul.unquote_plus(\"`cat adaptive_stream`\")" > adaptive_stream
# 1.3 
sed -i "s/&url/&\nurl/g" adaptive_stream


# 1.3 
curl https://www.youtube.com/embed/$videoID -o get_embed_info

grep -o "yts/.*base.js" get_embed_info > player_info 
grep -Eo "\"sts\"\:[0-9]+\," get_embed_info > sts

curl https://youtube.com/`cat player_info` > player_code

