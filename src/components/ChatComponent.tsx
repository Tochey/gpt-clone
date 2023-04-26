import { BsSun } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TiFlashOutline } from "react-icons/ti";
import { RxExclamationTriangle } from "react-icons/rx";

const HoverContent = [
  '"Explain quantum computing in simple terms"',
  '"Got any creative ideas for a 10 year old’s birthday?"',
  '"How do I make an HTTP request in Javascript?"',
];
const ChatComponent = () => {
  return (
    <div className="flex flex-col bg-[#343541] w-full items-center">
      <div className="flex flex-col h-4/5 max-w-3xl gap-3 ">
        <h1 className="text-4xl font-semibold text-center mt-[20vh] mx-auto mb-10 text-white">
          ChatGPT
        </h1>
        <div className="flex h-full gap-3.5">
          <div className="flex flex-col text-center gap-3.5 flex-1">
            <BsSun className="text-white mx-auto" size={24} />
            <h1 className=" text-white text-lg font-normal ">Examples</h1>
            {HoverContent.map((c) => {
              return <HoverHero text={c} />;
            })}
          </div>
          <RegularHero
            icon={<TiFlashOutline size={24} className="text-white mx-auto" />}
            header="Capabilities"
            textArr={[
              "Remembers what user said earlier in the conversation",
              "Allows user to provide follow-up corrections",
              "Trained to decline inappropriate requests",
            ]}
          />
           <RegularHero
            icon={<RxExclamationTriangle size={24} className="text-white mx-auto" />}
            header="Limitations"
            textArr={[
              "May occasionally generate incorrect information",
              "May occasionally produce harmful instructions or biased content",
              "Limited knowledge of world and events after 2021",
            ]}
          />
        </div>
      </div>
      <div className="h-1/5 w-full max-w-3xl flex flex-col items-end justify-end">
      <input type="text" placeholder="Send a Message." className="p-3 w-full rounded-md  bg-[#40414F]" />
      <p className="text-xs mt-2 text-center w-full text-[#C4C4D1] mb-5 ">Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. <span className="underline">
      ChatGPT Mar 23 Version</span></p>
      </div>
    </div>
  );
};

const HoverHero = ({ text }: { text: string }) => {
  return (
    <button className="rounded-md bg-[#3E3F4B] hover:bg-gray-900 p-3 w-full cursor-pointer text-center">
      <p className="text-sm text-white">
        {text}
        <span className="inline-block">
          <AiOutlineArrowRight size={14} className='font-bold' />
        </span>
      </p>
    </button>
  );
};

const RegularHero = ({
  icon,
  header,
  textArr,
}: {
  icon: any;
  header: string;
  textArr: Array<string>;
}) => {
  return (
    <div className="flex flex-col text-center gap-3.5 flex-1">
      {icon}
      <h1 className="text-lg text-white font-normal">{header}</h1>
      {textArr.map((t) => {
       return(<div className="rounded-md bg-[#3E3F4B] p-3 w-full cursor-pointer">
          <p className="text-sm text-white">{t}</p>
        </div>)
      })}
    </div>
  );
};

export default ChatComponent;
