const download = require("download-git-repo");
const { exec } = require("child_process");


download("steakmans/WW3#Dev", "/Users/hadrienbesnier/Desktop/test", function (err) {
    console.log(err ? 'Error' : 'Success')
    exec("cd /Users/hadrienbesnier/Desktop/test && sudo ./gradlew build", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
});