import * as THREE from 'three';
import gsap from 'gsap';

export function initGlobe() {
    const container = document.getElementById('webgl-globe');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 18;
    camera.position.x = 0; // Center initially

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Wireframe sphere
    const geometry = new THREE.IcosahedronGeometry(7, 3);
    const material = new THREE.MeshBasicMaterial({
        color: 0x13b8c7,
        wireframe: true,
        transparent: true,
        opacity: 0.15
    });
    const sphere = new THREE.Mesh(geometry, material);
    globeGroup.add(sphere);

    // Particles halo
    const particlesGeo = new THREE.BufferGeometry();
    const particlesCount = 800;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = 7 + Math.random() * 2;

        posArray[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        posArray[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        posArray[i * 3 + 2] = r * Math.cos(phi);

        colorArray[i * 3] = 1; // R
        colorArray[i * 3 + 1] = 1; // G
        colorArray[i * 3 + 2] = 1; // B
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeo.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMat = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.4
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    globeGroup.add(particlesMesh);

    // Add Glowing Pins
    const addPin = (lat, lon, label) => {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + 180) * (Math.PI / 180);
        const r = 7;
        const x = -(r * Math.sin(phi) * Math.cos(theta));
        const z = (r * Math.sin(phi) * Math.sin(theta));
        const y = (r * Math.cos(phi));

        // Core dot
        const dotGeo = new THREE.SphereGeometry(0.15, 16, 16);
        const dotMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const dot = new THREE.Mesh(dotGeo, dotMat);
        dot.position.set(x, y, z);

        // Glow ring
        const ringGeo = new THREE.RingGeometry(0.2, 0.4, 32);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0x13b8c7, side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.set(x, y, z);
        ring.lookAt(new THREE.Vector3(x * 2, y * 2, z * 2));

        globeGroup.add(dot);
        globeGroup.add(ring);

        // Animation
        gsap.to(ring.scale, { x: 2.5, y: 2.5, duration: 1.5 + Math.random(), repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(ringMat, { opacity: 0, duration: 1.5 + Math.random(), repeat: -1, yoyo: true, ease: "sine.inOut" });

        // Lines to origin (Tokyo)
        if (label !== 'JP') {
            const jpPhi = (90 - 35.6) * (Math.PI / 180);
            const jpTheta = (139.6 + 180) * (Math.PI / 180);
            const jpx = -(r * Math.sin(jpPhi) * Math.cos(jpTheta));
            const jpz = (r * Math.sin(jpPhi) * Math.sin(jpTheta));
            const jpy = (r * Math.cos(jpPhi));

            // Create an arc
            const p1 = new THREE.Vector3(jpx, jpy, jpz);
            const p2 = new THREE.Vector3(x, y, z);
            const distance = p1.distanceTo(p2);

            // Simple curve
            const midPoint = p1.clone().lerp(p2, 0.5);
            midPoint.normalize().multiplyScalar(r + distance * 0.3); // Raise arc

            const curve = new THREE.QuadraticBezierCurve3(p1, midPoint, p2);
            const points = curve.getPoints(50);
            const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
            const lineMat = new THREE.LineBasicMaterial({ color: 0x13b8c7, transparent: true, opacity: 0.3 });
            const line = new THREE.Line(lineGeo, lineMat);
            globeGroup.add(line);
        }
    };

    // Coordinates
    addPin(35.6, 139.6, 'JP'); // Tokyo
    addPin(39.9, 116.4, 'CN'); // Beijing
    addPin(38.9, -77.0, 'US'); // Washington
    addPin(51.5, -0.1, 'UK'); // London
    addPin(45.4, -75.7, 'CA'); // Ottawa
    addPin(1.3, 103.8, 'SG'); // Singapore
    addPin(52.5, 13.4, 'DE'); // Berlin

    globeGroup.rotation.x = 0.2;
    globeGroup.rotation.y = -1.5;

    let mouseX = 0;
    let mouseY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        globeGroup.rotation.y += 0.002;
        particlesMesh.rotation.y = t * 0.05;
        particlesMesh.rotation.x = Math.sin(t * 0.2) * 0.1;

        gsap.to(camera.position, {
            x: mouseX * 2,
            y: -mouseY * 2,
            duration: 2,
            ease: "power2.out"
        });
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}
