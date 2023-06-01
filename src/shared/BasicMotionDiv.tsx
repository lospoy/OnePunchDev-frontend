import { motion } from "framer-motion";

type Props = {
  className?: string;
  transition?: Object;
  children?: React.ReactNode;
};

const CustomMotionDiv = ({ className, transition, children }: Props) => {
  return (
    <motion.div
      className={`${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={transition}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default CustomMotionDiv;
