import datetime
import os


# Function to get the next increment number
def get_next_number(base_name, directory):
    # List all files in the specified directory
    existing_files = [
        f
        for f in os.listdir(directory)
        if f.startswith(base_name) and f.endswith(".md")
    ]
    # Extract numbers from existing filenames
    numbers = []
    for file in existing_files:
        # Extract the number from filenames like `dateMonthYear_hourMinutesSecond_note{number}.md`
        try:
            number_str = file.split("_note")[1].split(".md")[0]
            number = int(number_str)
            numbers.append(number)
        except (IndexError, ValueError):
            continue
    # Return the next number
    return max(numbers, default=0) + 1


# Get the current date and time
now = datetime.datetime.now()
date_str = now.strftime("%d%m%Y_%H%M%S")

# Base name for the file
base_name = f"{date_str}_note"

# Get the directory where the script is located
script_dir = os.path.dirname(os.path.abspath(__file__))

# Get the next number for the filename
next_number = get_next_number(base_name, script_dir)

# Generate the filename with the correct path
filename = os.path.join(script_dir, f"{base_name}{next_number}.md")

# Create an empty file with the generated filename
with open(filename, "w") as file:
    pass  # Just create an empty file

print(f"Created file: {filename}")
