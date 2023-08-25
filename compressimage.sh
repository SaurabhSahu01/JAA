#!/bin/bash

# Function to list image files in a directory and its subdirectories
list_image_files() {
  local directory="$1"
  find "$directory" -type f \( -iname "*.jpeg" -o -iname "*.png" -o -iname "*.jpg" -o -iname "*.gif" -o -iname "*.bmp" \)
}

# Specify the root directory where you want to start searching
root_directory="public"

# Call the function to get a list of image files
image_files=($(list_image_files "$root_directory"))

# Output the list of image file paths
echo "Image Files:"
for file in "${image_files[@]}"; do
  base_name="${file%.*}"
  cwebp -q 50 "$file" -o "${base_name}.webp"
  rm $file
done

echo "conversion complete"
