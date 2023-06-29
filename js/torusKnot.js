import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Torus knot
const geometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 22);
const texture = new THREE.TextureLoader().load('../textures/matcap-steel.jpg')
const material = new THREE.MeshMatcapMaterial({ matcap: texture })
const knot = new THREE.Mesh(geometry, material);

scene.add(knot)

// animation
const cursor = {x: 0, y: 0}

window.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX / window.innerWidth -0.5;
    cursor.y = e.clientY / window.innerWidth -0.5;
})

function animate() {
	requestAnimationFrame( animate );

	knot.rotation.y += 0.005;

    camera.position.x += (cursor.x - camera.position.x) / 10;
    camera.position.y += (-cursor.y - camera.position.y) / 10;

	renderer.render( scene, camera );
}

animate();