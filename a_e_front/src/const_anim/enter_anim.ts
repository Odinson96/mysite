export const enter_Anim = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: any) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom },
  }),
};

export const enter_Anim_y = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: any) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom },
  }),
};
