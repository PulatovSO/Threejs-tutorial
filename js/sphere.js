import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 15;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild( renderer.domElement );

// sphere
const geometry = new THREE.SphereGeometry(5, 50, 50);
const texture = new THREE.TextureLoader().load('../textures/earth.jpg');
const material = new THREE.MeshMatcapMaterial({map: texture});
const earth = new THREE.Mesh(geometry, material)

scene.add(earth);

const animate = () => {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

animate()
