from pdfminer.high_level import extract_text
from pdfminer.layout import LAParams
import re

pdf_path = "Condensor - 9 x 9 x 4 Row Discharge.pdf"

try:
    # Extract text with layout analysis to preserve spatial relationships
    text = extract_text(pdf_path, laparams=LAParams())
    print("--- Extracted Text ---")
    print(text)
    
    # Try to find numbers that look like dimensions
    print("\n--- Potential Dimensions ---")
    # Look for patterns like "123.4" or "12 x 34"
    dimensions = re.findall(r'\d+\.?\d*', text)
    # Filter for reasonable sizes (e.g., > 100 for length, < 10 for tube dia)
    for dim in dimensions:
        try:
            val = float(dim)
            if 100 < val < 2000:
                print(f"Possible Length/Width: {val}")
            elif 0 < val < 20:
                print(f"Possible Tube/Fin: {val}")
        except:
            pass

except Exception as e:
    print(f"Error: {e}")
