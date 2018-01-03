# README #

A simple JS page to test EME (Encrypted Media Extensions) with ClearKey DRM using MSE (Media Source Extensions).

# media-source-loader-simple.js #

This JavaScript file provides a simple MSE implementation, reads the segments of the media and appends them
in the appropriate SourceBuffer.

# encrypted-media-clearKey-handler.js #

This JavaScript file provides a simple clearKey EME implementation, checks the EME support, handles the "encrypted", "message" and
"keystatuseschange" events, and updates the CDM session with the right keys.
This implementation allows to play an encrypted media (video or audio or both).


The Media is created with Bento4, like that : 

mp4fragment --track audio audio-tracks.mp4  media_frag_audio.mp4

mp4fragment --track video audio-tracks.mp4  media_frag_video.mp4

mp4encrypt --method MPEG-CENC --key 1:c0c1c2c3c4c5c6c7c8c9cacbcccdcecf:0123456789abcdef --property 1:KID:d0d1d2d3d4d5d6d7d8d9dadbdcdddedf --global-option mpeg-cenc.eme-pssh:true media_frag_video.mp4 media_frag_video_cenc.mp4

mp4encrypt --method MPEG-CENC --key 2:a0a1a2a3a4a5a6a7a8a9aaabacadaeaf:0123456789abcdef --property 2:KID:b0b1b2b3b4b5b6b7b8b9babbbcbdbebf --global-option mpeg-cenc.eme-pssh:true media_frag_audio.mp4 media_frag_audio_cenc.mp4

python ~/workspace/Bento4/Source/Python/utils/mp4-dash.py --exec-dir /usr/bin -o media media_frag_video_cenc.mp4

python ~/workspace/Bento4/Source/Python/utils/mp4-dash.py --exec-dir /usr/bin -f -o media media_frag_audio_cenc.mp4

