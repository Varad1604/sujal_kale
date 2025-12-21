import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Instance, Instances, Float, ContactShadows } from '@react-three/drei'

// --- Ultra-High Fidelity Condenser ---
export const CondenserAssembly = () => {
    const tubesRef = useRef()
    const expansionRef = useRef()

    const finCount = 120
    const finSpacing = 0.04

    useFrame((state) => {
        const t = state.clock.getElapsedTime()

        // Slide Animation
        if (tubesRef.current) {
            const slideProgress = Math.min(1, Math.max(0, (t % 10) / 4))
            tubesRef.current.position.z = THREE.MathUtils.lerp(-6, 0, slideProgress)
        }

        // Expansion Animation
        if (expansionRef.current) {
            const expandProgress = Math.min(1, Math.max(0, ((t % 10) - 4) / 1))
            const scale = THREE.MathUtils.lerp(0.85, 1.02, expandProgress)
            expansionRef.current.scale.set(scale, scale, 1)
        }
    })

    return (
        <group rotation={[0, -Math.PI / 4, 0]}>
            {/* 1. Aluminum Fins (High Density) */}
            <Instances range={finCount}>
                <boxGeometry args={[4, 3, 0.01]} />
                <meshStandardMaterial
                    color="#d0d0d0"
                    metalness={1.0}
                    roughness={0.3}
                    side={THREE.DoubleSide}
                />
                {Array.from({ length: finCount }).map((_, i) => (
                    <Instance key={i} position={[0, 0, i * finSpacing - (finCount * finSpacing) / 2]} />
                ))}
            </Instances>

            {/* 2. Copper Tubes System */}
            <group ref={tubesRef} position={[0, 0, -6]}>
                <group ref={expansionRef}>
                    {/* Main Tubes */}
                    {Array.from({ length: 6 }).map((_, row) =>
                        Array.from({ length: 4 }).map((_, col) => (
                            <group key={`${row}-${col}`} position={[col * 0.8 - 1.2, row * 0.4 - 1, 0]}>
                                <mesh rotation={[Math.PI / 2, 0, 0]}>
                                    <cylinderGeometry args={[0.13, 0.13, 7, 32]} />
                                    <meshStandardMaterial
                                        color="#b87333"
                                        metalness={1}
                                        roughness={0.1}
                                        envMapIntensity={2}
                                    />
                                </mesh>
                            </group>
                        ))
                    )}
                </group>

                {/* Manifolds / Headers (Static relative to tubes) */}
                <mesh position={[-1.8, 0, 3.6]} rotation={[0, 0, 0]}>
                    <cylinderGeometry args={[0.3, 0.3, 3, 32]} />
                    <meshStandardMaterial color="#b87333" metalness={1} roughness={0.1} />
                </mesh>
                <mesh position={[1.8, 0, 3.6]} rotation={[0, 0, 0]}>
                    <cylinderGeometry args={[0.3, 0.3, 3, 32]} />
                    <meshStandardMaterial color="#b87333" metalness={1} roughness={0.1} />
                </mesh>
            </group>

            <ContactShadows opacity={0.5} scale={10} blur={2} far={10} resolution={256} color="#000000" />
        </group>
    )
}

// --- Spring Coiling (Maintained) ---
export const SpringCoiling = () => {
    const springRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (springRef.current) {
            const scaleY = 1 + Math.sin(t * 2) * 0.3
            springRef.current.scale.y = scaleY
            springRef.current.rotation.y = t
        }
    })

    return (
        <group>
            <mesh ref={springRef}>
                <tubeGeometry args={[
                    new THREE.CatmullRomCurve3(
                        Array.from({ length: 100 }, (_, i) => {
                            const angle = i * 0.5
                            const radius = 1.5
                            const height = (i * 0.1) - 5
                            return new THREE.Vector3(Math.cos(angle) * radius, height, Math.sin(angle) * radius)
                        })
                    ),
                    64, 0.2, 16, false
                ]} />
                <meshStandardMaterial color="#555" metalness={0.9} roughness={0.1} />
            </mesh>
            <ContactShadows opacity={0.6} scale={10} blur={2} far={10} />
        </group>
    )
}

