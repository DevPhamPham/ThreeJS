var scene,
  camera,
  fieldOfView,
  aspectRatio,
  nearPlane,
  farPlane,
  HEIGHT,
  WIDTH,
  renderer,
  container;
function scene() {
  // SCENE
  // const scene = new THREE.Scene();
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(Colors.white, 100, 900);
  scene.background = new THREE.Color(0xa8def0);

  // CAMERA
  aspectRatio = WIDTH / HEIGHT;
  fieldOfView = 50;
  nearPlane = 1;
  farPlane = 1000;
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );
  camera.position.x = 0;
  camera.position.z = 200;
  camera.position.y = 0;

  //...............................The X axis is red. The Y axis is green. The Z axis is blue.
  // const axesHelper = new THREE.AxesHelper(2000);
  // scene.add(axesHelper);

  // RENDERER
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setSize(WIDTH / 1, HEIGHT / 1);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
}
