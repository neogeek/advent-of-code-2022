#!/bin/bash

for NUM in {1..25}; do
    mkdir -p "days/day_${NUM}"

    echo "# Day ${NUM}" >"days/day_${NUM}/README.md"

    echo "- [ ] [Day ${NUM}](days/day_${NUM})" >>README.md
done
