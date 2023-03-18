import { useEffect, useRef } from "react";
import useWindowResize from "@/hooks/use-window-resize";
import createGlobe from "cobe";

export default function Cobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const windowDimensions = useWindowResize();
  console.log(windowDimensions.winHeight, windowDimensions.winWidth);
  const globeSize = windowDimensions.winWidth;
  let globeParam = (() => {
    if (globeSize > 1000) return 2000;
    else if (globeSize > 800) return 800;
    else if (globeSize > 600) return 600;
    else if (globeSize > 400) return 400;
    else return 300;
  })();

  useEffect(() => {
    let phi = 0;
    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: globeParam,
      height: 1700,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [51.5074, -0.1278], size: 0.1 },
        { location: [77.5834249, 27.623135], size: 0.1 },
        { location: [85.35353, 58.623135], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.002;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [globeSize, globeParam]);

  return (
    <div className="fixed right-0">
      <canvas
      ref={canvasRef}
      className="aspect-square h-[800px] w-[600px] max-w-full"
    />
    </div>
  );
}
