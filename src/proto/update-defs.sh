#!/bin/sh

ROOT_DIR=$(dirname $(dirname $(realpath "$0")))
echo "Root directory: $ROOT_DIR"

# Generate JavaScript/TypeScript code from the proto files
pbjs -t static-module -w es6 -o "$ROOT_DIR/client/lib/proto/global.js" "$ROOT_DIR/proto/global.proto"
pbts -o "$ROOT_DIR/client/lib/proto/global.d.ts" "$ROOT_DIR/client/lib/proto/global.js"

# Generate Go code from the proto files
protoc --proto_path="$ROOT_DIR/proto" \
    --go_out="$ROOT_DIR/server/proto" \
    --go_opt=paths=source_relative \
    "$ROOT_DIR/proto/shopping.proto" "$ROOT_DIR/proto/global.proto"