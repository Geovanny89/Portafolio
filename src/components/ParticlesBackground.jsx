// import React, { useCallback } from "react";
// import { loadFull } from "tsparticles";
// import { Particles } from "react-tsparticles";

// export default function ParticlesBackground({ theme }) {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         background: {
//           color: {
//             value: theme === "dark" ? "#0d0d0d" : "#ffffff",
//           },
//         },
//         fpsLimit: 60,
//         interactivity: {
//           events: {
//             onClick: { enable: true, mode: "push" },
//             onHover: { enable: true, mode: "repulse" },
//             resize: true,
//           },
//           modes: {
//             push: { quantity: 3 },
//             repulse: { distance: 100, duration: 0.4 },
//           },
//         },
//         particles: {
//           color: {
//             value: theme === "dark" ? "#00adb5" : "#007bff",
//           },
//           links: {
//             color: theme === "dark" ? "#00adb5" : "#007bff",
//             distance: 150,
//             enable: true,
//             opacity: 0.4,
//             width: 1,
//           },
//           move: {
//             enable: true,
//             speed: 1.5,
//             direction: "none",
//             outModes: { default: "out" },
//           },
//           number: {
//             value: 80,
//             density: { enable: true, area: 800 },
//           },
//           opacity: { value: 0.5 },
//           shape: { type: "circle" },
//           size: { value: { min: 1, max: 3 } },
//         },
//         detectRetina: true,
//       }}
//       className="absolute inset-0 -z-10"
//     />
//   );
// }
