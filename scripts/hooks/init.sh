#!/bin/sh

cd "$(dirname "$0")" || exit 1

cd ../../

root_path=$(pwd)

echo "root path -> ${root_path}"

cd .git/hooks || exit 2
ln -snvf ../../scripts/hooks/pre-commit pre-commit
ls -l pre-commit
