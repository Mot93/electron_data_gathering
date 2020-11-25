const yaml = require('js-yaml');
const fs   = require('fs');

module.exports = {
    // Return default settings
    get_default_settings: function(){
        return settings = {
            version: '0.1',
            theme: 'light',
            data_config: ['']
        };
    },

    // Seve settings on a yaml file
    save_settings: function(settings){
        let yaml_string = yaml.safeDump(settings);
        fs.writeFileSync('settings.yaml', yaml_string, 'utf8');
    },

    // Get the setting form the file
    // If it's not found, creates a new one
    get_settings: function(settings_path){
        try {
            // Check if the setting file exists
            if (fs.existsSync(path_to_settings)) {
                // If the setting file exist, load it
                settings = yaml.safeLoad(fs.readFileSync(settings_path, 'utf8'));
            } else {
                // If the settings file doesn't exists, create one
                settings = get_default_settings()
                save_settings(settings); 
            }
        } catch (e) {
            // TODO: give warning if the setting can't be loaded
            console.log(e);
            return(null);
        }
        return settings;
    }
} // module.exports