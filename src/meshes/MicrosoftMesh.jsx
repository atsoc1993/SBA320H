import { useGLTF } from '@react-three/drei'

export default function MicrosoftMesh(props) {

    const { scene } = useGLTF('MicrosoftTextMesh.glb')

    return (
        <primitive object={scene} {...props}/>
    )

}