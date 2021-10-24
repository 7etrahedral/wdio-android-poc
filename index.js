const wdio = require('webdriverio');
const assert = require('assert');

const options ={
  path: '/wd/hub',
  port: 4273,
  capabilities: {
    platformName: 'Android',
    noReset: true,
    fullReset: true,
    maxInstance: 1,
    platformVersion: '9',
    deviceName: '7382da400405',
    app: '/home/wib/workspace/wdio-android-poc/apk/ApiDemos-debug.apk',
    appPackage: 'io.appium.android.apis',
    appActifity: '.view.TextFields',
    automationName: 'UiAutomator2'
  }
};

async function main(){
  const client = await wdio.remote(options);

  const field = await client.$('android.widget.EditText');
  await field.setValue('Hello WOrld!');
  const valie = await field.getText();
  assert.strictEqual(value, 'Hello World!');

  await client.deleteSession();
}

main();
