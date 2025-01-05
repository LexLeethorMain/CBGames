import os

# JavaScript code to be added to the play.html files
js_code = """
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    function backupLocalStorage() {
        const allData = {};
    
        // Collect all localStorage data
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            allData[key] = localStorage.getItem(key);
        }
    
        console.log("All Data to be backed up:", allData);  // Debugging line
    
        // Send the data to the server
        $.ajax({
            url: '/backup-local-storage',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ data: allData }),
            success: function () {
                console.log('Progress backed up successfully.');
            },
            error: function (error) {
                console.error('Error backing up data:', error);
            }
        });
    }

    setInterval(backupLocalStorage, 5000);
</script>
"""

# Path to the directory where the search should begin
directory = "../Collections/HTML/"

# Loop through the directory and its subdirectories (1 level deep)
for root, dirs, files in os.walk(directory):
    # Only go 1 level deep
    if root[len(directory):].count(os.sep) < 1:
        for file in files:
            if file == "play.html":
                # Full file path
                file_path = os.path.join(root, file)

                # Open and read the file
                with open(file_path, "r") as f:
                    content = f.read()

                # Check if the JavaScript code is already present
                if js_code.strip() in content:
                    print(f"JavaScript code already exists in {file_path}. Skipping.")
                    continue

                # Find the position of the closing </html> tag
                pos = content.lower().rfind("</html>")

                if pos != -1:
                    # Insert the JavaScript code just before the closing </html>
                    new_content = content[:pos] + js_code + content[pos:]

                    # Write the modified content back to the file
                    with open(file_path, "w") as f:
                        f.write(new_content)

                    print(f"Appended JS code just before </html> in {file_path}")
                else:
                    print(f"Could not find </html> in {file_path}")
