from build123d import *

# Dimensions based on "9\"W x 9.5\"H x 4RO" and extracted text
fin_length = 9 * 25.4      # 228.6 mm (Width in text, usually tube length for coils)
fin_height = 9.5 * 25.4    # 241.3 mm
rows = 4
row_pitch = 19.05          # 0.75 inch approx, or 20.2mm from text "PITCH : 0.8" (20.2mm)"
tube_pitch_y = 20.2        # Using the 20.2mm pitch from text
tube_od = 4.76             # mm

# Calculate depth based on rows
fin_depth = rows * row_pitch

print(f"Generating Condenser Model:")
print(f"  Length: {fin_length} mm")
print(f"  Height: {fin_height} mm")
print(f"  Depth:  {fin_depth} mm")
print(f"  Rows:   {rows}")
print(f"  Pitch:  {tube_pitch_y} mm")

with BuildPart() as condenser:
    # Core Block (Fins) - represented as a solid block for simplicity
    # Centered at origin
    Box(fin_length, fin_depth, fin_height)
    
    # Create Tubes
    # We create a sketch of the tube pattern on the YZ plane (Side view)
    # and extrude it along X (Length)
    with BuildSketch(Plane.YZ) as tube_pattern:
        # Calculate number of tubes that fit in height
        # Height 241mm, Pitch 20.2mm -> ~11-12 tubes
        tubes_high = int(fin_height / tube_pitch_y)
        
        for r in range(rows):
            for t in range(tubes_high):
                # Center the pattern
                y_pos = (t * tube_pitch_y) - (tubes_high * tube_pitch_y / 2) + (tube_pitch_y / 2)
                z_pos = (r * row_pitch) - (fin_depth / 2) + (row_pitch / 2)
                
                # Stagger every other row if needed, but 20.2mm pitch might be square or triangular
                # Let's assume simple grid or slight stagger. 
                # "Discharge" condensers often have specific circuitry.
                # We'll stick to a simple grid for the visual model.
                
                with Locations((z_pos, y_pos)):
                    Circle(radius=tube_od/2)
    
    # Extrude tubes slightly longer than the fin block
    # The fin block is 'fin_length' long (X axis).
    # We want tubes to stick out.
    extrude(amount=fin_length/2 + 15, both=True)

# Export
export_step(condenser.part, "Condensor_9x9x4.STEP")
print("Successfully generated Condensor_9x9x4.STEP")
