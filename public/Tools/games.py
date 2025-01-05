import os
import json

# Set the base directory where your HTML games are located
html_games_dir = "../Collections/HTML"

# Create a dictionary to store the JSON data structure
games_data = {
    "htmlGames": []
}

# Traverse the HTML games directory
for folder_name in os.listdir(html_games_dir):
    folder_path = os.path.join(html_games_dir, folder_name)
    if os.path.isdir(folder_path):
        index_file = os.path.join(folder_path, "index.html")
        play_file = os.path.join(folder_path, "play.html")

        # Rename index.html to play.html if it exists
        if os.path.isfile(index_file):
            os.rename(index_file, play_file)

        # Create the JSON entry for this game
        game_entry = {
            "route": f"/Collections/HTML/{folder_name}/play",
            "file": f"HTML/{folder_name}/play.html",
            "game": folder_name
        }
        games_data["htmlGames"].append(game_entry)

# Save the JSON data to a file
with open("games.json", "w") as json_file:
    json.dump(games_data, json_file, indent=2)

print("JSON file created successfully as games.json")
