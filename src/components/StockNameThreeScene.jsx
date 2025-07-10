import { Canvas, useFrame } from "@react-three/fiber";
import AppleMesh from "../meshes/AppleMesh";
import MicrosoftMesh from "../meshes/MicrosoftMesh";
import NvidiaMesh from "../meshes/NvidiaMesh";
import { useRef } from "react";

function RotatingStocks() {
  const apple = useRef();
  const microsoft = useRef();
  const nvidia = useRef();

  const radius = 3;
  const angleRef = useRef(0);

  useFrame(() => {
    angleRef.current += 0.01;

    const angles = [
      angleRef.current,
      angleRef.current + (2 * Math.PI) / 3,
      angleRef.current + (4 * Math.PI) / 3,
    ];

    [apple, microsoft, nvidia].forEach((ref, i) => {
      const a = angles[i];
      ref.current.position.set(
        radius * Math.cos(a), 0, radius * Math.sin(a)
      );
    });
  });

  return (
    <>
      <AppleMesh ref={apple} />
      <MicrosoftMesh ref={microsoft} />
      <NvidiaMesh ref={nvidia} />
    </>
  );
}

export default function StockNameThreeScene() {
  return (
    <div style={{ zIndex: -1, height: "100%", width: "100%", position: 'fixed', marginRight: "450px" }}>
      <Canvas camera={{ position: [0, 1, 6] }}>
        <ambientLight intensity={0.5} />
        <RotatingStocks />
      </Canvas>
    </div>
  );
}
