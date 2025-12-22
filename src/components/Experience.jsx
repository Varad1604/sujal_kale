import { OrbitControls, Environment, Float, Stars, PerspectiveCamera, ContactShadows, Center } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useStore } from '../store'
import { useLocation } from 'react-router-dom'
import { CondenserAssembly, SpringCoiling, CoatingProcess, WireRack, DryingStand, PrecisionValve, HeatSink, TransmissionGear } from './ManufacturingScenes'
import { CondenserModel } from './CondenserModel'
import { CondenserFrame } from './CondenserHousing'
import { SpringModel } from './SpringModel'


const HeroObject = ({ visible }) => {
    const meshRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.2
            meshRef.current.rotation.y = t * 0.3
            // Gentle float
            meshRef.current.position.y = Math.sin(t * 0.5) * 0.5
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group ref={meshRef} visible={visible}>
                <mesh>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color="#111" roughness={0.1} metalness={1} />
                </mesh>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[1.8, 0.05, 16, 100]} />
                    <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={2} toneMapped={false} />
                </mesh>
                <mesh rotation={[0, Math.PI / 2, 0]}>
                    <torusGeometry args={[2.2, 0.05, 16, 100]} />
                    <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={2} toneMapped={false} />
                </mesh>
            </group>
        </Float>
    )
}

const FactoryLine = ({ visible }) => {
    const groupRef = useRef()

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Animate in/out based on visibility
            const targetX = visible ? 0 : 15
            groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, delta * 2)
        }
    })

    return (
        <group ref={groupRef} position={[15, -2, 0]}>
            {Array.from({ length: 8 }).map((_, i) => (
                <group key={i} position={[i * 1.5 - 5, 0, 0]}>
                    <mesh rotation={[0, 0, Math.PI / 2]}>
                        <cylinderGeometry args={[0.4, 0.4, 1.2, 32]} />
                        <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
                    </mesh>
                    <mesh position={[0, 0.5, 0]}>
                        <boxGeometry args={[0.8, 0.1, 0.8]} />
                        <meshStandardMaterial color="#ffd700" metalness={1} roughness={0.3} />
                    </mesh>
                </group>
            ))}
            <mesh position={[0, -1, -2]}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
            </mesh>
        </group>
    )
}

const ProductShowcase = ({ visible }) => {
    const groupRef = useRef()

    useFrame((state, delta) => {
        if (groupRef.current) {
            const targetY = visible ? 0 : -10
            groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, delta * 2)
            if (visible) {
                groupRef.current.rotation.y += delta * 0.2
            }
        }
    })

    return (
        <group ref={groupRef} position={[0, -10, 0]}>
            <mesh position={[-3, 0, 0]}>
                <boxGeometry args={[2, 3, 1]} />
                <meshStandardMaterial color="#444" metalness={0.9} roughness={0.2} />
            </mesh>
            {Array.from({ length: 10 }).map((_, i) => (
                <mesh key={i} position={[-3, -1.2 + i * 0.25, 0.6]} rotation={[0, 0, Math.PI / 2]}>
                    <cylinderGeometry args={[0.05, 0.05, 1.8, 16]} />
                    <meshStandardMaterial color="#b87333" metalness={1} roughness={0.3} />
                </mesh>
            ))}
            <mesh position={[3, 0, 0]}>
                <boxGeometry args={[2.5, 1.5, 1.5]} />
                <meshStandardMaterial color="#eee" metalness={0.5} roughness={0.1} />
            </mesh>
            <mesh position={[3, 0, 0.8]}>
                <circleGeometry args={[0.6, 32]} />
                <meshStandardMaterial color="#111" />
            </mesh>
        </group>
    )
}

const ContactScene = ({ visible }) => {
    const groupRef = useRef()

    useFrame((state, delta) => {
        if (groupRef.current) {
            const targetScale = visible ? 1 : 0
            groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 2)
            if (visible) {
                groupRef.current.rotation.y += delta * 0.2
            }
        }
    })

    return (
        <group ref={groupRef} scale={[0, 0, 0]}>
            <mesh>
                <icosahedronGeometry args={[2, 2]} />
                <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.3} />
            </mesh>
            {Array.from({ length: 10 }).map((_, i) => (
                <mesh key={i} position={[
                    Math.sin(i) * 2,
                    Math.cos(i) * 2,
                    Math.sin(i * 2) * 2
                ]}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshBasicMaterial color="#ffd700" />
                </mesh>
            ))}
        </group>
    )
}

