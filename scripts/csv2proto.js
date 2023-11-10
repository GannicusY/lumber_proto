const fs= require('fs');
const csv = require('csv-parser');

const path = require('path');

const Spec2ProtoDataTypeMap = new Map([
    ['int', 'int32'],
    ['long', 'int64'],
    ['string', 'string'],
    ['bool', 'bool'],
    ['float', 'float'],
    ['double', 'double'],
    ['ints', 'repeated int32'],
    ['longs', 'repeated int64'],
    ['strings', 'repeated string'],
    ['bools', 'repeated bool'],
    ['floats', 'repeated float'],
    ['doubles', 'repeated double'],
    ['int[]', 'repeated int32'],
    ['long[]', 'repeated int64'],
    ['string[]', 'repeated string'],
    ['bool[]', 'repeated bool'],
    ['float[]', 'repeated float'],
    ['double[]', 'repeated double']
]);

// 设置项目根目录
const rootDir = path.join(path.resolve(__dirname), "..");
console.log(rootDir);

// 文件夹路径
const csvPath = path.join(rootDir, "specs", "csv");
const protoFilePath = path.join(rootDir, "proto", "Spec");

// 指定的文件格式
const fileFormat = '.csv';
fs.readdir(csvPath, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    // 筛选指定格式的文件
    const filteredFiles = files.filter(file => path.extname(file) === fileFormat);

    // 打印筛选后的文件列表
    console.log('Filtered files:', filteredFiles);

    for (const csvFile in filteredFiles) {
        Csv2Proto(csvPath, filteredFiles[csvFile]).then()
    }
});

function readDescHeader(fullCsvFile)
{
    return new Promise((resolve, reject) => {
        let rowData = null

        fs.createReadStream(fullCsvFile)
            .pipe(csv())
            .on('headers', (headers) => {
                rowData = headers
                resolve(rowData)
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

function readFieldSchema(fullCsvFile)
{
    return new Promise((resolve, reject) => {
        let fieldSchema = null;

        // 读取CSV文件头三行,分别未描述,字段名,格式
        fs.createReadStream(fullCsvFile)
            .pipe(csv({skipLines: 1}))
            .once('data', (data) => {
                fieldSchema = data
            })
            .on('end', () => {
                resolve(fieldSchema);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

function readTableRow(fullCsvFile, enumKeyRaw)
{
    console.log(fullCsvFile);
    console.log(enumKeyRaw);
    return new Promise((resolve, reject) => {
        let rowContent = new Set();

        // 读取CSV文件头三行,分别未描述,字段名,格式
        fs.createReadStream(fullCsvFile)
            .pipe(csv({skipLines: 2}))
            .on('data', (data) => {
                if(!rowContent.has(data[enumKeyRaw]))
                {
                    rowContent.add(data[enumKeyRaw]);
                }
            })
            .on('end', () => {
                resolve(rowContent);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

async function Csv2Proto(csvPath, csvFileName) {
    const fullCsvFile = path.join(csvPath, csvFileName)

    try {
        let fieldDesc = await readDescHeader(fullCsvFile);
        let fieldSchema = await readFieldSchema(fullCsvFile);
        console.log(fieldDesc);
        console.log(fieldSchema);
        const tableName = path.basename(csvFileName, path.extname(csvFileName));
        CreateSpecProtoFile(tableName, fieldSchema, fieldDesc);
    } catch (error) {
        console.error(error);
    }
}

function CreateSpecProtoFile(tableName, fieldSchema, fieldDesc)
{
    if(tableName.startsWith('{') || tableName.startsWith('['))
    {
        tableName = tableName.substring(1, tableName.length - 1);
        console.log(tableName)
    }

    const protoFileName = tableName + ".proto";
    const protoFullPath = path.join(protoFilePath, protoFileName);
    let schemaContent = "";
    let keyIndex = 0;
    for (const schemaContentKey in fieldSchema) {
        let specDataTypeRaw = fieldSchema[schemaContentKey];
        let specDataType =  specDataTypeRaw.toLowerCase();
        let protoDataType = specDataType;
        if(!Spec2ProtoDataTypeMap.has(specDataType))
        {
            if(specDataType.startsWith('e'))
            {
                CreateEnumContent(tableName, specDataTypeRaw, fieldDesc[keyIndex]).then(enumContent => {
                    console.log("enumContent:" + enumContent);

                    fs.appendFileSync(protoFullPath, enumContent, 'utf-8');
                });
                protoDataType = specDataTypeRaw;
            }
            else
            {
                console.error(`spec data type:${specDataType} not defined!`)
            }
        }
        else
        {
            protoDataType = Spec2ProtoDataTypeMap.get(specDataType);
        }
        if(keyIndex > 0) schemaContent += "\n";
        schemaContent += `  ${protoDataType} ${schemaContentKey} = ${keyIndex + 1};// ${fieldDesc[keyIndex]}`;
        keyIndex++;
    }

    let protoContent = `syntax = "proto3";
package lumber.Spec;

message ${tableName} {
${schemaContent}
}`;
    fs.writeFileSync(protoFullPath, protoContent, 'utf-8');
}

async function CreateEnumContent(tableName, specDataTypeRaw, fieldDesc)
{
    let csvFullPath = path.join(csvPath, `${tableName}.csv`);
    let enumValues = await readTableRow(csvFullPath, specDataTypeRaw);
    console.log(enumValues);
    let enumIndex = 0;
    let allEnumContent = "  Default = 0; // 默认值";
    for (const enumItem of enumValues) {
        allEnumContent += `\n  ${enumItem} = ${++enumIndex};`;
    }
    return `\n\n// ${fieldDesc}
enum ${specDataTypeRaw} {
${allEnumContent}
}\n`;
}








