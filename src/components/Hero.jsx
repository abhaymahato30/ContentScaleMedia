"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import heroDesktop from "../assets/desktop.jpg";
import heroMobile from "../assets/mobile.jpg";

export default function Hero() {
  const mountRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const fullWord = "engine.";

  /* ===================== TYPING EFFECT ===================== */
  useEffect(() => {
    let index = 0;
    let deleting = false;

    const interval = setInterval(() => {
      if (!deleting) {
        setTypedText(fullWord.slice(0, index + 1));
        index++;
        if (index === fullWord.length) {
          setTimeout(() => (deleting = true), 1200);
        }
      } else {
        setTypedText(fullWord.slice(0, index - 1));
        index--;
        if (index === 0) deleting = false;
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  /* ===================== THREE.JS ===================== */
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const imageSrc = isMobile ? heroMobile : heroDesktop;

    /* SCENE */
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    /* TEXTURE */
    const texture = new THREE.TextureLoader().load(imageSrc, () => {
      uniforms.uImageResolution.value.set(
        texture.image.width,
        texture.image.height
      );
    });

    texture.minFilter = THREE.LinearFilter;

    const geometry = new THREE.PlaneGeometry(2, 2);

    /* UNIFORMS */
    const uniforms = {
      uTexture: { value: texture },
      uMouse: { value: new THREE.Vector2(0.5, 0.9) },
      uTime: { value: 0 },
      uResolution: {
        value: new THREE.Vector2(
          container.clientWidth,
          container.clientHeight
        ),
      },
      uImageResolution: { value: new THREE.Vector2(1, 1) },
      uStrength: { value: isMobile ? 0.0 : 0.006 },
      uEnableRipple: { value: !isMobile },
    };

    /* MATERIAL */
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
        uniform vec2 uResolution;
        uniform vec2 uImageResolution;
        uniform float uStrength;
        uniform bool uEnableRipple;

        varying vec2 vUv;

        vec2 coverUV(vec2 uv, vec2 screen, vec2 image) {
          float sr = screen.x / screen.y;
          float ir = image.x / image.y;
          vec2 newUV = uv;

          if (sr < ir) {
            float s = sr / ir;
            newUV.y = uv.y * s + (1.0 - s) * 0.5;
          } else {
            float s = ir / sr;
            newUV.x = uv.x * s + (1.0 - s) * 0.5;
          }
          return newUV;
        }

        void main() {
          vec2 uv = coverUV(vUv, uResolution, uImageResolution);

          if (!uEnableRipple) {
            gl_FragColor = texture2D(uTexture, uv);
            return;
          }

          float dist = distance(uv, uMouse);
          float ripple = sin(dist * 30.0 - uTime * 4.0);
          ripple *= exp(-dist * 8.0);

          vec2 offset = normalize(uv - uMouse) * ripple * uStrength;

          gl_FragColor = texture2D(uTexture, uv + offset);
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    /* MOUSE (DESKTOP ONLY) */
    const onMouseMove = (e) => {
      if (isMobile) return;
      const rect = container.getBoundingClientRect();
      uniforms.uMouse.value.set(
        (e.clientX - rect.left) / rect.width,
        1.0 - (e.clientY - rect.top) / rect.height
      );
    };

    if (!isMobile) {
      window.addEventListener("mousemove", onMouseMove);
    }

    /* RESIZE */
    const onResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      uniforms.uResolution.value.set(
        container.clientWidth,
        container.clientHeight
      );
    };
    window.addEventListener("resize", onResize);

    /* LOOP */
    const clock = new THREE.Clock();
    const animate = () => {
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    /* CLEANUP */
    return () => {
      if (!isMobile) window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  /* ===================== JSX ===================== */
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      <div ref={mountRef} className="absolute inset-0" />

      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      <div className="relative z-10 flex min-h-screen items-end md:items-center px-6 sm:px-10 pb-12 md:pb-0">
        <div className="w-full max-w-[800px]">
          <h1 className="
            text-[2.4rem] sm:text-[3rem] md:text-[3.6rem] lg:text-[4rem]
            font-extrabold
            leading-[1.05]
            tracking-tight
          ">
            Turning content into a
            <span className="block mt-2 text-white/75">
              growth {typedText}
            </span>
          </h1>

          <p className="mt-6 max-w-[480px] text-white/70 text-sm sm:text-base leading-relaxed">
            We help brands, real estate professionals, and financial advisors
            scale visibility, trust, and inbound demand through short-form
            content systems.
          </p>

          <button className="
            mt-8
            inline-flex items-center gap-2
            bg-[#315B46]
            text-[#EFECCE]
            px-6 py-3
            text-xs sm:text-sm
            font-extrabold
            rounded-md
            transition-all duration-300 ease-out
            hover:bg-[#274A39]
            hover:scale-[1.04]
            shadow-[0_10px_30px_rgba(49,91,70,0.45)]
          ">
            Book a Strategy Call →
          </button>
        </div>
      </div>
    </section>
  );
}
