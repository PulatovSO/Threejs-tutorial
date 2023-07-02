import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 15;

const canvas = document.querySelector('.canvas');
const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio)


// sphere
const geometry = new THREE.SphereGeometry(5, 50, 50);
const texture = new THREE.TextureLoader().load('../textures/earth.jpg');
const material = new THREE.MeshStandardMaterial({map: texture}); // enables light
// const material = new THREE.MeshMatcapMaterial({map: texture});
const earth = new THREE.Mesh(geometry, material)

// light
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 5, 10);

scene.add(earth, light)

// controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enableZoom = false;
controls.enablePan = false;

const animate = () => {
    requestAnimationFrame( animate );

    earth.rotation.y += 0.005;

    renderer.render( scene, camera );
}

animate()
