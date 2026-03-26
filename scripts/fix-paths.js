import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');
const assetsDir = path.join(distDir, 'assets');

try {
  console.log('Fixing asset paths for GitHub Pages...');
  if (fs.existsSync(assetsDir)) {
    execSync(`perl -pi -e 's|"/images/|"/cies/images/|g' ${assetsDir}/*.js`, { stdio: 'inherit' });
  }
  if (fs.existsSync(path.join(distDir, 'index.html'))) {
    execSync(`perl -pi -e 's|"/images/|"/cies/images/|g' ${distDir}/index.html`, { stdio: 'inherit' });
  }
  console.log('✓ Asset paths fixed');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}


