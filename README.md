# Sujal Industries Website

This is the source code for the Sujal Industries premium website, built with React, Vite, and Three.js.

## Prerequisites

- Node.js (v18 or higher recommended)
- Python (for 3D model conversion)

## Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Convert 3D Models (Optional)**
    If you have new `.STEP` files in the root directory, convert them to GLB:
    ```bash
    python scripts/convert_step.py
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to the URL shown (usually `http://localhost:5173`).

## Project Structure

- `src/components/Experience.jsx`: Main 3D scene configuration.
- `src/components/ManufacturingScenes.jsx`: Procedural 3D animations.
- `src/components/CondenserModel.jsx`: Viewer for converted STEP models.
- `public/models/`: Directory for converted GLB models.
