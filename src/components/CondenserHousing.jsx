import React from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export function CondenserHousing({ width = 10, height = 10, depth = 4, ...props }) {
    const casingThickness = 0.2;

    return (
        <group {...props}>
            {/* Main Casing Shell (Sheet Metal) */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[width + casingThickness, height + casingThickness, depth]} />
                <meshStandardMaterial
                    color="#a0a0a0"
                    metalness={0.8}
                    roughness={0.4}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    );
}

export function CondenserFrame({ width = 6, height = 12, depth = 2 }) {
    const thickness = 0.2; // Thinner plates
    const hWireCount = 80; // Ultra high density
    const vWireCount = 14;

    return (
        <group>
            {/* Top Plate (Black Metal with Flanges) */}
            <group position={[0, height / 2 + thickness / 2, 0]}>
                <mesh>
                    <boxGeometry args={[width + 0.5, thickness, depth + 1]} />
                    <meshStandardMaterial color="#111" metalness={0.7} roughness={0.3} />
                </mesh>
                {/* Flange lips */}
                <mesh position={[0, -0.2, depth / 2 + 0.5]}>
                    <boxGeometry args={[width + 0.5, 0.4, 0.1]} />
                    <meshStandardMaterial color="#111" metalness={0.7} roughness={0.3} />
                </mesh>
                <mesh position={[0, -0.2, -depth / 2 - 0.5]}>
                    <boxGeometry args={[width + 0.5, 0.4, 0.1]} />
                    <meshStandardMaterial color="#111" metalness={0.7} roughness={0.3} />
                </mesh>
            </group>

            {/* Bottom Plate (Black Metal with Flanges) */}
            <group position={[0, -height / 2 - thickness / 2, 0]}>
                <mesh>
                    <boxGeometry args={[width + 0.5, thickness, depth + 1]} />
                    <meshStandardMaterial color="#111" metalness={0.7} roughness={0.3} />
                </mesh>
                <mesh position={[0, 0.2, depth / 2 + 0.5]}>
                    <boxGeometry args={[width + 0.5, 0.4, 0.1]} />
                    <meshStandardMaterial color="#111" metalness={0.7} roughness={0.3} />
                </mesh>
                <mesh position={[0, 0.2, -depth / 2 - 0.5]}>
                    <boxGeometry args={[width + 0.5, 0.4, 0.1]} />
                    <meshStandardMaterial color="#111" metalness={0.7} roughness={0.3} />
                </mesh>
            </group>

            {/* Wire Grid System (Front and Back) */}
            {[-1, 1].map((faceDir, faceIndex) => (
                <group key={faceIndex} position={[0, 0, faceDir * (depth / 2 + 0.05)]}>
                    {/* Horizontal Wires (The main cooling fins) */}
                    {Array.from({ length: hWireCount }).map((_, i) => (
                        <mesh key={`h-${i}`} position={[0, (i * (height / hWireCount)) - height / 2 + 0.1, 0]}>
                            <boxGeometry args={[width + 0.2, 0.02, 0.02]} />
                            <meshStandardMaterial color="#111" metalness={0.6} roughness={0.4} />
                        </mesh>
                    ))}

                    {/* Vertical Support Wires */}
                    {Array.from({ length: vWireCount }).map((_, i) => (
                        <mesh key={`v-${i}`} position={[(i * (width / vWireCount)) - width / 2 + 0.25, 0, faceDir * 0.02]}>
                            <boxGeometry args={[0.04, height, 0.04]} />
                            <meshStandardMaterial color="#111" metalness={0.6} roughness={0.4} />
                        </mesh>
                    ))}
                </group>
            ))}

            {/* Side Brackets (U-Clips holding the assembly) */}
            {[-1, 1].map((side) => (
                <group key={side} position={[side * (width / 2 + 0.1), 0, 0]}>
                    {/* Thin Vertical Strip (Not blocking U-bends) */}
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[0.1, height, 0.4]} />
                        <meshStandardMaterial color="#111" metalness={0.7} roughness={0.3} />
                    </mesh>

                    {/* U-Clips */}
                    {[height / 2 - 1.5, -height / 2 + 1.5].map((y, i) => (
                        <group key={i} position={[0, y, 0]}>
                            {/* U-Shape */}
                            <mesh position={[side * 0.1, 0, 0]}>
                                <boxGeometry args={[0.4, 1, 0.6]} />
                                <meshStandardMaterial color="#111" metalness={0.7} roughness={0.3} />
                            </mesh>

                            {/* Screw Head */}
                            <group position={[side * 0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                                <mesh>
                                    <cylinderGeometry args={[0.12, 0.12, 0.1, 16]} />
                                    <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
                                </mesh>
                                <mesh position={[0, 0.06, 0]}>
                                    <boxGeometry args={[0.04, 0.04, 0.15]} />
                                    <meshStandardMaterial color="#000" />
                                </mesh>
                                <mesh position={[0, 0.06, 0]}>
                                    <boxGeometry args={[0.15, 0.04, 0.04]} />
                                    <meshStandardMaterial color="#000" />
                                </mesh>
                            </group>
                        </group>
                    ))}
                </group>
            ))}

            {/* Inlet/Outlet Tubes (Copper) */}
            {/* Top Inlet - Curved */}
            <group position={[width / 2 - 1.5, height / 2 + 1.5, 0]}>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <torusGeometry args={[1, 0.15, 16, 32, Math.PI / 2]} />
                    <meshStandardMaterial color="#b87333" metalness={0.8} roughness={0.2} />
                </mesh>
                <mesh position={[0, 1, 0]}>
                    <cylinderGeometry args={[0.15, 0.15, 1, 16]} />
                    <meshStandardMaterial color="#b87333" metalness={0.8} roughness={0.2} />
                </mesh>
                <mesh position={[0, 1.5, 0]}>
                    <cylinderGeometry args={[0.18, 0.18, 0.3, 16]} />
                    <meshStandardMaterial color="#eee" metalness={0.1} roughness={0.8} />
                </mesh>
            </group>

            {/* Side Outlet - Straight */}
            <group position={[width / 2 + 1.5, height / 2 - 2, 0]}>
                <mesh rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.15, 0.15, 3, 16]} />
                    <meshStandardMaterial color="#b87333" metalness={0.8} roughness={0.2} />
                </mesh>
                <mesh position={[1.5, 0, 0]} rotation={[0, 0, 0]}>
                    <cylinderGeometry args={[0.18, 0.18, 0.3, 16]} />
                    <meshStandardMaterial color="#eee" metalness={0.1} roughness={0.8} />
                </mesh>
            </group>
        </group>
    )
}
