const fs = require('fs');
const path = require('path');

// Configuration
const sourceDirectory = 'C:\\Users\\root\\workspace\\erm-sharepoint\\dist\\erm-sharepoint\\browser';
const targetDirectory = 'C:\\Users\\root\\workspace\\erm-sharepoint-dist';
const searchText = 'url(/images/banner.jpeg';
const replaceText = 'url(https://collab.napma.nato.int/grc/SiteAssets/app/images/banner.jpeg';
const filenamePattern = 'main';
const indexFile = 'index.html';

function clearDirectory() {
    console.log('=== Clearing target directory ===\n');
    
    try {
        // Items to preserve
        const preserveItems = ['.git', 'images', '_fileProcessor.js'];
        
        // Read all items in the directory
        const items = fs.readdirSync(targetDirectory);
        
        let deletedCount = 0;
        
        items.forEach(item => {
            // Skip preserved items
            if (preserveItems.includes(item)) {
                console.log(`○ Preserving: ${item}`);
                return;
            }
            
            const itemPath = path.join(targetDirectory, item);
            const stats = fs.statSync(itemPath);
            
            try {
                if (stats.isDirectory()) {
                    // Delete directory recursively
                    fs.rmSync(itemPath, { recursive: true, force: true });
                    console.log(`✓ Deleted directory: ${item}`);
                } else {
                    // Delete file
                    fs.unlinkSync(itemPath);
                    console.log(`✓ Deleted file: ${item}`);
                }
                deletedCount++;
            } catch (err) {
                console.error(`✗ Error deleting ${item}:`, err.message);
            }
        });
        
        console.log(`\n✓ Cleared ${deletedCount} item(s) from directory\n`);
        
    } catch (error) {
        console.error('Error clearing directory:', error.message);
        process.exit(1);
    }
}

function copyFiles() {
    console.log('=== Copying files from source to target ===\n');
    
    try {
        // Check if source directory exists
        if (!fs.existsSync(sourceDirectory)) {
            console.error(`✗ Source directory not found: ${sourceDirectory}`);
            process.exit(1);
        }
        
        // File extensions to copy
        const allowedExtensions = ['.js', '.html', '.css'];
        
        // Read all items in source directory
        const items = fs.readdirSync(sourceDirectory);
        
        let copiedCount = 0;
        
        items.forEach(item => {
            const sourceItemPath = path.join(sourceDirectory, item);
            const targetItemPath = path.join(targetDirectory, item);
            const stats = fs.statSync(sourceItemPath);
            
            if (stats.isFile()) {
                const ext = path.extname(item).toLowerCase();
                
                if (allowedExtensions.includes(ext)) {
                    try {
                        fs.copyFileSync(sourceItemPath, targetItemPath);
                        console.log(`✓ Copied: ${item}`);
                        copiedCount++;
                    } catch (err) {
                        console.error(`✗ Error copying ${item}:`, err.message);
                    }
                }
            }
        });
        
        console.log(`\n✓ Copied ${copiedCount} file(s) (js, html, css) from source to target\n`);
        
    } catch (error) {
        console.error('Error copying files:', error.message);
        process.exit(1);
    }
}

