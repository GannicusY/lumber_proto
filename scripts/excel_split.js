const XLSX= require('xlsx');

const fs= require('fs');
const path = require('path');

// 设置项目根目录
const rootDir = path.join(path.resolve(__dirname), "..");
// console.log(rootDir);

// 文件夹路径
const rawSpecsPath = path.join(rootDir, "specs");
const rawExcelPath = path.join(rawSpecsPath, "excel");
if(!fs.existsSync(rawExcelPath))
{
    console.error(`path ${rawExcelPath} not exist, please create this folder and put some excel file first!`)
    process.exit(1)
}

const outputExcelPath = path.join(rawSpecsPath, "output");
const clientExcelOutputPath = path.join(outputExcelPath, 'client')
const serverExcelOutputPath = path.join(outputExcelPath, 'server')
makeDirIfNotExist(clientExcelOutputPath)
makeDirIfNotExist(serverExcelOutputPath)

// console.log(outputExcelPath);

// 指定的文件格式
const fileFormat = '.xlsx';
fs.readdir(rawExcelPath, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    // 筛选指定格式的文件
    const filteredFiles = files.filter(file => path.extname(file) === fileFormat);

    // 打印筛选后的文件列表
    console.log('Filtered files:', filteredFiles);

    for (const excelFile in filteredFiles) {
        ReadWriteExcel(rawExcelPath, filteredFiles[excelFile])
    }
});

function ReadWriteExcel(excelPath, excelFileName) {
    const fullExcelFile = path.join(excelPath, excelFileName)

    // 读取Excel文件
    const workbook = XLSX.readFile(fullExcelFile);
    // 创建工作簿对象并将工作表添加到其中
    const workbook_client = XLSX.utils.book_new();
    const workbook_server = XLSX.utils.book_new();
    for (const sheetNameIndex in workbook.SheetNames) {
        let sheetName = workbook.SheetNames[sheetNameIndex];
        let worksheet = workbook.Sheets[sheetName];

        // 将工作表转换为JSON数组
        const jsonSheetData = XLSX.utils.sheet_to_json(worksheet, {
            header:1,
            blankrows:false,
            rawNumbers:true
        });
        // console.log(jsonSheetData)

        if(jsonSheetData.length <= 1) continue;

        let rowIndex2RemoveForClient = [];
        let rowIndex2RemoveForServer = [];
        // console.log("firstRowData:" + jsonSheetData[0]);
        jsonSheetData[0].forEach((value, index) => {
            if(value.endsWith("#desc"))
            {
                rowIndex2RemoveForClient.push(index);
                rowIndex2RemoveForServer.push(index);
            }
            else if(value.endsWith("#server"))
            {
                rowIndex2RemoveForClient.push(index);
            }
            else if(value.endsWith("#client"))
            {
                rowIndex2RemoveForServer.push(index);
            }
        })

        let jsonSheetDataClient = JSON.parse(JSON.stringify(jsonSheetData));
        let jsonSheetDataServer = JSON.parse(JSON.stringify(jsonSheetData));
        let finalWorkSheetClient = GenerateSheetData(worksheet, jsonSheetDataClient, rowIndex2RemoveForClient);
        // console.log("jsonSheetData:" + jsonSheetDataServer)
        let finalWorkSheetServer = GenerateSheetData(worksheet, jsonSheetDataServer, rowIndex2RemoveForServer);

        // Add the worksheet to the workbook
        XLSX.utils.book_append_sheet(workbook_client, finalWorkSheetClient, sheetName);
        XLSX.utils.book_append_sheet(workbook_server, finalWorkSheetServer, sheetName);
    }
    // 将数据拆分保存为客户端和服务器excel文件
    const clientExcelFile = path.join(clientExcelOutputPath, `${excelFileName}`);
    // 将工作簿写入Excel文件
    XLSX.writeFile(workbook_client, clientExcelFile);
    console.log(`write excel:${fullExcelFile} to file:client_${clientExcelFile} done!`);

    const serverExcelFile = path.join(serverExcelOutputPath, `${excelFileName}`);
    // 将工作簿写入Excel文件
    XLSX.writeFile(workbook_server, serverExcelFile);
    console.log(`write excel:${fullExcelFile} to file:server_${serverExcelFile} done!`);
}

function GenerateSheetData(worksheet, jsonSheetData, rowIndex2Remove)
{
    let finalWorkSheet = worksheet;
    if(rowIndex2Remove.length > 0) {
        rowIndex2Remove.sort((a, b) => b - a);
        let finalSheetData = [];
        jsonSheetData.forEach((data, index) => {
            let tmpData = data;
            for (let i = 0; i < rowIndex2Remove.length; i++) {
                const indexToRemove = rowIndex2Remove[i];
                tmpData.splice(indexToRemove, 1)
            }

            if (index === 0) {
                tmpData = tmpData.map(rowName => {
                    // console.log("rowName:" + rowName);
                    let commaIndex = rowName.lastIndexOf("#");
                    if (commaIndex >= 0) {
                        // console.log("lastIndexOf#:" + commaIndex + " substring:" + rowName.substring(0, commaIndex));
                        return rowName.substring(0, commaIndex);
                    }
                    return rowName;
                });
                // console.log("tmpData:" + tmpData);
            }
            finalSheetData.push(tmpData);
            // console.log(finalSheetData);
        })
        finalWorkSheet = XLSX.utils.aoa_to_sheet(finalSheetData);
    }
    return finalWorkSheet;
}

function makeDirIfNotExist(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, {recursive:true});
        console.log(`Directory ${dirPath} created successfully!`);
    }
}





