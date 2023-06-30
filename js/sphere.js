import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 15;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// sphere geometry
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const sphere = new THREE.Mesh( geometry, material );

scene.add( sphere );

renderer.render( scene, camera );