const DetailedProductScene = ({ product }) => {
    const groupRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (groupRef.current) {
            // groupRef.current.rotation.y = t * 0.2 // Let user control rotation with OrbitControls
        }
    })

    // Render specific simulation based on product name
    if (product === '5 row condenser') return (
        <Center top>
            <group>
                <CondenserModel modelPath="/models/Ced Coated 9-draco.glb" scale={0.01} />
            </group>
        </Center>
    )
    if (product === 'Industrial Spring') return (
        <Center top>
            <group position={[1.5, 0, 0]}> {/* Offset to center - Spring GLB origin is off-center */}
                <SpringModel scale={0.02} />
            </group>
        </Center>
    )
    if (product === 'Domestic Condenser' || product === '2 row condenser') return (
        <Center top>
            <group>
                <CondenserModel modelPath="/models/Ced Coated 2-draco.glb" scale={0.01} />
            </group>
        </Center>
    )
    if (product === 'Precision Valve') return null
    if (product === 'Suspension Covers') return null
    if (product === 'Transmission Gear') return null

    // Default generic detail view
    return (
        <group ref={groupRef}>
            <mesh>
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial color="#222" metalness={0.9} roughness={0.1} />
            </mesh>
            {Array.from({ length: 20 }).map((_, i) => (
                <mesh key={i} position={[
                    Math.sin(i) * 4,
                    Math.cos(i) * 4,
                    0
                ]}>
                    <boxGeometry args={[0.2, 0.5, 2]} />
                    <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.5} />
                </mesh>
            ))}
            <mesh position={[0, 4, 0]} rotation={[Math.PI, 0, 0]}>
                <coneGeometry args={[1, 4, 32]} />
                <meshBasicMaterial color="#ffd700" transparent opacity={0.2} />
            </mesh>
        </group>
    )
}

export const Experience = () => {
    const { activeProduct, setActiveProduct } = useStore()
    const location = useLocation()

    // Clear active product if navigating away from product detailed views
    useEffect(() => {
        const isProductPage = location.pathname === '/products/automobile-ced' || location.pathname === '/products/refrigeration'
        if (!isProductPage && activeProduct) {
            setActiveProduct(null)
        }
    }, [location, activeProduct, setActiveProduct])

    // Determine which scene to show based on route
    const isHome = location.pathname === '/'
    const isAbout = location.pathname === '/about'
    const isProducts = location.pathname === '/products'
    const isContact = location.pathname === '/contact'
    const isProcess = location.pathname === '/process'

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <OrbitControls
                enabled={!!activeProduct && ['5 row condenser', 'Industrial Spring', '2 row condenser'].includes(activeProduct)}
                enableZoom={true}
                enablePan={true} // Enable pan for full control
                enableRotate={true}
                enableDamping={true}
                dampingFactor={0.05}
                autoRotate={false}
                autoRotateSpeed={0}
                minDistance={0.5} // Allow zooming in very close
                maxDistance={50} // Allow zooming out far
                rotateSpeed={1.0}
                zoomSpeed={1.2} // Responsive zoom
                panSpeed={0.8}
                // Touch controls for mobile
                touches={{
                    ONE: THREE.TOUCH.ROTATE,     // One finger = rotate
                    TWO: THREE.TOUCH.DOLLY_PAN   // Two fingers = zoom + pan
                }}
            />

            <ambientLight intensity={0.5} />
            <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={[1024, 1024]}
            />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#00f0ff" />

            {/* Warehouse environment for better metal reflections */}
            <Environment preset="warehouse" />

            {activeProduct && (location.pathname === '/products/automobile-ced' || location.pathname === '/products/refrigeration') && (
                <DetailedProductScene product={activeProduct} />
            )}

            <EffectComposer disableNormalPass multisampling={0}>
                <Bloom luminanceThreshold={1} intensity={1.5} radius={0.4} />
                {/* Vignette removed for clean background */}
                {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
            </EffectComposer>
        </>
    )
}
