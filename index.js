import _ from 'lodash'

const birthYear = [ 1975, 1997, 2002, 1995, 1985];

const driverLicense = _.map(birthYear, licenseYear => licenseYear + 18 )

console.log(driverLicense)