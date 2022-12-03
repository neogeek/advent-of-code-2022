#!/bin/bash

while IFS= read -r line; do
    node --no-warnings --loader ts-node/esm "${line}"
done <<<"$(find days -name index.ts | sort -nr)"