// --- Industrial Coating Line (Factory Environment) ---
export const CoatingProcess = () => {
    const conveyorRef = useRef()
    const particlesRef = useRef()

    // Realistic Stamped Part
    const StampedPart = () => (
        <group>
            <mesh rotation={[0, 0, 0]}>
                <boxGeometry args={[1, 1.5, 0.1]} />
                <meshStandardMaterial color="#888" metalness={0.8} roughness={0.3} />
            </mesh>
            <mesh position={[0, 0, 0.05]}>
                <torusGeometry args={[0.3, 0.05, 16, 32]} />
                <meshStandardMaterial color="#888" metalness={0.8} roughness={0.3} />
            </mesh>
        </group>
    )

    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime()

        // Conveyor Animation
        if (conveyorRef.current) {
            conveyorRef.current.children.forEach((hanger) => {
                hanger.position.x -= delta * 2
                if (hanger.position.x < -15) hanger.position.x = 15

                // Physics-based Swing
                hanger.rotation.z = Math.sin(t * 3 + hanger.position.x) * 0.05

                // CED Dip (Color Change)
                if (hanger.position.x > -3 && hanger.position.x < 3) {
                    hanger.position.y = Math.sin((hanger.position.x + 3) * Math.PI / 6 * 2 + Math.PI) * 3
                    const partGroup = hanger.children[1]
                    partGroup.children.forEach(m => {
                        if (m.material) m.material.color.lerp(new THREE.Color("#1a1a1a"), 0.05)
                    })
                }

                // Powder Spray (Color Change)
                if (hanger.position.x > 6 && hanger.position.x < 10) {
                    const partGroup = hanger.children[1]
                    partGroup.children.forEach(m => {
                        if (m.material) m.material.color.lerp(new THREE.Color("#e63946"), 0.05)
                    })
                } else if (hanger.position.x > 14) {
                    // Reset
                    const partGroup = hanger.children[1]
                    partGroup.children.forEach(m => {
                        if (m.material) m.material.color.set("#888")
                    })
                }
            })
        }

        // Particle System
        if (particlesRef.current) {
            particlesRef.current.rotation.y = t * 0.5
            particlesRef.current.position.y = Math.sin(t) * 0.2
        }
    })

    return (
        <group position={[0, -2, 0]}>
            {/* Factory Floor */}
            <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[40, 20]} />
                <meshStandardMaterial color="#222" metalness={0.6} roughness={0.5} />
            </mesh>

            {/* Conveyor Rail */}
            <mesh position={[0, 4, 0]}>
                <boxGeometry args={[30, 0.2, 0.5]} />
                <meshStandardMaterial color="#444" metalness={0.8} />
            </mesh>

            {/* CED Tank */}
            <group position={[0, -2, 0]}>
                <mesh>
                    <boxGeometry args={[6, 3, 4]} />
                    <meshStandardMaterial color="#333" metalness={0.5} roughness={0.2} />
                </mesh>
                {/* Liquid */}
                <mesh position={[0, 1.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeGeometry args={[5.8, 3.8]} />
                    <meshStandardMaterial
                        color="#050505"
                        metalness={0.9}
                        roughness={0.05}
                        transparent
                        opacity={0.95}
                    />
                </mesh>
            </group>

            {/* Powder Booth */}
            <group position={[8, 0, 0]}>
                <mesh position={[0, 0, -2]}>
                    <boxGeometry args={[5, 6, 0.2]} />
                    <meshStandardMaterial color="#555" />
                </mesh>
                {/* Spray Nozzles */}
                <mesh position={[0, 2, 2]} rotation={[0.5, 0, 0]}>
                    <cylinderGeometry args={[0.1, 0.1, 1]} />
                    <meshStandardMaterial color="red" />
                </mesh>
                {/* Powder Cloud */}
                <points ref={particlesRef} position={[0, 0, 0]}>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            count={300}
                            array={new Float32Array(900).map(() => (Math.random() - 0.5) * 4)}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <pointsMaterial size={0.08} color="#e63946" transparent opacity={0.6} sizeAttenuation />
                </points>
            </group>

            {/* Moving Parts */}
            <group ref={conveyorRef}>
                {Array.from({ length: 8 }).map((_, i) => (
                    <group key={i} position={[i * 4 - 14, 0, 0]}>
                        <mesh position={[0, 2, 0]}>
                            <cylinderGeometry args={[0.05, 0.05, 4]} />
                            <meshStandardMaterial color="#666" />
                        </mesh>
                        <group position={[0, 0, 0]}>
                            <StampedPart />
                        </group>
                    </group>
                ))}
            </group>
        </group>
    )
}

