#!/bin/bash

for NUM in {1..25}; do

    FORMATTED_NUM=$(printf %02d ${NUM})

    mkdir -p "days/day_${FORMATTED_NUM}"

    printf "# Day ${NUM}\n\n<https://adventofcode.com/2022/day/${NUM}>\n" >"days/day_${FORMATTED_NUM}/README.md"

    echo "- [ ] [Day ${NUM}](days/day_${FORMATTED_NUM})" >>README.md
done
