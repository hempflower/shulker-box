const electronPublish = require('electron-publish');
const OSS = require('ali-oss');
const path = require('path');
const YAML = require('yamljs');
const fs = require('fs');

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
      bucket: process.env['OSS_BUCKET'],
      timeout: '600000'
    });
    if (path.extname(task.file) === '.yml') {
      let inf = YAML.parse(fs.readFileSync(task.file))

      let todelete = []
      const result = await client.list({
        prefix: basedir,
      })
      result.objects.forEach(obj => {
        if (obj.name.indexOf()) {
          if (obj.name.indexOf(inf.version) == -1) {
            todelete.push(obj.name)
          }
        }
      });
      await client.deleteMulti(todelete);
    }
    let filename = task.safeArtifactName ? task.safeArtifactName : path.basename(task.file)
    let result = await client.put(basedir + '/' + filename, task.file);
    console.log('Upload ' + filename)

  }
  toString() {
    return "orecraft"
  }
};
module.exports = Publisher;