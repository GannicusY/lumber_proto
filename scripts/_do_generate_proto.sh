#!/bin/bash

# 获取当前脚本的绝对路径
script_path=$(readlink -f "$0")

# 获取当前脚本所在的目录
script_dir=$(dirname "$script_path")

# 跳转到当前脚本所在的目录
cd "${script_dir}/.." || exit 1

protoc="./libs/protobuf/bin/protoc"
proto_js="./node_modules/.bin/pbjs"
proto_dir="./proto"  # 指定存放.proto文件的目录
csharp_output_dir="./output/CSharp"  # csharp指定输出目录
js_output_dir="./output/JS" # js指定输出目录

# 创建输出目录
mkdir -p ${csharp_output_dir}
mkdir -p ${js_output_dir}

# 遍历.proto文件
find ${proto_dir} -name "*.proto" | while read -r file; do
  filename=$(basename "${file}")
  csharp_output_file="${csharp_output_dir}/${filename%.*}.cs"

  #使用protoc命令将.proto文件转换为C#代码
  ${protoc} --csharp_out=${csharp_output_dir} "${file}"
  echo "CSharp: Converted ${file} to ${csharp_output_file}"
done

js_output_file="${js_output_dir}/lumber.js"
${proto_js} -t static-module -w commonjs -o "${js_output_file}" -r lumber --keep-case ${proto_dir}/*/*.proto
echo "JS: Converted all proto in ${proto_dir}/*/*.proto to ${js_output_file}"

#"${root_dir}"/libs/protobuf/bin/protoc --proto_path="${root_dir}"/proto  --csharp_out="${root_dir}"/output/ *.proto
#pbjs -t static-module -w commonjs -o "${root_dir}"/output/JS/proto.js "${root_dir}"/proto/*.proto --keep-case