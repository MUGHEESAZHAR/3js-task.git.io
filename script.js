import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";

let scene, camera, renderer;
let currentShape = null;

scene = new THREE.Scene();
scene.background = new THREE.Color(0x3f388b);

camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
camera.position.z = 5;

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, 500);
document.querySelector(".scene").appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

const ambient = new THREE.AmbientLight(0x404040);
scene.add(ambient);

function clearShape() {
  if (currentShape) {
    scene.remove(currentShape);
  }
}

function addCube() {
  clearShape();

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  currentShape = new THREE.Mesh(geometry, material);

  scene.add(currentShape);
}

function addSphere() {
  clearShape();

  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  currentShape = new THREE.Mesh(geometry, material);

  scene.add(currentShape);
}

function addCone() {
  clearShape();

  const geometry = new THREE.ConeGeometry(1, 2, 32);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  currentShape = new THREE.Mesh(geometry, material);

  scene.add(currentShape);
}

document.querySelector(".cubeBtn").addEventListener("click", addCube);
document.querySelector(".sphereBtn").addEventListener("click", addSphere);
document.querySelector(".coneBtn").addEventListener("click", addCone);

function animate() {
  requestAnimationFrame(animate);

  if (currentShape) {
    currentShape.rotation.x += 0.01;
    currentShape.rotation.y += 0.01;
  }

  renderer.render(scene, camera);
}

animate();
