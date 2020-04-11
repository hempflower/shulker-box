//旧版本的堆积会大量占用OSS空间
const OSS = require('ali-oss');
const path = require('path')

const basedir = "download/latest"

//console.log('electron-publisher-orecraft', task.file);
async function deletefile() {
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
  const result = await client.list({
    delimiter: basedir,
  })

  result.objects.forEach(obj => {
    todelete.push(obj.name)
  });
  if (todelete.length > 0) {
    await client.deleteMulti(todelete);
  }
}

deletefile()