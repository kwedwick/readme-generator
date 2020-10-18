const generateDescription = readmeData => {
    if (!readmeData.confirmDescription) {
        return "";
    }
    return `## Description

${readmeData.Description}
    `
}

const generateTable = readmeData => {
    if (!readmeData.confirmTable) {
        return "";
    }
    var items = []

    const tableList = readmeData.tableOfContents

    tableList.forEach(i => {
        let item = "* [" + i + "](#" + i + ")";
        items.push(item)
        console.log(i)
    })

    let stringPass = "## Table of Contents \n"
    items.forEach(item => {
        stringPass += item + " " + "\n"
    })
    return `${stringPass}
    `
}


const generateInstallation = readmeData => {
    if (!readmeData.confirmInstallation) {
        return "";
    }
    return `## Installation

${readmeData.Installation}
    `
}

const generateUsage = readmeData => {
    if (!readmeData.confirmUsage) {
        return "";
    }

    return `## Usage

${readmeData.Usage}
    `
}

const generateCredits = readmeData => {
    if (!readmeData.confirmCredits) {
        return "";
    }
    return `## Credits

${readmeData.Contribution}
    `
}

const generateBadge = readmeData => {
    if (!readmeData.confirmLicense) {
        return "";
    }
    var license = readmeData.license
    if (license === "gpl-3.0") {
        license = license.replace('-', '')
    }
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

const generateLicense = readmeData => {
    if (!readmeData.confirmLicense) {
        return "";
    }
    return `## License
    
This project falls under the ${readmeData.license} license. Please visit [${readmeData.license}](https://choosealicense.com/licenses/${readmeData.license}) to learn more.
    `
}

const generateContribution = readmeData => {
    if (!readmeData.confirmContributing) {
        return "";
    }
    return `## Contribution

${readmeData.Contribution}
    `
}

const generateTests = readmeData => {
    if (!readmeData.confirmTests) {
        return "";
    }
    return `## Test

${readmeData.Test}
    `
}

const generateQuestions = readmeData => {
    if (!readmeData.confirmQuestion) {
        return "";
    }
    return `## Questions
The author of this project is ${readmeData.name}. You can reach them via [email](mailto:${readmeData.email}).
To see more projects from this author, visit their [GitHub](https://github.com/${readmeData.github}).
    `
}


module.exports = readmeData => {
    console.log("this is the next js", readmeData);
    return `# ${readmeData.Title}

${generateDescription(readmeData)}

${generateTable(readmeData)}

${generateInstallation(readmeData)}

${generateUsage(readmeData)}

${generateCredits(readmeData)}

${generateBadge(readmeData)}

${generateLicense(readmeData)}

${generateContribution(readmeData)}

${generateTests(readmeData)}

${generateQuestions(readmeData)}
   `
}