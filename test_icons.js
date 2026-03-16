// test_icons.js
const Si = require('react-icons/si');

const icons = [
    'SiFirebase',
    'SiTailwindcss',
    'SiDocker',
    'SiAmazonaws',
    'SiPostgresql',
    'SiAndroid'
];

icons.forEach(name => {
    console.log(`${name}: ${Si[name] ? 'OK' : 'MISSING'}`);
});
