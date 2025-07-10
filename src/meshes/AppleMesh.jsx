import { useGLTF } from '@react-three/drei'

export default function AppleMesh(props) {

    const { scene } = useGLTF('AppleTextMesh.glb')

    return (
        <primitive object={scene} {...props}/>
    )

}