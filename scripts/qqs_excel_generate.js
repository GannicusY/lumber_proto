// !!! 为方便前后端配表数据内容一致, 使用该脚本强行生成砍树项目服务端excel配置表
// (历史原因,前后端表结构不一致, excel数据源规则未统一)
// !!! excel 表格格式改表后,该脚本需要同步修改, 不能自定生成, 非最佳实践
// !!! 逻辑耦合性太高, 后期建议统一表结构, 使用通用逻辑

const XLSX= require('xlsx');
const path = require('path');
const fs = require("fs");

// 设置项目根目录
const rootDir = path.join(path.resolve(__dirname), "..");
console.log(rootDir);

// 文件夹路径
const outputExcelPath = path.join(rootDir, "specs", "output", "qqs_server");
makeDirIfNotExist(outputExcelPath)
const sourceExcelPath = path.join(rootDir, "specs", "output", "server");
const sourceConfigExcelPath = path.join(sourceExcelPath, "GameConfig.xlsx")
if(!fs.existsSync(sourceConfigExcelPath))
{
    console.error(`file ${sourceConfigExcelPath} not exist`)
    process.exit(1)
}

// 读取config Excel文件
const sourceConfigWorkBook = XLSX.readFile(sourceConfigExcelPath);
const sourceConfigWorkSheet = sourceConfigWorkBook.Sheets[sourceConfigWorkBook.SheetNames[0]];
const configSheetData = XLSX.utils.sheet_to_json(sourceConfigWorkSheet, {
    header:1,
    blankrows:false,
    rawNumbers:true
});
// console.log(configSheetData);

const sourceSpecExcelPath = path.join(sourceExcelPath, "GameSpec.xlsx")
if(!fs.existsSync(sourceSpecExcelPath))
{
    console.error(`file ${sourceSpecExcelPath} not exist`)
    process.exit(1)
}

// 读取 spec Excel文件
const sourceSpecWorkBook = XLSX.readFile(sourceSpecExcelPath);

const Sheets = {
    fellingInfo: [
        ['id', 'id'],
        ['名称', 'name'],
        ['类型 1树 2斧头', 'type'],
        ['砍树消耗玫瑰', 'diamond'],
        ['随机掉落金币', 'coin#[]']
    ],
    axeRate: [
        ['斧子等级', 'rank'],
        ['斧子品质', 'type'],
        ['概率', 'weights#[]'],
        ['道具列表', 'giftIds#[]'],
    ],
    treeLake: [
        ['树的等级', 'treeRank'],
        ['礼物池', 'lakeIds#[]'],
    ],
    lakeGift: [
        ['品质池ID', 'id'],
        ['道具ID', 'giftIds#[]'],
        ['概率', 'weights#[]'],
    ],
    fellingLake: [
        ['蓄水池', 'id'],
        ['排序', 'sort'],
        ['上限(玫瑰)', 'upperLimit'],
        ['收入占比', 'rate'],
        ['上一级', 'previous'],
    ],
    fellingUpgrade: [
        ['id', 'id'],
        ['type', 'type'],
        ['等级', 'rank'],
        ['下个等级', 'nextRank'],
        ['升级消耗金币', 'singleRank'],
        ['浇灌一次消耗的金币', 'singleLevel'],
        ['浇灌上限', 'maxLevel'],
        ['初始升级成功率,乘以100', 'initRankSuccess'],
        ['升级失败叠加成功率', 'successPlus'],
    ]
};

let book = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(book, generate_sheet_fellingInfo(), 'fellingInfo');
XLSX.utils.book_append_sheet(book, generate_sheet_axeRate(), 'axeRate');
XLSX.utils.book_append_sheet(book, generate_sheet_treeLake(), 'treeLake');
XLSX.utils.book_append_sheet(book, generate_sheet_lakeGift(), 'lakeGift');
XLSX.utils.book_append_sheet(book, generate_sheet_fellingLake(), 'fellingLake');
XLSX.utils.book_append_sheet(book, generate_sheet_fellingUpgrade(), 'fellingUpgrade');
const qqsServerExcelFile = path.join(outputExcelPath, '砍树.xlsx');

// 将工作簿写入Excel文件
XLSX.writeFile(book, qqsServerExcelFile);

