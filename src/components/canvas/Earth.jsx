import React, { useEffect, Suspense, useState } from "react";
import { isWebGLAvailable } from "../../utils/isWebGLAvailable";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [webGLAvailable, setWebGLAvailable] = useState(true);

  useEffect(() => {
    setWebGLAvailable(isWebGLAvailable());
  }, []);

  if (!webGLAvailable) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white">
        <p>WebGL is not available on your device.</p>
      </div>
    );
  }

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      data-testid="canvas"
    >
      <Suspense fallback={<CanvasLoader />}>
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;