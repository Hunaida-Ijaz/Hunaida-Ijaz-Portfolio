/* ============ TWINKLING TAG FIELD ============ */
(function(){
  const words = ["</>","{ }","const","React","CSS3","npm i","git push","useState()","Vite","Tailwind","<div>","();","async","JSX","=>","#f2f0ea","className","import","export","git commit"];
  const field = document.getElementById('tagField');
  const count = 46;
  for (let i = 0; i < count; i++){
    const el = document.createElement('span');
    el.className = 'float-tag';
    el.textContent = words[Math.floor(Math.random()*words.length)];
    el.style.top = `${Math.random()*100}%`;
    el.style.left = `${Math.random()*100}%`;
    el.style.fontSize = `${0.68 + Math.random()*0.62}rem`;
    el.style.setProperty('--peak', (0.16 + Math.random()*0.28).toFixed(2));
    el.style.animationDuration = `${3.5 + Math.random()*4.5}s`;
    el.style.animationDelay = `${Math.random()*6}s`;
    if (Math.random() > 0.6) el.style.color = 'var(--text-dim)';
    field.appendChild(el);
  }
})();

/* ============ PROJECT DATA ============ */
const projects = [
  {
    tag: "Fashion · E-Commerce", name: "Luxe-A",
    desc: "A modern clothing e-commerce site built around a stylish, product-first shopping experience.",
    highlight: "HTML · CSS · JS",
    url: "https://hunaida-ijaz.github.io/Luxe-Clothing-Brand/",
    accent: "#cba3b3"
  },
  {
    tag: "Bakery", name: "Sweet Delight",
    desc: "A warm, inviting bakery website built to make every product photograph feel like the main event.",
    highlight: "HTML · CSS · JS",
    url: "https://hunaida-ijaz.github.io/Sweet-Delight/",
    accent: "#d9a86c"
  },
  {
    tag: "Restaurant", name: "CraveHouse",
    desc: "A restaurant site that carries the menu, atmosphere, and brand identity through one responsive interface.",
    highlight: "HTML · CSS · JS",
    url: "https://hunaida-ijaz.github.io/Crave-House-Restaurant/",
    accent: "#c1543a"
  },
  {
    tag: "React · Restaurant", name: "Ember House",
    desc: "A darker, more atmospheric restaurant build in React — reusable components, smooth navigation, glowing detail.",
    highlight: "Built with React",
    url: "https://hunaida-ijaz.github.io/Ember-House-Wood-Fired-Kitchen/",
    accent: "#e8724a"
  },
  {
    tag: "E-Commerce", name: "Brand",
    desc: "A minimal, futuristic storefront focused on product presentation and an intuitive shopping flow.",
    highlight: "HTML · CSS · JS",
    url: "https://hunaida-ijaz.github.io/E-commerce-Clothing-Website/",
    accent: "#6e9fff"
  },
  {
    tag: "Music Player", name: "Aura",
    desc: "A fully functional music player with a visualizer, animated waveforms, and floating audio particles — immersive by design.",
    highlight: "Fully Functional",
    url: "https://hunaida-ijaz.github.io/RhombixTechnologies_Task-2/",
    accent: "#9b7ede"
  },
  {
    tag: "Library Management", name: "BookFusion",
    desc: "A personal library manager for organizing and exploring a book collection — clean, intellectual, digital-shelf feel.",
    highlight: "Rhombix Technologies · Task 3",
    url: "https://hunaida-ijaz.github.io/Rhombix-Technologies-Task-3/",
    accent: "#4fa88a"
  },
  {
    tag: "Recipe Discovery", name: "RecipeFinder",
    desc: "A recipe discovery platform with a rule-based chatbot and a curated desi recipe dataset layered on TheMealDB API.",
    highlight: "AI Chatbot",
    url: "https://hunaida-ijaz.github.io/Recipe-Finder-AI-Chatbot/",
    accent: "#7fb069"
  },
  {
    tag: "Architecture & Interior", name: "Forma Studio",
    desc: "A sophisticated architecture and interior showcase — minimal structures, floor plans, and large-format project imagery.",
    highlight: "Luxury · Minimal",
    url: "https://hunaida-ijaz.github.io/FORMA-Studio-Architecture-Interior-Design/",
    accent: "#b9afa0"
  },
  {
    tag: "Technology Solutions", name: "TechFlow",
    desc: "A clean, professional technology-solutions site built with a focus on structure and modern layout fundamentals.",
    highlight: "Built with HTML & CSS",
    url: "https://hunaida-ijaz.github.io/TechFlow-Modern-Solutions/",
    accent: "#4fd1c5"
  }
];

