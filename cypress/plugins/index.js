/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {downloadFile});

  // on('task', {
	// 	deleteFile(fileName) {
	// 		const fs = require('fs');
  //     const userName = require('os').userInfo().username;
  //     console.log(userName);
	// 		const downloadPath = `/Users/${userName}/Downloads/`;
	// 		const absolutePath = downloadPath + fileName;
	// 		const fileStats = fs.statSync(absolutePath);
	// 		const fileSize = fileStats.size;

	// 		if (fs.existsSync(absolutePath) && fileSize > 0) {
	// 			try {
	// 				fs.unlinkSync(absolutePath);
	// 				console.log('File deleted');
	// 				return null;
	// 			} catch (err) {
	// 				console.log(err);
	// 			}
	// 		}
	// 		console.log('File is not exists');
	// 		return null;
	// 	}
  // });
  
  on('task', {
    findFile(filename) {
      const fs = require('fs');
      const home = require('os').homedir();
      const downloadPath = `${home}/Downloads`;

      if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
          // dev code
          return `${downloadPath}/${filename}`
        } else {
          return `${filename}`
          // production code
      }
  
    }
  })
}
