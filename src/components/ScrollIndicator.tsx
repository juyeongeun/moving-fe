import Image from "next/image";
import { motion } from "framer-motion";

import assets from "@/variables/images";

const styles = {
  container: "fixed bottom-[3%] right-[50%] translate-x-[50%] z-50",
  motionDiv:
    "relative flex flex-col items-center justify-center w-[50px] h-[50px] overflow-hidden rounded-full",
  innerDiv:
    "absolute top-1/2 left-1/2 w-[36px] h-[36px] transform -translate-x-1/2 -translate-y-1/2",
};

export default function ScrollIndicator() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.motionDiv}
        animate={{
          backgroundImage: [
            "linear-gradient(to bottom, #4DA9FF, #ffffff)",
            "linear-gradient(to bottom, #ffffff, #4DA9FF)",
          ],
          backgroundPosition: ["0% 0%", "0% 100%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className={styles.innerDiv}>
          <Image
            src={assets.icons.chevronDownDouble}
            alt="스크롤 가이드"
            fill
          />
        </div>
      </motion.div>
    </div>
  );
}
