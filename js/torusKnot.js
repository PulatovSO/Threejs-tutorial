import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Torus knot
const geometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 22);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const knot = new THREE.Mesh(geometry, material);

scene.add(knot)

renderer.render( scene, camera );