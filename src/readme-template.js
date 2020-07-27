//function to generate markdown for README
// const generateQuestions = readmeData => {

// }
const generateDescription = readmeData => {
    if (!readmeData.confirmDescription) {
        return '';
    }
    return `
    # Description

    ${readmeData.Description}
    `
}



const generateTable = readmeData => {
    if (!readmeData.confirmTable) {
        return '';
    }
    return `
    # Table of Contents

    `
}


const generateInstallation = readmeData => {
    if (!readmeData.confirmInstallation) {
        return '';
    }
    return `
    # Installation

    ${readmeData.Installation}
    `
}

const generateUsage = readmeData => {
    if (!readmeData.confirmUsage) {
        return '';
    }

    return `
    # Usage

    ${readmeData.Usage}
    `
}

const generateLicense = readmeData => {
    if (!readmeData.confirmLicense) {
        return '';
    }
    return `
    # License

    ${readmeData.License}
    `
}

const generateContribution = readmeData => {
    if (!readmeData.confirmContributing) {
        return '';
    }
    return `
    # Contributions

    ${readmeData.Contribution}
    `
}

const generateTests = readmeData => {
    if (!readmeData.confirmTests) {
        return '';
    }
    return `
    # Test(s)

    ${readmeData.Test}
    `
}





module.exports = readmeData => {
    console.log("this is the next js", readmeData);
    return `# ${readmeData.Title}

    ${generateDescription(readmeData)}

    ${generateTable(readmeData)}

    ${generateInstallation(readmeData)}

    ${generateUsage(readmeData)}

    ${generateLicense(readmeData)}

    ${generateContribution(readmeData)}

    ${generateTests(readmeData)}
   `
}

//module.exports = generateMarkdown;