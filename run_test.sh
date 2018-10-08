#!/usr/bin/env bash

node scripts/node/run.js

ffmpeg -v error -i test-temp -f null -