function generate_sheet_fellingInfo()
{
    let sheetData = generateSheetHeaders(Sheets.fellingInfo);
    sheetData = sheetData.concat(generate_sheetData_fellingInfo());
    return XLSX.utils.aoa_to_sheet(sheetData);
}

function generate_sheet_axeRate()
{
    let sheetData = generateSheetHeaders(Sheets.axeRate);
    sheetData = sheetData.concat(generate_sheetData_axeRate());
    return XLSX.utils.aoa_to_sheet(sheetData);
}

function generate_sheet_treeLake()
{
    let sheetData = generateSheetHeaders(Sheets.treeLake);
    sheetData = sheetData.concat(generate_sheetData_treeLake());
    return XLSX.utils.aoa_to_sheet(sheetData);
}

function generate_sheet_lakeGift()
{
    let sheetData = generateSheetHeaders(Sheets.lakeGift);
    sheetData = sheetData.concat(generate_sheetData_lakeGift());
    return XLSX.utils.aoa_to_sheet(sheetData);
}

function generate_sheet_fellingLake()
{
    let sheetData = generateSheetHeaders(Sheets.fellingLake);
    sheetData = sheetData.concat(generate_sheetData_fellingLake());
    return XLSX.utils.aoa_to_sheet(sheetData);
}

function generate_sheet_fellingUpgrade()
{
    let sheetData = generateSheetHeaders(Sheets.fellingUpgrade);
    sheetData = sheetData.concat(generate_sheetData_fellingUpgrade());
    return XLSX.utils.aoa_to_sheet(sheetData);
}

function generate_sheetData_fellingUpgrade()
{
    let treeUpgradeSheetData = do_generate_sheetData_fellingUpgrade();
    let axeUpgradeSheetData = do_generate_sheetData_fellingUpgrade(false, treeUpgradeSheetData.length);
    return treeUpgradeSheetData.concat(axeUpgradeSheetData);
}

function do_generate_sheetData_fellingUpgrade(isTree = true, indexOffset = 0)
{
    let sheetName = isTree ? "TreeUpgrade" : "AxeUpgrade";
    let dataType = isTree ? 1 : 2;
    const upgradeWorkSheet = sourceSpecWorkBook.Sheets[sheetName];
    const upgradeSheetData = XLSX.utils.sheet_to_json(upgradeWorkSheet, {
        header:1,
        blankrows:false,
        rawNumbers:true
    });

    let sheetData = [];
    upgradeSheetData.forEach((columnData, index) => {
        if(index <= 2) return;

        let fellingDataColumn = [
            indexOffset + sheetData.length + 1,
            dataType,
            columnData[0],
            columnData[0] + 1,
            columnData[3],
            columnData[2],
            columnData[1],
            columnData[4] / 100,
            columnData[5] / 100
        ];
        sheetData.push(fellingDataColumn);
    });
    if(sheetData.length > 0) sheetData[sheetData.length - 1][3] = -1;
    return sheetData;
}

function generate_sheetData_fellingLake()
{
    let rateArray = getArrayConfig('Proportion').split(',');
    return [
        [1, 1, getConfig('Seniorpoor_Limit'), rateArray[0], 2],
        [2, 2, getConfig('Middlepoor_Limit'), rateArray[1], 3],
        [3, 3, -1, rateArray[2], -1],
    ];
}

function generate_sheetData_lakeGift()
{
    const poolWorkSheet = sourceSpecWorkBook.Sheets['{SonpoolProp}'];
    const poolSheetData = XLSX.utils.sheet_to_json(poolWorkSheet, {
        header:1,
        blankrows:false,
        rawNumbers:true
    });

    let poolDataMap = new Map();
    poolSheetData.forEach((columnData, index) => {
        if(index <= 2) return;

        let poolId = columnData[0];
        if(!poolDataMap.hasOwnProperty(poolId))
        {
            poolDataMap[poolId] = [
                poolId,
                [columnData[1]],
                [columnData[3]]
            ];
        }
        else
        {
            // console.log(poolDataMap[poolId][1])
            poolDataMap[poolId][1].push(columnData[1]);
            // console.log(poolDataMap[poolId][1])
            poolDataMap[poolId][2].push(columnData[3]);
        }
    });

    const keys = Object.keys(poolDataMap);
    keys.sort();

    let result = [];
    keys.forEach((key) => {
        let tmpValue = poolDataMap[key];
        result.push([tmpValue[0], tmpValue[1].join(), tmpValue[2].join()]);
    });
    return result;
}

