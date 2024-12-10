import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
const container = document.getElementById("model-container");

renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

camera.position.set(1.5, 2, 4);

let model;

const loader = new GLTFLoader();
loader.load(
  "/shibahu.glb",
  (gltf) => {
    model = gltf.scene;
    scene.add(model);

    updateModelPosition();
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  (error) => {
    console.error("An error occurred while loading the model:", error);
  }
);

window.addEventListener('scroll', () => {
  if (!model) return;

  const scrollTop = window.scrollY; // Distance scrolled from top of page
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / scrollHeight;

  model.position.y = -scrollFraction * 5 + 4; // Move vertically
  model.position.x = scrollFraction * 7 - 3; // Move horizontally 

  model.rotation.y = scrollFraction * 2 * Math.PI; // Rotate while moving horizontally
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
