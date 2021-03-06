const OSS = require('ali-oss');
const path = require('path')
const request = require('superagent')
const fs = require('fs')
const Stream = require('stream')

const basedir = "download/latest"


if (
    !process.env['OSS_REGION'] ||
    !process.env['OSS_ID'] ||
    !process.env['OSS_SECRET'] ||
    !process.env['OSS_BUCKET']
) {
    console.log(process.env)
    console.error('Invaild OSS Config.')
    //return;
}
let client = new OSS({
    region: process.env['OSS_REGION'],
    accessKeyId: process.env['OSS_ID'],
    accessKeySecret: process.env['OSS_SECRET'],
    bucket: process.env['OSS_BUCKET'],
    timeout: '600000'
});

getAssets();

function getAssets() {

    request.get("https://api.github.com/repos/hempflower/shulker-box/releases/latest").set('User-Agent', 'releaseBot/1.0.0').end((err, res) => {
        if (err) {
            console.error(err)
            return
        }
        if (typeof (res.body.assets) == 'undefined') {
            console.error('No release found.')
            return;
        }

        for (let file of res.body.assets) {
            downloadFile(file['browser_download_url'], file['name'])
        }
    })

}

async function downloadFile(url, name) {
    let data = await request.get(url)
        .set('User-Agent', 'releaseBot/1.0.0').buffer(true)
    fs.writeFileSync('./build/' + name, data.body)
    await client.put(basedir + '/' + name, './build/' + name)
    console.log('Downloaded ' + name)
}
