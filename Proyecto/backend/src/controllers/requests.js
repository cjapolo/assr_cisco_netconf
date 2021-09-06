const { PythonShell } = require('python-shell')
const path = './src/controllers/';
let getResult, postResult, deleteResult, putResult;

PythonShell.run('netconf.py', {scriptPath: path, args: 'get_config'}, (err, result) =>{
    if (err) throw err;
    else{
        getResult = result;
    } 
})

//PythonShell.run('netconf.py', {scriptPath: path, args: 'post_config'}, (err, result) =>{
//    if (err) throw err;
//    else{
//        postResult = result;
//    } 
//})
//

exports.getConfiguration = function(req, res){
    res.send(getResult);
}
//
//exports.postConfiguration = function(req, res){
//    res.send(postResult);
//}
//
