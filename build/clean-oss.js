//旧版本的堆积会大量占用OSS空间
const OSS = require('ali-oss');
const path = require('path')

const basedir = "download/latest"

//console.log('electron-publisher-orecraft', task.file);
if (
  !process.env['OSS_REGION'] ||
  !process.env['OSS_ID'] ||
  !process.env['OSS_SECRET'] ||
  !process.env['OSS_BUCKET']
) {
  console.error('Invaild OSS Config.')
  return;
}
let client = new OSS({
  region: process.env['OSS_REGION'],
  accessKeyId: process.env['OSS_ID'],
  accessKeySecret: process.env['OSS_SECRET'],
  bucket: process.env['OSS_BUCKET'],
  timeout: '600000'
});
let todelete = []
const result = client.list({
  prefix: basedir,
})
console.log(result)
result.objects.forEach(obj => {
  todelete.push(obj.name)
});
if(todelete.length >0){
  client.deleteMulti(todelete);
}
