#!/bin/bash

for NUM in {1..25}; do
    mkdir -p "days/day_${NUM}"

    printf "# Day ${NUM}\n\n<https://adventofcode.com/2022/day/${NUM}>\n" >"days/day_${NUM}/README.md"

    echo "- [ ] [Day ${NUM}](days/day_${NUM})" >>README.md
done
