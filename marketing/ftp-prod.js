var Deploy = require('ftp-deploy');
var ftpDeploy = new Deploy();

var config = {
  host: process.env.IP_ADDRESS,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  port: 21,
  localRoot: __dirname + '/dist',
  remoteRoot: '/marketing',
  include: ['*', '.htaccess'],
  deleteRemote: false,
};

ftpDeploy.deploy(config, function (err, res) {
  if (err) console.log(err);
  else console.log('finished:', res);
});

ftpDeploy.on('uploading', function (data) {
  data.totalFilesCount;
  data.transferredFileCount;
  data.filename;
});

ftpDeploy.on('uploaded', function (data) {
  console.log(data);
});

ftpDeploy.on('log', function (data) {
  console.log(data);
});

ftpDeploy.on('upload-error', function (data) {
  console.log(data.err);
});
