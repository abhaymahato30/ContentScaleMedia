"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import heroBg from "../assets/hero.avif";

export default function Hero() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    /* ===== SCENE ===== */
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    /* ===== TEXTURE ===== */
    const texture = new THREE.TextureLoader().load(heroBg);
    texture.minFilter = THREE.LinearFilter;

    const geometry = new THREE.PlaneGeometry(2, 2);

    /* ===== UNIFORMS ===== */
    const uniforms = {
      uTexture: { value: texture },

      // ✅ FORCE START FROM BOTTOM CENTER
      uMouse: { value: new THREE.Vector2(0.5, 0.95) },

      uTime: { value: 0 },
    };

    /* ===== MATERIAL ===== */
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform vec2 uMouse;
        uniform float uTime;

        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;

          float dist = distance(uv, uMouse);

          float ripple = sin(dist * 30.0 - uTime * 4.0);
          ripple *= exp(-dist * 8.0);

          vec2 offset = normalize(uv - uMouse) * ripple * 0.015;

          gl_FragColor = texture2D(uTexture, uv + offset);
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    /* ===== MOUSE MOVE (FIXED) ===== */
    let hasMoved = false;

    const onMouseMove = (e) => {
      if (!hasMoved) {
        hasMoved = true; // 👈 ignore fake initial mousemove
      }

      const rect = container.getBoundingClientRect();
      uniforms.uMouse.value.set(
        (e.clientX - rect.left) / rect.width,
        1.0 - (e.clientY - rect.top) / rect.height
      );
    };

    window.addEventListener("mousemove", onMouseMove);

    /* ===== ANIMATION LOOP ===== */
    const clock = new THREE.Clock();
    const animate = () => {
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    /* ===== CLEANUP ===== */
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* THREE CANVAS */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* CONTENT */}
      <div className="absolute bottom-8 inset-x-0 z-10 px-6">
        <div className="mx-auto max-w-[1400px] grid md:grid-cols-2 gap-32">
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Turning content into a
            <span className="block text-white/80">growth engine.</span>
          </h1>

          <div className="flex flex-col items-end text-right gap-5">
            <p className="max-w-[420px] text-white/70 text-sm md:text-base">
              We help brands, real estate professionals, and financial advisors
              scale visibility, trust, and inbound demand through short-form
              content systems.
            </p>
            <button className="bg-white text-black px-6 py-3 text-xs font-extrabold rounded-md">
              👉 Book a Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
