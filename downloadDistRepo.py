import urllib.request
import json
import os
import shutil
import time

# Target directory
output_dir = r'C:\Users\steffensen\Desktop\workspace\erm-sharepoint\dist'

# Clear the dist folder if it exists
if os.path.exists(output_dir):
    print(f'Clearing {output_dir}...')
    shutil.rmtree(output_dir)
    print('Folder cleared')

os.makedirs(output_dir, exist_ok=True)

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
for i, file in enumerate(files_to_download, 1):
    url = base_url + file
    output_path = os.path.join(output_dir, file)
    print(f'[{i}/{len(files_to_download)}] Downloading {file}...')
    
    max_retries = 3
    retry_delays = [0, 10, 30]  # No delay on first attempt, 10s on retry 1, 30s on retry 2
    
    success = False
    for attempt in range(max_retries):
        try:
            if attempt > 0:
                print(f'Retrying in {retry_delays[attempt]} seconds... (attempt {attempt + 1}/{max_retries})')
                time.sleep(retry_delays[attempt])
            
            urllib.request.urlretrieve(url, output_path)
            print(f'Saved to {output_path}')
            success = True
            break
        except Exception as e:
            print(f'Error downloading {file}: {e}')
    
    # If all retries failed, create an empty file
    if not success:
        print(f'Failed to download {file} after {max_retries} attempts. Creating empty file.')
        with open(output_path, 'w') as f:
            pass  # Creates an empty file
        print(f'Created empty file at {output_path}')
    
    # Add a small delay between downloads to avoid rate limiting
    if i < len(files_to_download):
        time.sleep(0.5)

print(f'\nDownload process completed!')