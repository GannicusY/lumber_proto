// js proto 使用案例
const lumberLib = require('./output/JS/lumber').lumber;

let newUser = CreateUser();
console.log(newUser);

function CreateUser()
{
    let userdata = new lumberLib.DataTable.UserData();
    userdata.tree = CreateUserTree();
    userdata.axes = CreateUserAxes();
    return userdata;
}

function CreateUserTree() {
    let userTree = new lumberLib.DataTable.UserTree.create();
    userTree.level = 1;
    userTree.water = 0;
    userTree.fail = 0;
    console.log(userTree);
    return userTree;
}

function CreateUserAxes()
{
    let userAxes= [];
    for(let quality = lumberLib.Enum.EAxeQuality.Iron; quality <= lumberLib.Enum.EAxeQuality.Golden; ++quality)
    {
        let userAxe = new lumberLib.DataTable.UserAxe.create();
        userAxe.quality = quality;
        userAxe.level = 1;
        userAxe.burnish = 0;
        userAxe.fail = 0;
        userAxes.push(userAxe);
    }
    return userAxes;
}

