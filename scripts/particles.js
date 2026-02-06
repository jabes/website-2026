const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
scene.fog = new THREE.Fog(0x000000, 5, 25);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 0, 5);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

const particleCount = window.innerWidth * 25;
const particlesGeometry = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);
const particleVelocities = [];

for (let i = 0; i < particleCount; i++) {
    particlePositions[i * 3] = (Math.random() - 0.5) * 30;
    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    particleVelocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
    });
}

particlesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(particlePositions, 3)
);

const particlesMaterial = new THREE.PointsMaterial({
    color: 0x00ff00,
    size: 0.08,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
});

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
    requestAnimationFrame(animate);

    const particlePositions = particlesGeometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
        particlePositions[i * 3] += particleVelocities[i].x;
        particlePositions[i * 3 + 1] += particleVelocities[i].y;
        particlePositions[i * 3 + 2] += particleVelocities[i].z;

        if (Math.abs(particlePositions[i * 3]) > 15) {
            particlePositions[i * 3] *= -1;
        }

        if (Math.abs(particlePositions[i * 3 + 1]) > 15) {
            particlePositions[i * 3 + 1] *= -1;
        }

        if (Math.abs(particlePositions[i * 3 + 2]) > 15) {
            particlePositions[i * 3 + 2] *= -1;
        }
    }

    particlesGeometry.attributes.position.needsUpdate = true;


    camera.position.x = 0;
    camera.position.y = window.scrollY / (document.body.offsetHeight - window.innerHeight) * 5;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

animate();
