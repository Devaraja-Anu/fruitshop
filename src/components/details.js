import { motion} from "framer-motion";

const Details = () => {


  const textAnimation = {
    offscreen: {
      x: 300,
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
    <div className="py-4 mx-4">
      <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{once:true, amount:.1}}
      variants={textAnimation}
      >
        <p className="text-white font-semibold text-2xl pl-16 pr-20">
          The Groceries Corner provides customers with quality fruits and
          vegetables for all your needs. The fruits are Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Sequi repellendus sed
          aspernatur,labore esse aut corrupti iusto eius magnam commodi, quam
          perferendis maiores? Sit, nemo animi! Nulla nihil ea sit. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ab, molestias optio vero
          eos aut, accusantium totam vel assumenda iste accusamus, libero nulla
          excepturi provident ut molestiae. Laudantium deleniti asperiores quam!
        </p>
      </motion.div>
    </div>
  );
};

export default Details;
