import React from "react";
import { Canvas, spotLight } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Demo3Model from "./Demo3Model";


const Demo3 = () => {
    const bgColor = ({ gl}) => {
        gl.setClearColor('transparent', 0)
    }
    return (
        <div style={{ width: "60vw", height: "60vh" }}>
        <Canvas 
        id='canvas' 
        camera={{ position: [60, 20, 15], fov: 60 }}
        onCreated={bgColor}>
            <ambientLight intensity={0.5} />
            <pointLight position={[-10, -10, -10]} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <OrbitControls/>
            <Demo3Model />
        </Canvas>
        </div>
    )
}


export default Demo3;