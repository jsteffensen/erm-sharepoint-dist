import urllib.request
import json
import os
import shutil
import time

# Target directory
output_dir = r'C:\Users\steffensen\Desktop\workspace\erm-sharepoint\dist'

# Ensure the dist folder exists (without clearing it)
os.makedirs(output_dir, exist_ok=True)
print(f'Using directory: {output_dir}')

# GitHub API URL to list repository contents
api_url = 'https://api.github.com/repos/jsteffensen/erm-sharepoint-dist/contents/'

# Fetch repository contents
print('Fetching repository contents...')
with urllib.request.urlopen(api_url) as response:
    files_data = json.loads(response.read())

# Filter for .js, .css, and .aspx files (excluding _fileProcessor.js)
files_to_download = [
    file['name'] for file in files_data 
    if file['type'] == 'file' and 
    file['name'] != '_fileProcessor.js' and (
        file['name'].endswith('.js') or 
        file['name'].endswith('.css') or 
        file['name'].endswith('.aspx')
    )
]

print(f'Found {len(files_to_download)} files to download')

# Base URL for raw files
base_url = 'https://raw.githubusercontent.com/jsteffensen/erm-sharepoint-dist/master/'

# Download files with exponential backoff retry logic
downloaded_count = 0
skipped_count = 0

for i, file in enumerate(files_to_download, 1):
    url = base_url + file
    output_path = os.path.join(output_dir, file)
    
    # Check if file already exists
    if os.path.exists(output_path):
        print(f'[{i}/{len(files_to_download)}] Skipping {file} (already exists)')
        skipped_count += 1
        continue
    
    print(f'[{i}/{len(files_to_download)}] Downloading {file}...')
    
    try:
        urllib.request.urlretrieve(url, output_path)
        print(f'Saved to {output_path}')
        downloaded_count += 1
    except Exception as e:
        print(f'ERROR: Failed to download {file}: {e}')
    
    # Add a small delay between downloads to avoid rate limiting
    if i < len(files_to_download):
        time.sleep(0.5)

print(f'\nDownload process completed!')-e 
print(f'Downloaded: {downloaded_count} files')
print(f'Skipped: {skipped_count} files (already existed)')
