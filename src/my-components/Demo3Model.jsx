import { useGLTF } from '@react-three/drei'

const Demo3Model = () => {
    const demomodel = useGLTF('./models/phone3/scene.gltf')
    return (
    <mesh>
        <primitive
        object={demomodel.scene}
        rotation={[0, -5, 0]}
        scale={0.65}
        />
    </mesh>)
}

export default Demo3Model