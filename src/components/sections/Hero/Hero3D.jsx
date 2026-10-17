import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const host = containerRef.current;
    if (!host) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    // Mayor FOV y distancia para no cortar los anillos
    const cam = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    cam.position.set(0, 0, 9.8);

    const g = new THREE.Group();
    scene.add(g);

    const wire = (colorHex, opacity = 1) =>
      new THREE.MeshBasicMaterial({
        color: colorHex,
        wireframe: true,
        transparent: true,
        opacity,
      });

    // 1. Núcleo principal
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.65, 2),
      wire(0x52f2f2, 0.8),
    );
    g.add(core);
    const base = core.geometry.attributes.position.array.slice();

    // 2. Capa intermedia
    g.add(
      new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.15, 1),
        new THREE.MeshBasicMaterial({
          color: 0x124673,
          transparent: true,
          opacity: 0.5,
        }),
      ),
    );

    // 3. Capa dorada interior
    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.22, 1),
      wire(0xf2c84b, 0.6),
    );
    g.add(inner);

    // 4. Anillos amplios
    const rings = [
      [2.5, 0x52f2f2, 1.1, 0.2],
      [2.95, 0xf2c84b, 0.5, -0.5],
      [3.35, 0x4aa8ff, 1.4, 0.8],
    ].map(([r, c, rx, ry]) => {
      const m = new THREE.Mesh(
        new THREE.TorusGeometry(r, 0.012, 8, 160),
        new THREE.MeshBasicMaterial({
          color: c,
          transparent: true,
          opacity: 0.8,
        }),
      );
      m.rotation.set(rx, ry, 0);
      g.add(m);
      return m;
    });

    // 5. Nube de estrellas/partículas
    const N = 460;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = 2.2 + Math.random() * 2.0;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      pos.set(
        [
          r * Math.sin(p) * Math.cos(t),
          r * Math.sin(p) * Math.sin(t),
          r * Math.cos(p),
        ],
        i * 3,
      );
    }
    const pg = new THREE.BufferGeometry();
    pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const cloud = new THREE.Points(
      pg,
      new THREE.PointsMaterial({
        color: 0x52f2f2,
        size: 0.035,
        transparent: true,
        opacity: 0.85,
      }),
    );
    g.add(cloud);

    // 6. Satélites
    const sats = [
      [new THREE.OctahedronGeometry(0.26), 0xd93030, 2.7, 0.55],
      [new THREE.TetrahedronGeometry(0.28), 0xf2c84b, 3.1, -0.4],
      [new THREE.BoxGeometry(0.32, 0.32, 0.32), 0x52f2f2, 2.5, 0.7],
      [new THREE.TorusKnotGeometry(0.15, 0.045, 48, 6), 0x4aa8ff, 3.4, -0.3],
    ].map(([geo, c, r, sp], i) => {
      const m = new THREE.Mesh(geo, wire(c, 0.95));
      g.add(m);
      return { m, r, sp, ph: i * 1.7 };
    });

    const handleResize = () => {
      const w = host.clientWidth;
      const h = host.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h, false);
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
    };

    const resizeObs = new ResizeObserver(handleResize);
    resizeObs.observe(host);
    handleResize();

    let mx = 0,
      my = 0,
      cx = 0,
      cy = 0;
    const onMouseMove = (e) => {
      mx = (e.clientX / window.innerWidth) * 2 - 1;
      my = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    let animId;
    const t0 = performance.now();

    const renderLoop = (now) => {
      const t = (now - t0) / 1000;

      const a = core.geometry.attributes.position.array;
      for (let i = 0; i < a.length; i += 3) {
        const x = base[i];
        const y = base[i + 1];
        const z = base[i + 2];
        const s =
          1 +
          0.06 *
            (Math.sin(x * 1.8 + t * 1.1) +
              Math.sin(y * 2.1 + t * 0.9) +
              Math.sin(z * 1.6 + t * 1.3));
        a[i] = x * s;
        a[i + 1] = y * s;
        a[i + 2] = z * s;
      }
      core.geometry.attributes.position.needsUpdate = true;

      cx += (mx * 0.6 - cx) * 0.05;
      cy += (my * 0.4 - cy) * 0.05;
      g.rotation.y = t * 0.12 + cx;
      g.rotation.x = cy;

      inner.rotation.y = -t * 0.4;
      inner.rotation.x = t * 0.25;

      rings.forEach((r, i) => {
        r.rotation.z += 0.002 * (i % 2 ? -1 : 1);
      });

      cloud.rotation.y = -t * 0.04;

      sats.forEach((s) => {
        const an = s.ph + t * s.sp;
        s.m.position.set(
          Math.cos(an) * s.r,
          Math.sin(an * 1.3 + s.ph) * s.r * 0.45,
          Math.sin(an) * s.r,
        );
        s.m.rotation.x += 0.01;
        s.m.rotation.y += 0.015;
      });

      renderer.render(scene, cam);
      animId = requestAnimationFrame(renderLoop);
    };

    animId = requestAnimationFrame(renderLoop);

    return () => {
      resizeObs.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
