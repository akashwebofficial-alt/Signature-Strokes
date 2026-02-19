import re

file_path = r'c:\Users\Dell\OneDrive\Desktop\Quantum\Ecommerce\Signature-Stroke\src\data\products.js'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Remove lines 3072 to 3406 (1-based line numbers in my Read output)
# Line 3072 starts the id: 274 object
# Line 3406 is the ending }, of the id: 303 object

# In 0-indexed:
# Line 3072 is index 3071
# Line 3406 is index 3405

# Let's verify content at these indices
print(f"Start removal: {lines[3071].strip()}") # Expected {
print(f"First ID: {lines[3072].strip()}") # Expected id: 274,
print(f"Last ID: {lines[3393].strip()}") # Expected id: 303,
print(f"End removal: {lines[3405].strip()}") # Expected },

# Slice out the lines
new_lines = lines[:3071] + lines[3406:]

# Now re-index from the point of removal onwards
# The next object starts at what was line 3407 (now index 3071)
# Its ID was 304, it should become 274

current_id = 274
id_pattern = re.compile(r'^(\s+id:\s*)(\d+)(,.*)$')

final_lines = []
for line in new_lines:
    match = id_pattern.match(line)
    if match:
        old_id = int(match.group(2))
        if old_id >= 304:
            new_line = f"{match.group(1)}{current_id}{match.group(3)}\n"
            final_lines.append(new_line)
            current_id += 1
        else:
            final_lines.append(line)
    else:
        final_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(final_lines)

print(f"Successfully re-indexed up to {current_id - 1}")