// --- High-Fidelity Static Models ---

export const WireRack = () => {
    return (
        <group>
            {/* Outer Frame */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2, 0.08, 16, 100]} />
                <meshStandardMaterial color="#e0e0e0" metalness={1} roughness={0.1} />
            </mesh>
            {/* Grid Wires */}
            {Array.from({ length: 10 }).map((_, i) => (
                <group key={i}>
                    <mesh position={[i * 0.3 - 1.35, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.03, 0.03, 3.5, 8]} />
                        <meshStandardMaterial color="#e0e0e0" metalness={1} roughness={0.1} />
                    </mesh>
                    <mesh position={[0, i * 0.3 - 1.35, 0]}>
                        <cylinderGeometry args={[0.03, 0.03, 3.5, 8]} />
                        <meshStandardMaterial color="#e0e0e0" metalness={1} roughness={0.1} />
                    </mesh>
                </group>
            ))}
            <ContactShadows opacity={0.4} scale={10} blur={2} far={10} />
        </group>
    )
}

export const DryingStand = () => {
    return (
        <group position={[0, -2, 0]}>
            {/* Base Frame */}
            <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[2, 0.1, 16, 100, Math.PI * 2]} />
                <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Vertical Posts */}
            {Array.from({ length: 4 }).map((_, i) => {
                const angle = (i / 4) * Math.PI * 2
                return (
                    <mesh key={i} position={[Math.cos(angle) * 2, 2, Math.sin(angle) * 2]}>
                        <cylinderGeometry args={[0.1, 0.1, 4, 16]} />
                        <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
                    </mesh>
                )
            })}
            {/* Shelves */}
            {[1, 2, 3].map((y) => (
                <mesh key={y} position={[0, y, 0]}>
                    <cylinderGeometry args={[2, 2, 0.05, 32]} />
                    <meshStandardMaterial color="#555" metalness={0.9} roughness={0.1} />
                </mesh>
            ))}
            <ContactShadows opacity={0.5} scale={10} blur={2} far={10} />
        </group>
    )
}

export const PrecisionValve = () => {
    return (
        <group>
            {/* Valve Body - Hexagonal Center */}
            <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[1.2, 1.2, 2.5, 6]} />
                <meshStandardMaterial color="#b87333" metalness={0.9} roughness={0.3} />
            </mesh>

            {/* Flanges with Bolt Holes */}
            {[-1.25, 1.25].map((x, i) => (
                <group key={i} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <mesh>
                        <cylinderGeometry args={[1.8, 1.8, 0.3, 32]} />
                        <meshStandardMaterial color="#a0a0a0" metalness={0.8} roughness={0.4} />
                    </mesh>
                    {/* Bolts */}
                    {Array.from({ length: 8 }).map((_, j) => {
                        const angle = (j / 8) * Math.PI * 2
                        return (
                            <mesh key={j} position={[Math.cos(angle) * 1.4, 0.2, Math.sin(angle) * 1.4]}>
                                <cylinderGeometry args={[0.15, 0.15, 0.5, 6]} />
                                <meshStandardMaterial color="#555" metalness={1} roughness={0.2} />
                            </mesh>
                        )
                    })}
                </group>
            ))}

            {/* Valve Stem Housing */}
            <mesh position={[0, 1.5, 0]}>
                <cylinderGeometry args={[0.6, 0.8, 1.5, 16]} />
                <meshStandardMaterial color="#b87333" metalness={0.9} roughness={0.3} />
            </mesh>

            {/* Threaded Stem */}
            <group position={[0, 2.5, 0]}>
                <mesh>
                    <cylinderGeometry args={[0.2, 0.2, 2, 16]} />
                    <meshStandardMaterial color="#silver" metalness={0.8} roughness={0.2} />
                </mesh>
                {/* Threads (Toruses) */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <mesh key={i} position={[0, i * 0.1 - 1, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[0.2, 0.02, 8, 16]} />
                        <meshStandardMaterial color="#silver" metalness={0.8} roughness={0.2} />
                    </mesh>
                ))}
            </group>

            {/* Handwheel */}
            <group position={[0, 3.5, 0]}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[1.2, 0.15, 16, 32]} />
                    <meshStandardMaterial color="#c0392b" metalness={0.3} roughness={0.6} />
                </mesh>
                {/* Spokes */}
                {[0, Math.PI / 2, Math.PI, -Math.PI / 2].map((angle, i) => (
                    <mesh key={i} rotation={[0, angle, 0]}>
                        <boxGeometry args={[2.4, 0.1, 0.1]} />
                        <meshStandardMaterial color="#c0392b" metalness={0.3} roughness={0.6} />
                    </mesh>
                ))}
            </group>

            <ContactShadows opacity={0.6} scale={10} blur={2} far={10} />
        </group>
    )
}

