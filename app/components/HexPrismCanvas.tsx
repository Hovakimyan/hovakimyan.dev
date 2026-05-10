"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Wireframe hexagonal prism. Slowly rotates on Y, gentle X bob, mouse
 * parallax on pointermove (capped). Auto-pauses on visibility change.
 * `prefers-reduced-motion` → render a single static frame and skip the
 * animation loop. SSR is bypassed via the dynamic({ssr:false}) wrapper.
 */
export default function HexPrismCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const scene = new THREE.Scene();
    let aspect = container.clientWidth / Math.max(1, container.clientHeight);
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    renderer.setSize(
      container.clientWidth,
      Math.max(1, container.clientHeight),
    );
    container.appendChild(renderer.domElement);

    const geo = new THREE.CylinderGeometry(1, 1, 1.4, 6, 1, true);
    const wireGeo = new THREE.WireframeGeometry(geo);
    const wire = new THREE.LineSegments(
      wireGeo,
      new THREE.LineBasicMaterial({
        color: 0x14b8a6,
        transparent: true,
        opacity: 0.85,
      }),
    );
    const fill = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({
        color: 0x102a43,
        transparent: true,
        opacity: 0.08,
        metalness: 0.6,
        roughness: 0.4,
      }),
    );

    const group = new THREE.Group();
    group.add(fill);
    group.add(wire);
    group.rotation.x = 0.35;
    scene.add(group);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const dir = new THREE.DirectionalLight(0xffffff, 0.6);
    dir.position.set(3, 5, 3);
    scene.add(dir);

    const target = { x: 0.35, y: 0 };
    const onMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      target.x = 0.35 + ny * 0.18;
      target.y = -nx * 0.18;
    };
    container.addEventListener("pointermove", onMove);

    const ro = new ResizeObserver(() => {
      const w = container.clientWidth;
      const h = Math.max(1, container.clientHeight);
      renderer.setSize(w, h);
      aspect = w / h;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
    });
    ro.observe(container);

    let rafId = 0;
    let running = !reduceMotion;
    const start = performance.now();
    const loop = () => {
      const t = performance.now() - start;
      group.rotation.y += 0.003;
      group.rotation.x +=
        (target.x + Math.sin(t * 0.0008) * 0.08 - group.rotation.x) * 0.06;
      group.rotation.z += (target.y - group.rotation.z) * 0.04;
      renderer.render(scene, camera);
      if (running) rafId = requestAnimationFrame(loop);
    };
    if (!reduceMotion) {
      rafId = requestAnimationFrame(loop);
    } else {
      renderer.render(scene, camera);
    }

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(rafId);
      } else if (!reduceMotion) {
        running = true;
        rafId = requestAnimationFrame(loop);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", onVis);
      container.removeEventListener("pointermove", onMove);
      ro.disconnect();
      wireGeo.dispose();
      geo.dispose();
      (wire.material as THREE.LineBasicMaterial).dispose();
      (fill.material as THREE.Material).dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="sh-hex-canvas"
      aria-hidden="true"
    />
  );
}
