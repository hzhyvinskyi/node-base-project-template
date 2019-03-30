#!/usr/bin/env bash
set -ex

PATH="$PATH:$(npm bin)"
nodemon ./bin/www --trace-warnings
