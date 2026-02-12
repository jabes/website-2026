class ParticleSystem {
    constructor() {
        this.particleCount = 25000;
        this.particleVelocities = [];

        this.initScene();
        this.initCamera();
        this.initRenderer();
        this.createParticles();
        this.addEventListeners();
        this.animate();
    }

    initScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000000);
        this.scene.fog = new THREE.Fog(0x000000, 5, 25);
    }

    initCamera() {
        const fov = 75;
        const aspect = window.innerWidth / window.innerHeight;
        const near = 0.1;
        const far = 1000;
        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this.camera.position.set(0, 0, 5);
    }

    initRenderer() {
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(this.renderer.domElement);
    }

    createParticles() {
        this.particlesGeometry = new THREE.BufferGeometry();
        const particlePositions = new Float32Array(this.particleCount * 3);

        for (let i = 0; i < this.particleCount; i++) {
            particlePositions[i * 3] = (Math.random() - 0.5) * 30;
            particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 30;
            particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 30;

            this.particleVelocities.push({
                x: (Math.random() - 0.5) * 0.02,
                y: (Math.random() - 0.5) * 0.02,
                z: (Math.random() - 0.5) * 0.02,
            });
        }

        this.particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            color: 0x00ff00,
            size: 0.08,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
        });

        this.particles = new THREE.Points(this.particlesGeometry, particlesMaterial);
        this.scene.add(this.particles);
    }

    addEventListeners() {
        window.addEventListener('resize', () => this.onResize());
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    updateParticles() {
        const positions = this.particlesGeometry.attributes.position.array;

        for (let i = 0; i < this.particleCount; i++) {
            positions[i * 3] += this.particleVelocities[i].x;
            positions[i * 3 + 1] += this.particleVelocities[i].y;
            positions[i * 3 + 2] += this.particleVelocities[i].z;

            if (Math.abs(positions[i * 3]) > 15) {
                positions[i * 3] *= -1;
            }

            if (Math.abs(positions[i * 3 + 1]) > 15) {
                positions[i * 3 + 1] *= -1;
            }

            if (Math.abs(positions[i * 3 + 2]) > 15) {
                positions[i * 3 + 2] *= -1;
            }
        }

        this.particlesGeometry.attributes.position.needsUpdate = true;
    }

    updateCamera() {
        this.camera.position.x = 0;
        this.camera.position.y = window.scrollY / (document.body.offsetHeight - window.innerHeight) * 5;
        this.camera.lookAt(this.scene.position);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        this.updateParticles();
        this.updateCamera();
        this.renderer.render(this.scene, this.camera);
    }

    destroy() {
        window.removeEventListener('resize', this.onResize);
        this.renderer.domElement.remove();
        this.particlesGeometry.dispose();
        this.particles.material.dispose();
    }
}

// Initialize only on desktop
if (window.innerWidth > 1024) {
    new ParticleSystem();
}
