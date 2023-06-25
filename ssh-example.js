const node_ssh = require('node-ssh');
const ssh = new node_ssh['NodeSSH']()
require('dotenv').config();

const conn = ssh
    .connect({
        host: process.env.SSH_host,
        username: process.env.SSH_user,
        password: process.env.SSH_password
    });

function exec(command) {
    conn.then(() => {
        ssh.execCommand(command).then((result) => {
            console.log('STDOUT: ' + result.stdout);
            console.log('STDERR: ' + result.stderr);
        });
    });
}

module.exports = {
    foo: function () {
        // whatever
    },
    bar: function () {
        // whatever
    },

    exec: function (command, callback) {
        conn.then(() => {
            ssh.execCommand(command).then(callback);
        });
    }
};
// // To Test
// exec("uname -a", (result) => {
//                 console.log('STDOUT: ' + result.stdout);
//                 console.log('STDERR: ' + result.stderr);
//             });