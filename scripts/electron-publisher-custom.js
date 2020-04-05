const electronPublish = require('electron-publish');
class Publisher extends electronPublish.Publisher {
  async upload(task) {
    console.log('electron-publisher-orecraft', task.file);
  }
};
module.exports = Publisher;