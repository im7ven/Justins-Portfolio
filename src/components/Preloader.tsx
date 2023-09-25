import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { PreloaderName, PreloaderTitle } from "../styles/style.Preloader";

export const Preloader = () => {
  const containerControls = useAnimation();
  const textControls1 = useAnimation();
  const textControls2 = useAnimation();
  const textControls3 = useAnimation();
  const textControls4 = useAnimation();
  const textControls5 = useAnimation();

  const startAnimation = async () => {
    await containerControls.start({
      scaleX: 0,
      scaleY: 0,
      transition: { duration: 0.3 },
    });
  };

  const startTextAnimation = async () => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    textControls1.start({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 120,
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 700));

    textControls2.start({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    textControls3.start({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    });
    await new Promise((resolve) => setTimeout(resolve, 200));
    textControls4.start({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    });
    await new Promise((resolve) => setTimeout(resolve, 200));
    textControls5.start({
      overflow: "hidden",
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));
    textControls1.start({
      y: -1000,
    });
    textControls2.start({
      y: -1000,
    });
    textControls3.start({
      y: -1000,
    });
    textControls4.start({
      y: -1000,
    });
    textControls5.start({
      y: -1000,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("no-scroll");
    startTextAnimation();
    setTimeout(() => {
      document.body.classList.remove("no-scroll");
    }, 5000);
    setTimeout(startAnimation, 5200);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={containerControls}
      style={{
        height: "100vh",
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        zIndex: 7,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <PreloaderName initial={{ y: 1000 }} animate={textControls1}>
            Justin
          </PreloaderName>
          <PreloaderName initial={{ y: 1000 }} animate={textControls2}>
            Alexander
          </PreloaderName>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <PreloaderTitle initial={{ y: 1000 }} animate={textControls3}>
            Frontend
          </PreloaderTitle>
          <PreloaderTitle initial={{ y: 1000 }} animate={textControls4}>
            Web
          </PreloaderTitle>
          <PreloaderTitle initial={{ y: 1000 }} animate={textControls5}>
            Developer
          </PreloaderTitle>
        </div>
      </motion.div>
    </motion.div>
  );
};
