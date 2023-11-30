# README
`本项目用于前后端数据结构定义,用于前后端功能对接与拆分,工作流程上,应该先确定需求,然后在该项目下定义数据结构,
导出各端相应的class文件.数据结构的更改需要在该项目下进行,确保结构同一,减少不必要的对接沟通成本.`


### Env for mac
1. brew install node & brew install npm
2. 进入项目主目录执行 npm install

### Working Routine
1. 在proto目录下使用proto3协议定义数据结构
2. 将最新版本的spec配置表放置在specs/excel目录下
3. 执行scripts目录下的generate.sh脚本
4. 导出output下的文件,分别给服务端(output/JS),客户端(output/CSharp)使用

### Hierarchy
```
- docs   # 文档
- libs   # proto 可执行文件
- output # 导出的客户端服务端类结构文件
    - CSharp   # unity 客户端使用
    - JS       # node js 服务器使用
- proto  # proto 结构定义文件
- scripts # 可执行脚本文件
    - _do_generate_proto.sh   # 基于proto目录下的.proto后缀文件,生成output下客户端服务器使用的class
    - excel2csv.js # 基于specs/excel目录下的xlsx文件,生成对应的csv文件到specs/csv目录下
    - csv2proto.js # 基于specs/csv目录下的csv文件,生成 spec 对应的proto文件到proto/Spec目录下
    - generate.sh # 一键生成脚本,相继执行excel2csv.js, csv2proto.js, _do_generate_proto.sh
- specs # 配置表
    - csv # excel 文件夹中xlsx文件导出
    - excel # 用于生成csv,proto的xlsx文件
    - raw # 所有excel文件, 只用于存档
```

### excel配表规则
- [规则](https://mpezp7nr38.feishu.cn/file/TJWjbndWOoSHz3xyAmjc579cngb)
- [参考案例](https://mpezp7nr38.feishu.cn/file/NjB6bvQm6ovfmMxN5JJcSOvBnnb)

