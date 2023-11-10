#!/bin/bash

# 获取当前脚本的绝对路径
script_path=$(readlink -f "$0")

# 获取当前脚本所在的目录
script_dir=$(dirname "$script_path")

# 跳转到当前脚本所在的目录
cd "${script_dir}/.." || exit 1

node_cmd=$(which node)
echo "${node_cmd}"
if [[ -z "${node_cmd}" ]]; then
  echo "node is not installed in your device!~" && exit 1
fi

${node_cmd} ./scripts/excel2csv.js && ${node_cmd} ./scripts/csv2proto.js
sh ./scripts/_do_generate_proto.sh