function findAndReplaceInMainFiles() {
    console.log('=== Processing files with "main" in filename ===\n');
    
    try {
        // Read all files in the directory
        const files = fs.readdirSync(targetDirectory);
        
        // Filter files that contain "main" in their filename
        const matchingFiles = files.filter(file => {
            const stats = fs.statSync(path.join(targetDirectory, file));
            return stats.isFile() && file.toLowerCase().includes(filenamePattern.toLowerCase());
        });
        
        console.log(`Found ${matchingFiles.length} file(s) matching pattern "${filenamePattern}":`);
        matchingFiles.forEach(file => console.log(`  - ${file}`));
        console.log('');
        
        // Process each matching file
        matchingFiles.forEach(filename => {
            const filePath = path.join(targetDirectory, filename);
            
            // Read file content
            let content = fs.readFileSync(filePath, 'utf8');
            
            // Count occurrences
            const occurrences = (content.match(new RegExp(searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
            
            if (occurrences > 0) {
                // Replace all occurrences
                const newContent = content.replace(new RegExp(searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replaceText);
                
                // Write back to file
                fs.writeFileSync(filePath, newContent, 'utf8');
                
                console.log(`✓ ${filename}: Replaced ${occurrences} occurrence(s)`);
            } else {
                console.log(`○ ${filename}: No occurrences found`);
            }
        });
        
    } catch (error) {
        console.error('Error processing main files:', error.message);
        process.exit(1);
    }
}

function formatIndexHtml() {
    console.log('\n=== Processing index.html ===\n');
    
    try {
        const indexPath = path.join(targetDirectory, indexFile);
        
        // Check if index.html exists
        if (!fs.existsSync(indexPath)) {
            console.log(`✗ ${indexFile} not found in directory`);
            return;
        }
        
        // Read file content
        let content = fs.readFileSync(indexPath, 'utf8');
        
        // 1. Insert SharePoint page directive as first line
        const pageDirective = '<%@ Page Language="C#" Inherits="Microsoft.SharePoint.WebControls.LayoutsPageBase" %>\n';
        if (!content.startsWith('<%@ Page')) {
            content = pageDirective + content;
            console.log(`✓ Inserted SharePoint page directive as first line`);
        } else {
            console.log(`○ SharePoint page directive already exists`);
        }
        
        // 2. Replace <title> tag with title and base tags
        // First, remove any existing <base href="/"> tag
        content = content.replace(/<base href="\/">/g, '');
        
        const titleMatch = content.match(/<title>.*?<\/title>/);
        if (titleMatch) {
            const newTitleAndBase = '  <title>GRC Portal</title>\n  <base href="/grc/SitePages/app.aspx/">';
            content = content.replace(/<title>.*?<\/title>/, newTitleAndBase);
            console.log(`✓ Removed existing base href="/" and replaced <title> tag with new title and base href`);
        } else {
            console.log(`○ No <title> tag found`);
        }
        
        // 3. Count occurrences of <link tags
        const linkMatches = content.match(/<link /g);
        const linkOccurrences = linkMatches ? linkMatches.length : 0;
        
        // 4. Count occurrences of <script tags
        const scriptMatches = content.match(/<script/g);
        const scriptOccurrences = scriptMatches ? scriptMatches.length : 0;
        
        if (linkOccurrences > 0) {
            // Replace all <link with newline + <link
            content = content.replace(/<link /g, '\n<link ');
            console.log(`✓ Formatted ${linkOccurrences} <link> tag(s) to appear on separate lines`);
        } else {
            console.log(`○ No <link> tags found`);
        }
        
        if (scriptOccurrences > 0) {
            // Replace all <script with newline + <script
            content = content.replace(/<script/g, '\n<script');
            console.log(`✓ Formatted ${scriptOccurrences} <script> tag(s) to appear on separate lines`);
        } else {
            console.log(`○ No <script> tags found`);
        }
        
        // 5. Insert custom SharePoint override styles after the last </style> tag
        const customStyles = `\n  <style>
    
    html, body { height:100%; }
    
    /* CRITICAL: Full page bleed - hide SharePoint chrome */
    #s4-workspace { margin: 0 !important; }
    #s4-ribbonrow, 
    #suiteBar, 
    #titleAreaBox,
    .ms-breadcrumb-box,
    #sideNavBox,
    #contentBox,
    body #s4-titlerow,
    .ms-cui-topBar2,
    #sideNavBox { 
      display: none !important; 
    }
    
    body { overflow: auto !important; }
  </style>`;
        
        // Find the last occurrence of </style>
        const lastStyleIndex = content.lastIndexOf('</style>');
        if (lastStyleIndex !== -1) {
            // Check if custom styles are already present
            if (!content.includes('/* CRITICAL: Full page bleed - hide SharePoint chrome */')) {
                const insertPosition = lastStyleIndex + '</style>'.length;
                content = content.slice(0, insertPosition) + customStyles + content.slice(insertPosition);
                console.log(`✓ Inserted custom SharePoint override styles after last </style> tag`);
            } else {
                console.log(`○ Custom SharePoint override styles already exist`);
            }
        } else {
            console.log(`○ No </style> tag found to insert custom styles after`);
        }
        
        // 6. Replace <body> with <body> + FormDigest
        if (content.includes('<body>') && !content.includes('<SharePoint:FormDigest')) {
            content = content.replace('<body>', '<body>\n<SharePoint:FormDigest runat="server" />');
            console.log(`✓ Replaced <body> tag with body + SharePoint FormDigest control`);
        } else if (content.includes('<SharePoint:FormDigest')) {
            console.log(`○ SharePoint FormDigest already exists`);
        } else {
            console.log(`○ No <body> tag found`);
        }
        
        // 7. Replace relative paths with absolute URLs for styles, chunks, and main files
        let pathReplacements = 0;
        
        // Replace href="styles
        const stylesMatches = (content.match(/href="styles/g) || []).length;
        if (stylesMatches > 0) {
            content = content.replace(/href="styles/g, 'href="https://collab.napma.nato.int/grc/SiteAssets/app/styles');
            pathReplacements += stylesMatches;
        }
        
        // Replace href="chunk
        const chunkMatches = (content.match(/href="chunk/g) || []).length;
        if (chunkMatches > 0) {
            content = content.replace(/href="chunk/g, 'href="https://collab.napma.nato.int/grc/SiteAssets/app/chunk');
            pathReplacements += chunkMatches;
        }
        
        // Replace src="main
        const mainMatches = (content.match(/src="main/g) || []).length;
        if (mainMatches > 0) {
            content = content.replace(/src="main/g, 'src="https://collab.napma.nato.int/grc/SiteAssets/app/main');
            pathReplacements += mainMatches;
        }
        
        if (pathReplacements > 0) {
            console.log(`✓ Replaced ${pathReplacements} relative path(s) with absolute URLs (styles: ${stylesMatches}, chunk: ${chunkMatches}, main: ${mainMatches})`);
        } else {
            console.log(`○ No relative paths found to replace`);
        }
        
        // Write back to file
        fs.writeFileSync(indexPath, content, 'utf8');
        console.log(`\n✓ ${indexFile} updated successfully`);
        
    } catch (error) {
        console.error('Error processing index.html:', error.message);
        process.exit(1);
    }
}

// Run the script
clearDirectory();
copyFiles();
findAndReplaceInMainFiles();
formatIndexHtml();

// Copy index.html to app.aspx
console.log('\n=== Copying index.html to app.aspx ===\n');
try {
    const indexPath = path.join(targetDirectory, indexFile);
    const aspxPath = path.join(targetDirectory, 'app.aspx');
    
    if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, aspxPath);
        console.log(`✓ Copied ${indexFile} to app.aspx`);
    } else {
        console.log(`✗ ${indexFile} not found, cannot copy to app.aspx`);
    }
} catch (error) {
    console.error('Error copying file:', error.message);
    process.exit(1);
}

console.log('\n=== All operations complete! ===');