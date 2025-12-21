from pypdf import PdfReader
import os

def extract_text_from_pdf(pdf_path):
    print(f"Extracting text from {pdf_path}...")
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        
        print("--- PDF Content ---")
        print(text)
        print("-------------------")
    except Exception as e:
        print(f"Error reading PDF: {e}")

if __name__ == "__main__":
    pdf_path = "Condensor - 9 x 9 x 4 Row Discharge.pdf"
    if os.path.exists(pdf_path):
        extract_text_from_pdf(pdf_path)
    else:
        print(f"File not found: {pdf_path}")
