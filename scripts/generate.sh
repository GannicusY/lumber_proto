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

echo "#################### START #####################"

echo "###### 开始清空csv目录(specs/csv)... ######"
rm -rf ./specs/csv/*
echo "###### csv目录(specs/csv)已清空! ######"

echo "###### 开始清空excel输出目录(specs/output)... ######"
rm -rf ./specs/output/*
echo "###### excel输出目录(specs/output)已清空! ######"

echo "###### 开始拆分客户端服务器excel(输出到specs/output)... ######"
${node_cmd} ./scripts/excel_split.js
echo "###### 拆分客户端服务器excel已完成! ######"

echo "###### 开始生成趣牵手服务端excel(输出到specs/output/qqs_server)... ######"
${node_cmd} ./scripts/qqs_excel_generate.js
echo "###### 已生成趣牵手服务端excel! ######"

echo "###### 开始生成csv(输出到specs/csv)... ######"
${node_cmd} ./scripts/excel2csv.js
echo "###### 生成csv已完成! ######"

echo "###### 开始生成配置表proto... ######"
${node_cmd} ./scripts/csv2proto.js
echo "配置表proto已生成! ######"

echo "###### 开始生成其他数据(枚举,消息,数据库结构体)proto... ######"
sh ./scripts/_do_generate_proto.sh
echo "###### proto数据结构定义完成 ######"

echo "#################### DONE #####################"