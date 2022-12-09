import { motion } from "framer-motion";
import grapewine from '../images/grapewine.jpg'
import cleanfruits from "../images/cleanfruits.jpg";
import fruitpackage from "../images/fruitpackage.jpg";

 
 const TextLeft = () => {
  
  const DB = [
    {
      background: "bg-background",
      direction: -200,
      text: "Our produce is grown in natural family-owned farms with extemecare and attention to ensure the high quality crops that you can enjoy",
      image: grapewine,
      ImageLeft: false,
    },
    {
      background: "bg-blue-500",
      direction: 200,
      text: "All fruits produced are treated with Eco-Friendly methods to reduce enivornmental impact without sacrificing quality",
      image: cleanfruits,
      ImageLeft: true,
    },
    {
      background: "bg-pink-600",
      direction: -200,
      text: "Harvested fruits are packaged immidiately to preserve freshness. No chemical preservatives are used.",
      image: fruitpackage,
      ImageLeft: false,
    },
  ];


   return (

    DB.map(item=>{
      return (
        <div>
          <div
            className={`h-screen border-2 md:flex overflow-clip ${item.background}`}
          >
            <div className={`md:w-1/2 ${item.ImageLeft?'visible':'hidden'}`}>
              <img
                className="h-96 w-screen md:h-screen object-cover md:rounded-r-3xl"
                src={item.image}
                alt="some grapes dangling from a wine"
              />
            </div>

            <motion.div
              className="h-1/2 md:w-1/2 md:h-screen"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              style={{ originX: 0.5 }}
              variants={{
                offscreen: {
                  x:item.direction,
                },
                onscreen: {
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1.2,
                  },
                },
              }}
            >
              <div className="h-full flex flex-col justify-center px-10">
                <p className="text-white text-2xl md:text-3xl font-semibold">
                  {item.text}
                </p>
              </div>
            </motion.div>

            <div className={`md:w-1/2 ${item.ImageLeft?'hidden':'visible'}`}>
              <img
                className="h-96 w-screen md:h-screen object-cover md:rounded-l-3xl"
                src={item.image}
                alt="some grapes dangling from a wine"
              />
            </div>
          </div>
        </div>
      );
      })
     );
 }
 
 export default TextLeft
