import trimesh
import os
import glob

def convert_step_to_glb(input_path, output_path):
    print(f"Converting {input_path} to {output_path}...")
    try:
        # Load the STEP file
        scene = trimesh.load(input_path, file_type='step')
        
        # If it's a Scene, try to merge all geometries into one
        if isinstance(scene, trimesh.Scene):
            print(f"Merging {len(scene.geometry)} geometries...")
            # Concatenate all geometries in the scene
            if len(scene.geometry) > 0:
                mesh = trimesh.util.concatenate(
                    tuple(trimesh.Trimesh(vertices=g.vertices, faces=g.faces) 
                          for g in scene.geometry.values())
                )
            else:
                print("Warning: Empty scene")
                return
        else:
            mesh = scene
            
        print(f"Exporting merged mesh with {len(mesh.vertices)} vertices...")
        
        # Export to GLB
        mesh.export(output_path)
        print(f"Successfully converted {input_path}")
    except Exception as e:
        print(f"Error converting {input_path}: {e}")

def main():
    # Define input and output directories
    input_dir = "."
    output_dir = "public/models"
    
    # Ensure output directory exists
    os.makedirs(output_dir, exist_ok=True)
    
    # Find all STEP files
    step_files = glob.glob(os.path.join(input_dir, "*.STEP"))
    step_files += glob.glob(os.path.join(input_dir, "*.step"))
    
    if not step_files:
        print("No STEP files found.")
        return

    for step_file in step_files:
        filename = os.path.basename(step_file)
        name_without_ext = os.path.splitext(filename)[0]
        # Replace spaces with underscores for better web compatibility
        safe_name = name_without_ext.replace(" ", "_")
        output_file = os.path.join(output_dir, f"{safe_name}.glb")
        
        convert_step_to_glb(step_file, output_file)

if __name__ == "__main__":
    main()
