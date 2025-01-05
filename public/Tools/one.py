import os

# Specify the directory where your folders are located
directory_path = "/home/node/app/CBGames/public/collections/html"  # Change this to your directory path

# Function to rename folders by replacing spaces with underscores
def rename_folders(directory):
    for root, dirs, files in os.walk(directory, topdown=False):
        for dir_name in dirs:
            new_dir_name = dir_name.replace(' ', '_')  # Replace spaces with underscores
            old_dir_path = os.path.join(root, dir_name)
            new_dir_path = os.path.join(root, new_dir_name)

            # Rename the folder if needed
            if old_dir_path != new_dir_path:
                print(f"Renaming: {old_dir_path} -> {new_dir_path}")
                os.rename(old_dir_path, new_dir_path)

# Run the renaming function
rename_folders(directory_path)
