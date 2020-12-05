//function to add license badges
function addBadge(license) {
  if(license ==="Apache 2.0") {
    return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } 
  else if (license === "GNU GPL v2") {
    return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
  }
  else if (license === "GNU GPL v3") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  else if (license === "GNU LGPL v3") {
    return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`;
  }
  else if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  else (license === "No License") 
    return ( ``)
}
// function to generate markdown for README
function generateMarkdown(data) {
    // template literals to find and replace
  return `
  # ${data.title}

  ${addBadge(data.license)}

  ## Description
  ${data.description}

  ## Installation
  The following will be necessary to download in order for the file to run correctly: ${data.install}.

  ## Usage
  ${data.usage}

  ## License
  ${data.license}
  ${addBadge(data.license)}

  ## Contact
  Please feel free to contact me at ${data.email} for questions or feedback. 
  To see other projects, please visit https://github.com/${data.name}/.
`;
}
//exports this script to index
module.exports = generateMarkdown;

