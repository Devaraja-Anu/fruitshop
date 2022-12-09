import { useState } from "react";
import Footers from "./components/Footers";

const Blah = () => {
  const [expand, setExpand] = useState(false);
  const test = "border-b-2";

  const toggleFaq = () => {
    setExpand(!expand);
  };

  return (
    <div>
      <div className={test} onClick={toggleFaq}>
        <div className="w-screen flex  items-center justify-between px-32 ">
          <h1 className="text-background text-5xl py-10">
            How can i contact you?
          </h1>
          <p className="font-bold text-5xl text-background cursor-pointer">+</p>
        </div>
        <p
          className={`${
            expand ? "visible" : "hidden"
          } animate-faqDrop px-32 pb-10`}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
          deleniti architecto laborum quo adipisci id velit, corporis libero
          quae provident ut ipsum, laudantium magnam earum quibusdam quasi
          pariatur aliquam consequuntur ullam ab dolore quaerat. Inventore eum
          maiores quidem modi laboriosam.
        </p>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <div>
      <div className=" bg-background  w-screen">
        <p className=" flex items-center justify-center font-bold text-white text-6xl  h-44">
          FREQUENTLY ASKED QUESTIONS
        </p>
      </div>

      {[1, 2, 3, 4].map((item) => (
        <Blah />
      ))}

      <Footers />
    </div>
  );
};

export default Faq;
