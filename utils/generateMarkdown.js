// function to generate markdown for README
function generateMarkdown(data) {
    // template literals to find and replace
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ##Installation
  The following will be necessary to download in order for the file to run correctly: ${data.install}.

  ##Usage
  ${data.usage}

  ##Credits
  ${data.credit}

  ##License
  ${data.license}

`;
}
//exports this script to index
module.exports = generateMarkdown;
