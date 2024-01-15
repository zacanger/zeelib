#!/usr/bin/env bash
set -e

for d in lib docs; do
  if [ -d "$d" ]; then
    rm -r "$d/"
  fi
  mkdir -p "$d/"
done
