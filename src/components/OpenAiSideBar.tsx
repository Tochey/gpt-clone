import { AiOutlinePlus } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
const Chats = [
  "React Command Missing",
  "ASEA Tech Stack",
  "Check Null Properties",
  "NLP-based Question",
  "New Chat",
  "Tech Blogging Site",
  "Tech Intrests and Skills",
];

const OpenAiSideBar = () => {
  return (
    <div className=" bg-[#202123] h-screen w-64 flex flex-col text-white p-2">
      <NewChat />
      {Chats.map((c) => {
        return <ChatHistory text={c} />;
      })}
      <SideBarFooter />
    </div>
  );
};

const NewChat = () => {
  return (
    <div className="relative border border-white/20 w-full rounded-md p-3 hover:bg-gray-800 cursor-pointer mb-2">
      <a className="text-center flex gap-3 items-center ">
        <AiOutlinePlus />
        <p className="text-sm">New chat</p>
      </a>
    </div>
  );
};

const ChatHistory = ({ text }: { text: string }) => {
  return (
    <div className="relative w-full p-3 hover:bg-gray-800 cursor-pointer rounded-md transition-all ease-in duration-300">
      <a className="flex gap-3 items-center text-ellipsis max-h-5 break-all ">
        <BsChatLeft size={14} />
        <p className="text-sm">{text}</p>
      </a>
    </div>
  );
};

const SideBarFooter = () => {
  return (
    <div className="relative mt-auto border-t border-t-white/25 flex flex-col min-h-20">
      <a className=" w-full flex gap-2 hover:bg-gray-800 text-center p-3 mt-1.5 cursor-pointer transition-all ease-in duration-300 rounded-md">
        <BsFillPersonFill size={18} />
        <p className="text-sm">Upgrade to Plus</p>
        <div className="text-black text-[12px] bg-yellow-200 font-semibold rounded-md  flex justify-center items-center ml-auto px-1">
          NEW
        </div>
      </a>
      <a className=" flex gap-2 w-full cursor-pointer transition-all ease-in duration-300 hover:bg-gray-800 p-3 rounded-md">
        <div className="text-white text-[8px] bg-[#00A67E] rounded-sm h-5 w-5 flex justify-center items-center ">
          TO
        </div>
        <p className="text-sm">tochey@outlook.com</p>
        <BiDotsHorizontalRounded size={20} className="text-white/40 ml-auto" />
      </a>
    </div>
  );
};

export default OpenAiSideBar;
