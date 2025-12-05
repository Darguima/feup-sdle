#!/bin/sh

ROOT_DIR=$(dirname "$0")/..

# Generate JavaScript code from the proto files
pbjs -t static-module -w commonjs -o "$ROOT_DIR/client/lib/proto/shopping.js" "$ROOT_DIR/proto/shopping.proto"
pbjs -t static-module -w commonjs -o "$ROOT_DIR/client/lib/proto/global.js" "$ROOT_DIR/proto/global.proto"

# Generate TypeScript definitions from the generated JavaScript code
pbts -o "$ROOT_DIR/client/lib/proto/shopping.d.ts" "$ROOT_DIR/client/lib/proto/shopping.js"
pbts -o "$ROOT_DIR/client/lib/proto/global.d.ts" "$ROOT_DIR/client/lib/proto/global.js"