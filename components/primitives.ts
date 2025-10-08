import { tv } from "tailwind-variants";

export const title = tv({
  base: " inline ",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "dark:from-[#512477] dark:to-[#512477]",
    },
    size: {
      sm: "text-2xl lg:text-2xl",
      md: "text-[2.3rem] lg:text-5xl",
      lg: "text-4xl lg:text-7xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "lg",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full font-mono font-semibold md:w-3/4 lg:w-1/2 my-2 text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
    size: {
      sm: "text-2xl lg:text-2xl",
      md: "text-[2.3rem] lg:text-5xl",
      lg: "text-4xl lg:text-7xl",
    },
  },
  defaultVariants: {
    fullWidth: true,
    size: "sm",
  },
});
