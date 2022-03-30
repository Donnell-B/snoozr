import Particles from "react-tsparticles";

export const Background = () => {
  const particlesInit = (main: string) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container: string) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      //   init={particlesInit}
      //   loaded={particlesLoaded}
      options={{
        background: { color: "#111827" },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#ffffff",
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 0.05,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1500,
            },
            value: 60,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
};