function generate_sheetData_treeLake()
{
    const treePoolWorkSheet = sourceSpecWorkBook.Sheets['TreePool'];
    const treePoolSheetData = XLSX.utils.sheet_to_json(treePoolWorkSheet, {
        header:1,
        blankrows:false,
        rawNumbers:true
    });

    const sonPoolWorkSheet = sourceSpecWorkBook.Sheets['Sonpool'];
    const sonPoolSheetData = XLSX.utils.sheet_to_json(sonPoolWorkSheet, {
        header:1,
        blankrows:false,
        rawNumbers:true
    });

    let result = [];
    treePoolSheetData.forEach((columnData, index) => {
        if(index <= 2) return;

        let tempColumnData = columnData
        tempColumnData[1] = getPoolDataById(sonPoolSheetData, columnData[1]);
        result.push(tempColumnData)
    });
    return result;
}

function getPoolDataById(sonPoolSheetData, poolId)
{
    for(let i = 3; i < sonPoolSheetData.length; ++i)
    {
        let poolColumnData = sonPoolSheetData[i];
        if(poolColumnData[0] === poolId)
        {
            let poolDataReverse = [];
            for(let i = poolColumnData.length - 1; i >= 1; --i)
            {
                if(poolColumnData[i] !== 0 && poolColumnData[i] !== "")
                {
                    poolDataReverse.push(poolColumnData[i])
                }
            }
            poolDataReverse.reverse()
            return poolDataReverse.join(',');
        }
    }
    return "";
}

function generate_sheetData_axeRate()
{
    const sourceSpecWorkSheet = sourceSpecWorkBook.Sheets['{AxeProb}'];
    const specSheetData = XLSX.utils.sheet_to_json(sourceSpecWorkSheet, {
        header:1,
        blankrows:false,
        rawNumbers:true
    });

    const AxeTypeMap = {
        2: 2,
        4: 3,
        6: 4
    }

    let result = [];
    specSheetData.forEach((columnData, index) => {
        if(index <= 2) return;

        let tempColumnData = columnData
        tempColumnData[1] = AxeTypeMap[columnData[1]]
        tempColumnData[2] = columnData[2].replace("[", "").replace("]","")
        tempColumnData[3] = columnData[3].replace("[", "").replace("]","")
        result.push(tempColumnData)
    });
    return result;
}

function generate_sheetData_fellingInfo()
{
    return [
        [1, '树', 1, '', ''],
        [2, '铁斧', 2, getConfig('Cost_Iron_Axe'), getArrayConfig('Coin_Iron_Axe')],
        [3, '银斧', 2, getConfig('Cost_Silver_Axe'), getArrayConfig('Coin_Silver_Axe')],
        [4, '金斧', 2, getConfig('Cost_Gold_Axe'), getArrayConfig('Coin_Gold_Axe')],
    ];
}

function generateSheetHeaders(headerData)
{
    let sheetData = [];
    let sheet_head_desc = [];
    let sheet_head_name = [];
    headerData.forEach((header) => {
        sheet_head_desc.push(header[0]);
        sheet_head_name.push(header[1]);
    });
    sheetData.push(sheet_head_desc);
    sheetData.push(sheet_head_name);
    return sheetData;
}

function getArrayConfig(Key)
{
    return getConfig(Key).replace("[", "").replace("]", "");
}

function getConfig(Key)
{
    let keyIndex = 2;
    let valueIndex = 3;
    configSheetData[1].forEach((data, index) => {
        if(data.toLowerCase() === "key")
        {
            keyIndex = index;
        }
        else if(data.toLowerCase() === "value")
        {
            valueIndex = index;
        }
    })

    if(configSheetData.length <= 3) return null;
    for(let i = 3; i < configSheetData.length; i++)
    {
        let columnData = configSheetData[i];
        if(columnData[keyIndex].toLowerCase() === Key.toLowerCase())
        {
            return columnData[valueIndex]
        }
    }
    return null;
}

function makeDirIfNotExist(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, {recursive:true});
        console.log(`Directory ${dirPath} created successfully!`);
    }
}




