import apple from '../images/appleSample.jpg'
import grape from "../images/grapeSample.jpg";
import orange from "../images/orangeSample.jpg";
import strawberries from "../images/strawberrySample.jpg";
import figs from "../images/figSample.jpg";

const DB = [
  {
    image: apple,
    title: "apple",
  },
  {
    image: orange,
    title: "Orange",
  },
  {
    image: strawberries,
    title: "Blueberry",
  },
  {
    image: grape,
    title: "Grapes",
  },
  {
    image:figs,
    title:"Figs"
  },
  {

  }
];


const Samples = () => {
  return (
    <div className='whitespace-nowrap overflow-auto'>
          {DB.map((item) => {
            return (
              <div key={item.image} className=" inline-block justify-center items-center w-96 h-96">
  
                <img
                  className="w-96 h-96 rounded-full object-cover border-2"
                  src={item.image}
                  alt="a single instance of the given fruit"
                />
                <p>{item.title}</p>
              </div>
            );
          })}
    </div>
  );
}

export default Samples