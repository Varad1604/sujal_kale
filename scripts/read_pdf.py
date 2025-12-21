import pypdf
import os

pdf_path = "Condensor - 9 x 9 x 4 Row Discharge.pdf"

try:
    reader = pypdf.PdfReader(pdf_path)
    print(f"Number of pages: {len(reader.pages)}")
    for i, page in enumerate(reader.pages):
        print(f"--- Page {i+1} ---")
        print(page.extract_text(extraction_mode="layout"))
except Exception as e:
    print(f"Error reading PDF: {e}")
