const XLSX= require('xlsx');

const fs= require('fs');
const path = require('path');

// 设置项目根目录
const rootDir = path.join(path.resolve(__dirname), "..");
console.log(rootDir);

// 文件夹路径
const excelPath = path.join(rootDir, "specs", "excel");
if (!fs.existsSync(excelPath)) {
    console.log(`excel path ${excelPath} not exist~`);
    process.exit(1)
}
const csvPath = path.join(rootDir, "specs", "csv");
makeDirIfNotExist(csvPath)

// console.log(excelPath);

// 指定的文件格式
const fileFormat = '.xlsx';
fs.readdir(excelPath, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    // 筛选指定格式的文件
    const filteredFiles = files.filter(file => path.extname(file) === fileFormat);

    // 打印筛选后的文件列表
    console.log('Filtered files:', filteredFiles);

    for (const excelFile in filteredFiles) {
        ReadWriteExcel(excelPath, filteredFiles[excelFile])
    }
});

function ReadWriteExcel(excelPath, excelFileName) {
    const fullExcelFile = path.join(excelPath, excelFileName)
    // 读取Excel文件
    const workbook = XLSX.readFile(fullExcelFile);
    for (const sheetNameIndex in workbook.SheetNames) {
        let sheetName = workbook.SheetNames[sheetNameIndex];
        let sheet = workbook.Sheets[sheetName];
        let csvData = XLSX.utils.sheet_to_csv(sheet, {
            FS:",",
            strip:true,
            blankrows:false,
            rawNumbers:true
        });
        // console.log(csvData)

        // 将数据保存为CSV文件
        const fullCsvFile = path.join(csvPath, `${sheetName}.csv`);
        const fs = require('fs');
        fs.writeFileSync(fullCsvFile, csvData, 'utf-8');
        console.log(`write excel:${fullExcelFile} sheet:${sheetName} to CSV file:${fullCsvFile} done!`);
    }
}

function makeDirIfNotExist(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, {recursive:true});
        console.log(`Directory ${dirPath} created successfully!`);
    }
}