export const HeatSink = () => {
    return (
        <group>
            {/* Copper Base Plate */}
            <mesh position={[0, -0.5, 0]}>
                <boxGeometry args={[4, 0.5, 4]} />
                <meshStandardMaterial color="#b87333" metalness={1} roughness={0.2} />
            </mesh>

            {/* Aluminum Fins */}
            {Array.from({ length: 25 }).map((_, i) => (
                <group key={i} position={[i * 0.15 - 1.8, 1, 0]}>
                    <mesh>
                        <boxGeometry args={[0.05, 3, 4]} />
                        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.4} />
                    </mesh>
                    {/* Cross-cuts for airflow turbulence */}
                    {Array.from({ length: 5 }).map((_, j) => (
                        <mesh key={j} position={[0, j * 0.6 - 1.2, j % 2 === 0 ? 1 : -1]}>
                            <boxGeometry args={[0.06, 0.1, 1]} />
                            <meshStandardMaterial color="#111" metalness={0.9} roughness={0.4} />
                        </mesh>
                    ))}
                </group>
            ))}

            {/* Heat Pipes */}
            {[-1, 0, 1].map((x, i) => (
                <mesh key={i} position={[x, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.15, 0.15, 4.2, 16]} />
                    <meshStandardMaterial color="#b87333" metalness={1} roughness={0.1} />
                </mesh>
            ))}

            <ContactShadows opacity={0.5} scale={10} blur={2} far={10} />
        </group>
    )
}

export const TransmissionGear = () => {
    const toothCount = 24

    return (
        <group rotation={[Math.PI / 2, 0, 0]}>
            {/* Main Gear Body */}
            <mesh>
                <cylinderGeometry args={[2, 2, 0.8, 64]} />
                <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
            </mesh>

            {/* Inner Recess */}
            <mesh position={[0, 0.1, 0]}>
                <cylinderGeometry args={[1.5, 1.5, 0.8, 64]} />
                <meshStandardMaterial color="#555" metalness={0.7} roughness={0.4} />
            </mesh>

            {/* Teeth (Trapezoidal Profile) */}
            {Array.from({ length: toothCount }).map((_, i) => {
                const angle = (i / toothCount) * Math.PI * 2
                return (
                    <group key={i} rotation={[0, -angle, 0]}>
                        <mesh position={[2.1, 0, 0]}>
                            <boxGeometry args={[0.4, 0.8, 0.2]} />
                            <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
                        </mesh>
                        {/* Tapered tip */}
                        <mesh position={[2.3, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
                            <boxGeometry args={[0.2, 0.8, 0.2]} />
                            <meshStandardMaterial color="#7f8c8d" metalness={0.8} roughness={0.3} />
                        </mesh>
                    </group>
                )
            })}

            {/* Shaft Hub */}
            <mesh position={[0, 0.5, 0]}>
                <cylinderGeometry args={[0.8, 0.8, 0.5, 32]} />
                <meshStandardMaterial color="#95a5a6" metalness={0.9} roughness={0.2} />
            </mesh>

            {/* Shaft Hole with Keyway */}
            <group>
                <mesh>
                    <cylinderGeometry args={[0.4, 0.4, 2, 32]} />
                    <meshStandardMaterial color="#222" metalness={0.5} roughness={0.9} />
                </mesh>
                <mesh position={[0.3, 0, 0]}>
                    <boxGeometry args={[0.2, 2, 0.2]} />
                    <meshStandardMaterial color="#222" metalness={0.5} roughness={0.9} />
                </mesh>
            </group>

            <ContactShadows opacity={0.6} scale={10} blur={2} far={10} />
        </group>
    )
}
