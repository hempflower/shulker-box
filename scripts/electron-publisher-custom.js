const electronPublish = require('electron-publish');
const OSS = require('ali-oss');


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
      console.err('Invaild OSS Config.')
      return;
    }
    let client = new OSS({
      region: process.env['OSS_REGION'],
      accessKeyId: process.env['OSS_ID'],
      accessKeySecret: process.env['OSS_SECRET'],
      bucket: process.env['OSS_BUCKET']
    });
    try {
      let result = await client.put(basedir + '/' + task.safeArtifactName, task.file);
      console.log(result);
    } catch (err) {
      console.err(err);
    }
  }
};
module.exports = Publisher;