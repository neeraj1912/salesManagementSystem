const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../backend');
const destDir = path.join(__dirname, 'backend-lib');

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    let entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        let srcPath = path.join(src, entry.name);
        let destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            if (entry.name === 'node_modules' || entry.name === '.git') continue;
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

try {
    console.log(`Copying backend from ${srcDir} to ${destDir}...`);
    // Delete existing if any to avoid stale files
    if (fs.existsSync(destDir)) {
        fs.rmSync(destDir, { recursive: true, force: true });
    }

    copyDir(srcDir, destDir);

    // Force CommonJS for the copied backend code
    const pkgJson = JSON.stringify({ type: "commonjs" }, null, 2);
    fs.writeFileSync(path.join(destDir, 'package.json'), pkgJson);
    console.log('Created package.json with type: commonjs in backend-lib');

    console.log('Backend copy completed successfully.');
} catch (error) {
    console.error('Error copying backend:', error);
    process.exit(1);
}
