import { useGLTF } from '@react-three/drei'

export default function NvidiaMesh(props) {

    const { scene } = useGLTF('NvidiaTextMesh.glb')

    return (
        <primitive object={scene} {...props}/>
    )

}