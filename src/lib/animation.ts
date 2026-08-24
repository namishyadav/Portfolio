import { Variants } from 'motion/react';

// Container variant that staggers child elements
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger || 0.1,
      delayChildren: custom.delay || 0.05,
    },
  }),
};

// Item variant for smooth fade-and-slide up
export const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 24 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier easeOut
    },
  },
};

// Fast item variant for badges/headers
export const headerVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 18 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Scale up variant for cards/modals
export const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    scale: 0.98 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Hero heading variant: fade + rise + blur-to-sharp
export const heroHeadingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Hero subtitle variant with slight delay
export const heroSubtitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Staggered hero container with longer stagger for dramatic entrance
export const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger || 0.14,
      delayChildren: custom.delay || 0.2,
    },
  }),
};

// Section reveal variant for scroll-triggered content
export const sectionRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
