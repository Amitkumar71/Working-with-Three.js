import * as THREE from "three";

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(70, window.innerHeight/window.innerWidth,0.01,1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerHeight,window.innerWidth)
document.body.appendChild(renderer.domElement);

const geometry =new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color : 0xCD5C5C})
const cube = new THREE.Mesh(geometry,material);
scene.add( cube );
camera.position.z=5;

function animate(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render (scene,camera)
}
renderer.setAnimationLoop(animate)