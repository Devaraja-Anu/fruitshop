import { motion } from "framer-motion";
import grapewine from "../images/lemonsandfigs.jpg";
const TextRight = () => {

    
    const textAnimationRight = {
      offscreen: {
        x:300,
      },
      onscreen: {
        x: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 1.2,
        },
      },
    };
  return (
    <div>
        <div className="grid grid-cols-10 grid-rows-1 h-screen">

          <div className="col-start-0 col-span-5 ">
            <img
              className=" rounded-3xl object-cover h-screen"
              src={grapewine}
              alt="some grapes dangling from a wine"
            />
          </div>

          <motion.div
            className=" col-span-5 flex flex-col justify-center "
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={textAnimationRight}
          >
            <p className=" font-semibold text-5xl text-white px-20  ">
              Our produce is grown in natural family-owned farms with exteme
              care and attention to ensure the high quality crops that you can
              enjoy
            </p>
          </motion.div>
        </div>
    </div>
  );
}

export default TextRight