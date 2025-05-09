import React, { useEffect, useRef } from 'react';
import './style.css';

export interface BlockProps {
  /** @description id: gs1rn5jmxfvpxptx | type: number | visible: true */
  flowerCount?: number;
  /** @description id: 9ajrz12ik7esfk1z | type: number | visible: true */
  fireflyCount?: number;
  /** @description id: 3ckcfvf6b7zyskk8 | type: number | visible: true */
  starCount?: number;
  /** @description id: x3lqht8ikble1itx | type: number | visible: true */
  cloudCount?: number;
  /** @description id: q0ezdj81v0m14y5m | type: color | visible: true */
  backgroundColor?: string;
  /** @description id: bl0rimfebwbencoj | type: color | visible: true */
  groundColor?: string;
  /** @description id: gioetxz8d13jabz6 | type: color | visible: true */
  fireflyColor?: string;
}

const primes = [3, 5, 7, 11, 13, 17];

interface FlowerStyle {
  colors: string[];
  size: number;
  petals: number;
  type: string;
  center: {
    color: string;
    size: number;
  };
}

interface FlowerStyles {
  [key: number]: FlowerStyle;
}

const flowerStyles: FlowerStyles = {
  3: {
    colors: ["#ff7eb9", "#ff5c9f"],
    size: 24,
    petals: 5,
    type: "type1",
    center: { color: "#ffea00", size: 8 }
  },
  5: {
    colors: ["#7afcff", "#00d8ff"],
    size: 22,
    petals: 6,
    type: "type2",
    center: { color: "#ffcc00", size: 7 }
  },
  7: {
    colors: ["#feff9c", "#ffd800"],
    size: 28,
    petals: 8,
    type: "type1",
    center: { color: "#ff9900", size: 9 }
  },
  11: {
    colors: ["#ff9a3c", "#ff6e00"],
    size: 26,
    petals: 5,
    type: "type3",
    center: { color: "#5e2f00", size: 8 }
  },
  13: {
    colors: ["#ff65a3", "#ff006e"],
    size: 20,
    petals: 7,
    type: "type4",
    center: { color: "#ffe600", size: 6 }
  },
  17: {
    colors: ["#e2a9ff", "#c840ff"],
    size: 30,
    petals: 6,
    type: "type5",
    center: { color: "#ffdf00", size: 10 }
  }
};

interface LeafType {
  radius: string;
  gradient: string;
  veinCount: number;
  veinAngle: number;
}

const leafTypes: LeafType[] = [
  {
    radius: "0 100% 50% 50%",
    gradient: "linear-gradient(135deg, #3a8029, #5cad4a)",
    veinCount: 3,
    veinAngle: -5
  },
  {
    radius: "0 70% 0 50%",
    gradient: "linear-gradient(135deg, #4a9e35, #65c143)",
    veinCount: 5,
    veinAngle: -15
  },
  {
    radius: "50% 100% 50% 30%",
    gradient: "linear-gradient(135deg, #2e5d20, #4a9e35)",
    veinCount: 4,
    veinAngle: 0
  },
  {
    radius: "10% 90% 20% 80%",
    gradient: "linear-gradient(135deg, #3a8029, #65c143)",
    veinCount: 6,
    veinAngle: -10
  },
  {
    radius: "50% 50% 0 50%",
    gradient: "linear-gradient(135deg, #3d8c29, #5cad4a)",
    veinCount: 4,
    veinAngle: -8
  }
];

