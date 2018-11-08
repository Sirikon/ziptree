#!/bin/bash

set -e

node zip.js
node unzip.js
diff -r out expected-out
