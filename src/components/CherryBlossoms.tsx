import { useEffect, useRef } from "react";

export function CherryBlossoms() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = host.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let disposed = false;
    let cleanup = () => {};

    import("three").then((THREE) => {
      if (disposed) return;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.z = 16;
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      element.appendChild(renderer.domElement);

      const petalShape = new THREE.Shape();
      petalShape.moveTo(0, -0.17);
      petalShape.bezierCurveTo(-0.22, -0.04, -0.22, 0.21, -0.055, 0.26);
      petalShape.quadraticCurveTo(0, 0.19, 0.055, 0.26);
      petalShape.bezierCurveTo(0.22, 0.21, 0.22, -0.04, 0, -0.17);
      const geometry = new THREE.ShapeGeometry(petalShape);
      const shades = [0xf3a8b5, 0xf7c4cd, 0xe68fa3, 0xffdae0];
      const materials = shades.map((color) => new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity: 0.72, depthWrite: false }));
      const count = window.innerWidth < 640 ? 15 : 32;
      const petals = Array.from({ length: count }, (_, index) => {
        const mesh = new THREE.Mesh(geometry, materials[index % materials.length]);
        const depth = Math.random() * 7 - 3.5;
        mesh.position.set((Math.random() - 0.5) * 28, (Math.random() - 0.5) * 22, depth);
        mesh.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 6);
        const scale = (0.35 + Math.random() * 0.75) * (depth > 0 ? 1.3 : 0.9);
        mesh.scale.setScalar(scale);
        scene.add(mesh);
        return { mesh, speed: 0.006 + Math.random() * 0.009, drift: (Math.random() - 0.5) * 0.006, phase: Math.random() * 10 };
      });

      const resize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", resize);
      const animate = (time: number) => {
        for (const { mesh, speed, drift, phase } of petals) {
          mesh.position.y -= speed;
          mesh.position.x += drift + Math.sin(time * 0.0006 + phase) * 0.002;
          mesh.rotation.x += 0.003;
          mesh.rotation.y += 0.004;
          mesh.rotation.z += 0.002;
          if (mesh.position.y < -11) {
            mesh.position.y = 11;
            mesh.position.x = (Math.random() - 0.5) * 28;
          }
        }
        renderer.render(scene, camera);
        frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
      cleanup = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("resize", resize);
        geometry.dispose();
        materials.forEach((material) => material.dispose());
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => { disposed = true; cleanup(); };
  }, []);

  return <div ref={host} aria-hidden="true" className="blossom-layer pointer-events-none fixed inset-0 overflow-hidden" />;
}