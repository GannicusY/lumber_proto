const lumberLib = require('./output/JS/lumber').lumber;

CreateUser();

function CreateUser() {
    let userTree = new lumberLib.DataTable.UserTree.create();
    userTree.level = 1;
    userTree.water = 0;
    userTree.fail = 0;
    console.log(userTree);
}

function GenerateUid(){
    return 1;
}