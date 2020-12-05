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

module.exports = (on, config) => {
  const fs = require("fs");
  const home = require("os").homedir();
  const downloadPath = `${home}/Downloads`;
  const { promisify } = require("util");
  const rimraf = promisify(require("rimraf"));

  on("task", {
    findFile(filename) {
      console.log("finding file");
      if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        // dev code
        return `${downloadPath}/${filename}`;
      } else {
        // production code
        return `${filename}`;
      }
    },
    async cleanDownloads(filename) {
      const path = `${downloadPath}/${filename}`;
      console.log(`cleaning up downloads at ${downloadPath}/${filename}`);

      await rimraf(path);
      return null;
    },
  });
};
