const fs = require('fs');
const path = require('path');

const modules = ['ai', 'fa', 'di', 'si', 'io', 'bs', 'bi', 'gr', 'md', 'ri', 'vsc'];

async function run() {
    const results = {};
    for (const mod of modules) {
        try {
            const m = await import(`react-icons/${mod}/index.mjs`);
            const keys = Object.keys(m).filter(k => k.toLowerCase().includes('adobe') || k.toLowerCase().includes('photo') || k.toLowerCase().includes('illustrator'));
            if (keys.length > 0) {
                results[mod] = keys;
            }
        } catch (e) {
            // ignore loading errors for non-existent ones index file paths types
        }
    }
    console.log(JSON.stringify(results, null, 2));
}

run();