export default function BlockComponent({
  flowerCount = 70,
  fireflyCount = 20,
  starCount = 200,
  cloudCount = 8,
  backgroundColor = "#0a0e18",
  groundColor = "#2d1d15",
  fireflyColor = "#ffea00"
}: BlockProps) {
  const gardenRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);
  const firefliesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gardenRef.current || !starsRef.current || !cloudsRef.current || !firefliesRef.current) return;

    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      const x = Math.random() * 100;
      const y = Math.random() * 100;
      star.style.left = `${x}%`;
      star.style.top = `${y}%`;

      const duration = 3 + Math.random() * 7;
      const delay = Math.random() * 5;
      const minOpacity = Math.random() * 0.3;
      const maxOpacity = minOpacity + 0.4;

      star.style.setProperty("--twinkle-duration", `${duration}s`);
      star.style.setProperty("--twinkle-delay", `${delay}s`);
      star.style.setProperty("--min-opacity", minOpacity.toString());
      star.style.setProperty("--max-opacity", maxOpacity.toString());

      starsRef.current.appendChild(star);
    }

    // Create clouds
    for (let i = 0; i < cloudCount; i++) {
      const cloud = document.createElement("div");
      cloud.classList.add("cloud");

      const width = 100 + Math.random() * 200;
      const height = 50 + Math.random() * 40;
      cloud.style.width = `${width}px`;
      cloud.style.height = `${height}px`;

      const x = Math.random() * 100;
      const y = Math.random() * 50;
      cloud.style.left = `${x}%`;
      cloud.style.top = `${y}%`;

      const opacity = 0.1 + Math.random() * 0.3;
      cloud.style.opacity = opacity.toString();

      const driftDistance = 100 + Math.random() * 100;
      const driftDuration = 100 + Math.random() * 100;
      cloud.style.setProperty("--drift-distance", `${driftDistance}vw`);
      cloud.style.animation = `cloudDrift ${driftDuration}s linear infinite`;

      cloudsRef.current.appendChild(cloud);
    }

    // Create flowers
    for (let i = 0; i < flowerCount; i++) {
      const depthRange = Math.random();

      if (depthRange < 0.3) {
        createFlower(i * 40, null, 0.8, 1.0, 10, 40);
      } else if (depthRange < 0.6) {
        createFlower(i * 40, null, 0.5, 0.7, 25, 45);
      } else if (depthRange < 0.85) {
        createFlower(i * 40, null, 0.3, 0.5, 35, 45);
      } else {
        createFlower(i * 40, null, 0.1, 0.3, 42, 46);
      }
    }

    // Create fireflies
    for (let i = 0; i < fireflyCount; i++) {
      const firefly = document.createElement("div");
      firefly.classList.add("firefly");
      firefly.style.backgroundColor = fireflyColor;

      const size = 4 + Math.random() * 4;
      firefly.style.width = `${size}px`;
      firefly.style.height = `${size}px`;

      const x = Math.random() * 100;
      const y = Math.random() * 100;
      firefly.style.left = `${x}%`;
      firefly.style.top = `${y}%`;

      const duration = 3 + Math.random() * 4;
      const delay = Math.random() * 2;
      firefly.style.animation = `fireflyFloat ${duration}s ease-in-out infinite`;
      firefly.style.animationDelay = `${delay}s`;

      firefliesRef.current.appendChild(firefly);
    }

    // Set up prime number intervals for flower creation
    primes.forEach((prime) => {
      const interval = prime * 3000;
      setTimeout(() => {
        setInterval(() => {
          const depthRand = Math.random();
          if (depthRand < 0.3) {
            createFlower(0, prime, 0.8, 1.0, 10, 40);
          } else if (depthRand < 0.6) {
            createFlower(0, prime, 0.5, 0.7, 25, 45);
          } else if (depthRand < 0.85) {
            createFlower(0, prime, 0.3, 0.5, 35, 45);
          } else {
            createFlower(0, prime, 0.1, 0.3, 42, 46);
          }
        }, interval);
      }, prime * 1000);
    });

    return () => {
      // Cleanup function to remove all created elements
      if (starsRef.current) starsRef.current.innerHTML = '';
      if (cloudsRef.current) cloudsRef.current.innerHTML = '';
      if (firefliesRef.current) firefliesRef.current.innerHTML = '';
      if (gardenRef.current) gardenRef.current.innerHTML = '';
    };
  }, [flowerCount, fireflyCount, starCount, cloudCount, fireflyColor]);

  const createFlower = (
    delay: number,
    specificPrime: number | null,
    minDepth: number,
    maxDepth: number,
    minHeight: number,
    maxHeight: number
  ) => {
    if (!gardenRef.current) return;

    const flower = document.createElement("div");
    flower.classList.add("flower");

    const x = 5 + Math.random() * 90;
    const depthFactor = minDepth + Math.random() * (maxDepth - minDepth);
    const yPos = minHeight + Math.random() * (maxHeight - minHeight);

    flower.style.bottom = `${yPos}%`;
    flower.style.left = `${x}%`;

    const scale = 0.7 + depthFactor * 0.6;
    flower.style.setProperty("--scale", scale.toString());
    flower.style.opacity = (0.9 + depthFactor * 0.1).toString();
    flower.style.zIndex = Math.round(10 + depthFactor * 90).toString();

    const prime = specificPrime || primes[Math.floor(Math.random() * primes.length)];
    if (typeof prime !== 'number' || !(prime in flowerStyles)) return;
    const flowerStyle = flowerStyles[prime];
    if (!flowerStyle) return;

    const stemHeight = (30 + Math.random() * 50) * (0.8 + depthFactor * 0.4);
    const swayDuration = 8 + Math.random() * 5;
    const swayDelay = Math.random() * 4;
    const swayAmount = (Math.random() * 3 - 1.5) * depthFactor;

    const stem = document.createElement("div");
    stem.classList.add("stem");
    stem.style.height = "0px";
    stem.dataset.fullHeight = `${stemHeight}px`;

    if (Math.random() > 0.3) {
      stem.classList.add("curved");
      const bendAmount = Math.random() * 1.5 + 1.5;
      stem.style.setProperty("--bend-rotation-neg", `-${bendAmount}deg`);
      stem.style.setProperty("--bend-rotation-pos", `${bendAmount}deg`);
      const originShift = Math.random() * 20 + 40;
      stem.style.transformOrigin = `center ${originShift}%`;
      const stemDuration = swayDuration * (1.2 + Math.random() * 0.3);
      stem.style.animation = `stemBend ${stemDuration}s ease-in-out infinite`;
      stem.style.animationDelay = `${swayDelay}s`;
    }

    flower.style.setProperty("--sway-amount", `${swayAmount}deg`);

    // Create leaves first so they appear behind the flower
    const leafCount = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < leafCount; i++) {
      const leaf = document.createElement("div");
      leaf.classList.add("leaf");
      const leafTypeIndex = Math.floor(Math.random() * leafTypes.length);
      const leafType = leafTypes[leafTypeIndex];
      if (!leafType) continue;

      // Position leaves at different heights along the stem
      const heightPercent = 30 + Math.random() * 40;
      leaf.style.bottom = `${heightPercent}%`;
      leaf.style.transform = `rotate(${Math.random() * 60 - 30}deg) scale(0)`;

      const leafShape = document.createElement("div");
      leafShape.classList.add("leaf-shape");
      leafShape.style.borderRadius = leafType.radius;
      leafShape.style.background = leafType.gradient;

      const leafStem = document.createElement("div");
      leafStem.classList.add("leaf-stem");
      leafStem.style.backgroundColor = "#2e5d20";

      const mainVein = document.createElement("div");
      mainVein.classList.add("main-vein");
      mainVein.style.backgroundColor = "#1a3d10";

      for (let j = 0; j < leafType.veinCount; j++) {
        const sideVein = document.createElement("div");
        sideVein.classList.add("side-vein");
        sideVein.style.backgroundColor = "#1a3d10";
        sideVein.style.transform = `rotate(${leafType.veinAngle + (j * 360) / leafType.veinCount}deg)`;
        leafShape.appendChild(sideVein);
      }

      leafShape.appendChild(mainVein);
      leaf.appendChild(leafStem);
      leaf.appendChild(leafShape);
      stem.appendChild(leaf);
    }

    // Create flower head container for petals and center
    const flowerHead = document.createElement("div");
    flowerHead.style.position = "relative";
    flowerHead.classList.add("flower-head");

    // Create petals
    for (let i = 0; i < flowerStyle.petals; i++) {
      const petal = document.createElement("div");
      petal.classList.add("petal", flowerStyle.type);
      if (flowerStyle.colors[0]) {
        petal.style.backgroundColor = flowerStyle.colors[0];
      }
      petal.style.width = `${flowerStyle.size}px`;
      petal.style.height = `${flowerStyle.size}px`;
      petal.style.transform = `rotate(${(i * 360) / flowerStyle.petals}deg) translateY(-${flowerStyle.size / 2}px)`;
      flowerHead.appendChild(petal);
    }

    // Create center
    const center = document.createElement("div");
    center.classList.add("center");
    center.style.backgroundColor = flowerStyle.center.color;
    center.style.width = `${flowerStyle.center.size}px`;
    center.style.height = `${flowerStyle.center.size}px`;
    flowerHead.appendChild(center);

    // Add stem to flower first (so it's behind)
    flower.appendChild(stem);
    // Then add flower head on top
    flower.appendChild(flowerHead);
    // Add the complete flower to garden
    gardenRef.current.appendChild(flower);

    setTimeout(() => {
      stem.style.height = `${stemHeight}px`;
      flower.style.animation = `sway ${swayDuration}s ease-in-out infinite`;
      flower.style.animationDelay = `${swayDelay}s`;
      flower.style.transform = `scale(var(--scale)) rotate(var(--sway-amount))`;

      const petals = flowerHead.querySelectorAll(".petal");
      const center = flowerHead.querySelector(".center");
      const leaves = stem.querySelectorAll(".leaf");

      setTimeout(() => {
        petals.forEach((petal) => {
          const petalElement = petal as HTMLElement;
          const transform = petalElement.style.transform;
          if (!transform) {
            petalElement.style.opacity = "1";
            petalElement.style.transform = `rotate(0deg) translateY(-${flowerStyle.size / 2}px) scale(1)`;
            return;
          }
          petalElement.style.opacity = "1";
          petalElement.style.transform = `${transform.split(" ")[0]} translateY(-${flowerStyle.size / 2}px) scale(1)`;
        });

        if (center) {
          (center as HTMLElement).style.opacity = "1";
          (center as HTMLElement).style.transform = "scale(1)";
        }

        leaves.forEach((leaf) => {
          (leaf as HTMLElement).style.opacity = "1";
          const currentTransform = (leaf as HTMLElement).style.transform;
          if (!currentTransform) return;
          (leaf as HTMLElement).style.transform = currentTransform.replace('scale(0)', 'scale(1)');
        });
      }, 100);
    }, delay);
  };

  return (
    <div className="garden-container" style={{ backgroundColor }}>
      <div className="night-sky">
        <div ref={starsRef} className="stars" />
        <div ref={cloudsRef} className="clouds" />
      </div>
      <div className="garden" ref={gardenRef}>
        <div className="ground" style={{ backgroundColor: groundColor }} />
      </div>
      <div ref={firefliesRef} className="fireflies" />
    </div>
  );
} 