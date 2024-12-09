import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(0, 1, 5); // Adjust as needed


const loader = new GLTFLoader();

loader.load(
  '/shibahu.glb', // Path to your .glb file
  (gltf) => {
    const model = gltf.scene; // The loaded 3D model
    model.position.set(0, 0, 0); // Set position (optional)
    scene.add(model); // Add the model to the scene
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded'); // Progress (optional)
  },
  (error) => {
    console.error('An error occurred while loading the model:', error); // Error handling
  }
);


const controls = new OrbitControls(camera, renderer.domElement);

// Optional settings for controls
controls.enableDamping = true; // Smooth movement
controls.dampingFactor = 0.05; // Adjust damping effect
controls.screenSpacePanning = false; // Prevent panning
controls.minDistance = 1; // Minimum zoom distance
controls.maxDistance = 100; // Maximum zoom distance
controls.maxPolarAngle = Math.PI / 2; // Limit vertical rotation (optional)

// let mouseX = 0, mouseY = 0;

// document.addEventListener('mousemove', (event) => {
//   mouseX = (event.clientX / window.innerWidth) * 2 - 1; // Normalized X (-1 to 1)
//   mouseY = -(event.clientY / window.innerHeight) * 2 + 1; // Normalized Y (-1 to 1)
// });

// const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

// model.position.x = clamp(targetX * 5, -10, 10); // Adjust bounds (-10 to 10)
// model.position.y = clamp(targetY * 5, -10, 10);

// let targetX = 0, targetY = 0;

function animate() {
    requestAnimationFrame(animate);

//    // Interpolate the target position for smooth movement
//    targetX += (mouseX - targetX) * 0.1; // Adjust 0.1 for smoothness (lower is slower)
//    targetY += (mouseY - targetY) * 0.1;
 
//    // Update model's position
//    if (model) { // Ensure the model is loaded
//      model.position.x = targetX * 5; // Scale the movement (adjust 5 as needed)
//      model.position.y = targetY * 5;
//    }

    controls.update()
    renderer.render(scene, camera);
  }
  animate();
  