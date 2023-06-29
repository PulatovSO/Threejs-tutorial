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
function animate() {
	requestAnimationFrame( animate );

	knot.rotation.x += 0.01;
	knot.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();