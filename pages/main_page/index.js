// npm start

const yaml = require('js-yaml');
const fs   = require('fs');

var path_to_settings = 'settings.yml';
var settings;

// TODO: function to print error

// STEP 1: get the settings file
try {
  // Check if the setting file exists
  if (fs.existsSync(path_to_settings)) {
    // If the setting file exist, load it
    settings = yaml.safeLoad(fs.readFileSync('settings.yml', 'utf8'));
  } else {
    // If the settings file doesn't exists, create one
    settings = {
      version: '0.1',
      theme: "light"
    }; 
    let yaml_string = yaml.safeDump(settings);
    fs.writeFileSync('settings.yaml', yaml_string, 'utf8');
  }
} catch (e) {
  // TODO: give warning if the setting can't be loaded
  console.log(e);
}

// Getting all the data files
try {
  // TODO: Check if the data folder exists, if not, create it
  // TODO: Check what data is in the folder data


} catch (e) {
  // TODO: give warning
  console.log(e);
}