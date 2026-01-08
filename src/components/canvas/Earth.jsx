import React, { useEffect, Suspense, useState } from "react";
import { isWebGLAvailable } from "../../utils/isWebGLAvailable";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = ({ isMobile, isTablet, isExtraSmall }) => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={isExtraSmall ? 4 : isMobile ? 3.2 : isTablet ? 2.5 : 3.0} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const [webGLAvailable, setWebGLAvailable] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isExtraSmall, setIsExtraSmall] = useState(false);

  useEffect(() => {
    setWebGLAvailable(isWebGLAvailable());

    // Add listeners for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const tabletMediaQuery = window.matchMedia("(max-width: 1024px) and (min-width: 500px)");
    const extraSmallMediaQuery = window.matchMedia("(max-width: 380px)");

    // Set the initial values
    setIsMobile(mediaQuery.matches);
    setIsTablet(tabletMediaQuery.matches);
    setIsExtraSmall(extraSmallMediaQuery.matches);

    // Define callback functions
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    const handleTabletMediaQueryChange = (event) => {
      setIsTablet(event.matches);
    };
    const handleExtraSmallMediaQueryChange = (event) => {
      setIsExtraSmall(event.matches);
    };

    // Add listeners
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    tabletMediaQuery.addEventListener("change", handleTabletMediaQueryChange);
    extraSmallMediaQuery.addEventListener("change", handleExtraSmallMediaQueryChange);

    // Remove listeners
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      tabletMediaQuery.removeEventListener("change", handleTabletMediaQueryChange);
      extraSmallMediaQuery.removeEventListener("change", handleExtraSmallMediaQueryChange);
    };
  }, []);

  if (!webGLAvailable) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-white text-center px-4">
        <div className="max-w-sm">
          <p>WebGL is not available on your browser.</p>
          <p className="mt-2">
            Please visit <a href="https://webglreport.com/?v=2" target="_blank" rel="noreferrer" className="underline hover:text-blue-400">https://webglreport.com/?v=2</a> to check your WebGL status.
          </p>
        </div>
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
        <Earth isMobile={isMobile} isTablet={isTablet} isExtraSmall={isExtraSmall} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;