const grid = document.getElementById('project-grid');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'card reveal';
  card.style.setProperty('--accent', p.accent);
  card.innerHTML = `
    <div class="card-tag">${p.tag}</div>
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <div class="card-foot">
      <span class="card-highlight">${p.highlight}</span>
      ${p.url
        ? `<a class="card-link" href="${p.url}" target="_blank" rel="noopener">View live →</a>`
        : `<span class="card-link disabled">Link pending</span>`}
    </div>
  `;
  // 3D tilt on mouse move
  card.addEventListener('mousemove', (e) => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const rx = ((y / r.height) - 0.5) * -10;
    const ry = ((x / r.width) - 0.5) * 10;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
    card.style.setProperty('--mx', `${(x / r.width) * 100}%`);
    card.style.setProperty('--my', `${(y / r.height) * 100}%`);
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) translateZ(0)';
  });
  grid.appendChild(card);
});

/* ============ SCROLL REVEAL ============ */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ============ THREE.JS HERO CONSTELLATION ============ */
(function(){
  const canvas = document.getElementById('hero-canvas');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 9;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const group = new THREE.Group();
  scene.add(group);

  // ---- Lighting (needed for the shaded character) ----
  const ambient = new THREE.AmbientLight(0x3a3230, 1.1);
  scene.add(ambient);
  const rim = new THREE.DirectionalLight(0xf2f0ea, 0.35);
  rim.position.set(-3, 4, 4);
  scene.add(rim);
  const screenGlow = new THREE.PointLight(0xd9b877, 2.2, 7, 2);
  screenGlow.position.set(0, -1.15, 2.0);
  scene.add(screenGlow);

  // Wireframe icosahedron core (pushed back + up, behind the character)
  const coreGeo = new THREE.IcosahedronGeometry(2.1, 1);
  const coreMat = new THREE.MeshBasicMaterial({ color: 0xc9a96a, wireframe: true, transparent: true, opacity: 0.22 });
  const core = new THREE.Mesh(coreGeo, coreMat);
  core.position.set(0, 1.3, -3.5);
  group.add(core);

  // Scattered points representing the range of crafts
  const starGeo = new THREE.BufferGeometry();
  const starCount = 260;
  const positions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const r = 4.6 + Math.random() * 3.6;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    positions[i*3]   = r * Math.sin(phi) * Math.cos(theta);
    positions[i*3+1] = r * Math.sin(phi) * Math.sin(theta) + 0.8;
    positions[i*3+2] = r * Math.cos(phi) - 2.5;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const starMat = new THREE.PointsMaterial({ color: 0xf2f0ea, size: 0.032, transparent: true, opacity: 0.45 });
  const stars = new THREE.Points(starGeo, starMat);
  group.add(stars);

  // small orbiting nodes
  const nodeGeo = new THREE.SphereGeometry(0.05, 8, 8);
  const nodeMat = new THREE.MeshBasicMaterial({ color: 0xc9a96a });
  const nodes = [];
  for (let i = 0; i < 8; i++) {
    const node = new THREE.Mesh(nodeGeo, nodeMat.clone());
    const radius = 3.6 + (i % 3) * 0.5;
    node.userData = { angle: (i / 8) * Math.PI * 2, radius, speed: 0.12 + Math.random()*0.08, yOff: 1.2 + (Math.random()-0.5)*2.2 };
    group.add(node);
    nodes.push(node);
  }

  // ============ LOW-POLY GIRL AT LAPTOP ============
  const charGroup = new THREE.Group();
  charGroup.position.set(0, -1.85, 1.1);
  charGroup.rotation.y = -0.32;
  group.add(charGroup);

  const skin = new THREE.MeshStandardMaterial({ color: 0xe3b18e, roughness: 0.7 });
  const hairMat = new THREE.MeshStandardMaterial({ color: 0x2a1d16, roughness: 0.6 });
  const clothMat = new THREE.MeshStandardMaterial({ color: 0x5b4569, roughness: 0.8 });
  const deskMat = new THREE.MeshStandardMaterial({ color: 0x1c1a1f, roughness: 0.5, metalness: 0.15 });
  const laptopMat = new THREE.MeshStandardMaterial({ color: 0x232228, roughness: 0.45, metalness: 0.25 });
  const keyMat = new THREE.MeshStandardMaterial({ color: 0x151417, roughness: 0.6 });
  const screenGlowMat = new THREE.MeshBasicMaterial({ color: 0xf0d9a6, transparent: true, opacity: 0.95 });

  // Desk
  const desk = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.1, 1.5), deskMat);
  desk.position.set(0, -0.9, 0);
  charGroup.add(desk);
  const deskLegGeo = new THREE.CylinderGeometry(0.05, 0.05, 1.4, 6);
  [[-1.35,-0.55],[1.35,-0.55]].forEach(([x]) => {
    const leg = new THREE.Mesh(deskLegGeo, deskMat);
    leg.position.set(x, -1.6, 0.6);
    charGroup.add(leg);
  });

  // Laptop base + keyboard
  const laptopBase = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.06, 0.72), laptopMat);
  laptopBase.position.set(0, -0.83, 0.05);
  charGroup.add(laptopBase);
  const keys = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.015, 0.52), keyMat);
  keys.position.set(0, -0.795, 0.05);
  charGroup.add(keys);

  // Laptop screen (hinged group so it tilts naturally)
  const hinge = new THREE.Group();
  hinge.position.set(0, -0.8, -0.30);
  charGroup.add(hinge);
  const screen = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.68, 0.035), laptopMat);
  screen.position.set(0, 0.34, 0);
  hinge.add(screen);
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.53), screenGlowMat);
  glow.position.set(0, 0.34, 0.021);
  hinge.add(glow);
  hinge.rotation.x = -1.68;

  // Torso
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.42, 0.85, 8), clothMat);
  torso.position.set(0, -0.42, -0.55);
  charGroup.add(torso);

  // Head + hair + ponytail
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.34, -0.5);
  charGroup.add(headGroup);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.245, 14, 14), skin);
  headGroup.add(head);
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.27, 14, 14), hairMat);
  hair.scale.set(1.06, 1.02, 1.1);
  hair.position.set(0, 0.035, -0.03);
  headGroup.add(hair);
  const ponytailGroup = new THREE.Group();
  ponytailGroup.position.set(0, 0.08, -0.24);
  headGroup.add(ponytailGroup);
  const ponytail = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.42, 8), hairMat);
  ponytail.rotation.x = Math.PI * 0.92;
  ponytail.position.set(0, -0.16, 0);
  ponytailGroup.add(ponytail);

  // Arms + hands (typing)
  const armMat = clothMat;
  function makeArm(sideX){
    const shoulder = new THREE.Group();
    shoulder.position.set(sideX * 0.33, -0.12, -0.5);
    charGroup.add(shoulder);
    const upperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.07, 0.42, 6), armMat);
    upperArm.position.set(0, -0.2, 0.05);
    upperArm.rotation.x = 0.7;
    shoulder.add(upperArm);
    const handGroup = new THREE.Group();
    handGroup.position.set(sideX * 0.12, -0.72, 0.55);
    charGroup.add(handGroup);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 8), skin);
    handGroup.add(hand);
    return handGroup;
  }
  const leftHand = makeArm(-1);
  const rightHand = makeArm(1);

  // Floating "code bit" particles rising from the screen
  const bitMat = new THREE.MeshBasicMaterial({ color: 0xc9a96a, transparent: true });
  const bits = [];
  for (let i = 0; i < 10; i++){
    const bit = new THREE.Mesh(new THREE.OctahedronGeometry(0.035, 0), bitMat.clone());
    bit.userData = {
      baseX: (Math.random()-0.5) * 0.9,
      baseZ: (Math.random()-0.5) * 0.3 - 0.05,
      speed: 0.15 + Math.random()*0.18,
      phase: Math.random()*Math.PI*2,
      startY: -0.55 + Math.random()*0.2
    };
    bit.position.set(bit.userData.baseX, bit.userData.startY, bit.userData.baseZ);
    charGroup.add(bit);
    bits.push(bit);
  }

  let mouseX = 0, mouseY = 0;
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5);
    mouseY = (e.clientY / window.innerHeight - 0.5);
  });

  const clock = new THREE.Clock();
  function animate(){
    const t = clock.getElapsedTime();
    core.rotation.y = t * 0.08;
    core.rotation.x = t * 0.04;
    stars.rotation.y = t * 0.02;

    nodes.forEach(n => {
      const a = n.userData.angle + t * n.userData.speed;
      n.position.set(Math.cos(a) * n.userData.radius, n.userData.yOff + Math.sin(t*0.6 + a)*0.3, Math.sin(a) * n.userData.radius);
    });

    // typing hands
    leftHand.position.y = -0.72 + Math.sin(t*6.5) * 0.025;
    rightHand.position.y = -0.72 + Math.sin(t*6.5 + 2.4) * 0.025;

    // gentle head bob + ponytail sway
    headGroup.rotation.y = Math.sin(t*0.5) * 0.09;
    headGroup.rotation.z = Math.sin(t*0.35) * 0.03;
    ponytailGroup.rotation.x = Math.sin(t*1.4) * 0.12;
    ponytailGroup.rotation.z = Math.sin(t*0.9) * 0.06;

    // screen glow flicker
    glow.material.opacity = 0.82 + Math.sin(t*3.1) * 0.13;
    screenGlow.intensity = 2.0 + Math.sin(t*3.1) * 0.4;

    // rising code bits near the screen
    bits.forEach(b => {
      const u = b.userData;
      const y = u.startY + ((t * u.speed + u.phase) % 1.1);
      b.position.set(u.baseX + Math.sin(t + u.phase)*0.05, y, u.baseZ);
      b.rotation.x = t + u.phase;
      b.rotation.y = t * 0.7;
      b.material.opacity = Math.max(0, Math.sin(((t * u.speed + u.phase) % 1.1) / 1.1 * Math.PI)) * 0.85;
    });

    group.rotation.y += ( (mouseX * 0.4) - group.rotation.y ) * 0.03;
    group.rotation.x += ( (mouseY * -0.3) - group.rotation.x ) * 0.03;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
