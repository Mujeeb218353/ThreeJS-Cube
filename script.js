// Scene

const scene = new THREE.Scene();

// Camera

const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
// (field of view, aspect ratio, near, far )

camera.position.z = 5;
scene.add( camera );

// Mesh -> Geometry, Material

const boxGeometry = new THREE.BoxGeometry( 1, 1, 1 );
// (width, height, depth)

const material = new THREE.MeshBasicMaterial( { color: "skyblue" } );
// (color)

const mesh = new THREE.Mesh( boxGeometry, material );
// (geometry, material)

// Position
// mesh.position.x = 1;
// mesh.position.y = 1;
// mesh.position.z = 4;

// Grow
// mesh.scale.x = 2;
// mesh.scale.y = 2;
// mesh.scale.z = 2;

scene.add( mesh );

// Canvas
const canvas = document.querySelector("#draw");

// Renderer
const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );

let clock = new THREE.Clock();
// Request Animation Frame

function animate() {
    window.requestAnimationFrame(animate);
    // Render (Print the scene with the camera's perspective)
	renderer.render( scene, camera );
    // Rotate
    // mesh.rotation.x += 0.01; // radians
    // mesh.rotation.y += 0.01; 
    // mesh.rotation.z += 0.01; 
    
    // Math.PI = 180 degrees
    // mesh.rotation.x += Math.PI*0.25;
    // mesh.rotation.y += Math.PI/2;

    // mesh.position.y += 0.01;
    mesh.rotation.x = clock.getElapsedTime();
    mesh.rotation.y = clock.getElapsedTime();
    mesh.rotation.z = clock.getElapsedTime();
}
animate();