// animation.ts

export const slideIn = (
    direction: "left" | "right" | "up" | "down",
    type: string,
    delay: number,
    duration: number
  ) => {
    let x = 0;
    let y = 0;
  
    if (direction === "left") x = -50;
    else if (direction === "right") x = 50;
    else if (direction === "up") y = 50;
    else if (direction === "down") y = -50;
  
    return {
      hidden: {
        x,
        y,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type,
          delay,
          duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  export const fadeIn = (
    direction: "left" | "right" | "up" | "down" = "up",
    delay = 0,
    duration = 0.5,
    type = "tween"
  ) => {
    let x = 0;
    let y = 0;
  
    if (direction === "left") x = 40;
    else if (direction === "right") x = -40;
    else if (direction === "up") y = 40;
    else if (direction === "down") y = -40;
  
    return {
      hidden: { x, y, opacity: 0 },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { type, delay, duration, ease: "easeOut" },
      },
    };
  };
  
  export const textVariant = (delay = 0) => ({
    hidden: {
      y: 10,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay,
        duration: 0.8,
      },
    },
  });
  
  export const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  