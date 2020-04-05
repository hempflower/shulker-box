const electronPublish = require('electron-publish');
const OSS = require('ali-oss');
const path = require('path')

const basedir = "download/latest"
class Publisher extends electronPublish.Publisher {
  async upload(task) {
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
      bucket: process.env['OSS_BUCKET']
    });
    let filename = task.safeArtifactName?task.safeArtifactName:path.basename(task.file)
    let result = await client.put(basedir + '/' + filename, task.file);
    console.log('Upload ' + filename)
  }
  toString() {
    return "orecraft"
  }
};
module.exports = Publisher;