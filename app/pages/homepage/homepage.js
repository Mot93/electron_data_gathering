const path = require("path");
const settings_lib = require(path.resolve('./app/scripts/settings_lib.js'));

// STEP 1: INITIALIZE
const path_to_settings = path.resolve('./config/settings.yml');
var settings = settings_lib.get_settings(path_to_settings);
console.log(settings)

// STEP 2: GET THE PAGE


// STEP 3: BUSINESS LOGIC