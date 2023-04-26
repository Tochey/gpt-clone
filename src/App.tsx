import ChatComponent from "./components/ChatComponent";
import OpenAiSideBar from "./components/OpenAiSideBar";

function App() {
  return (
    <>
      <div className="flex h-screen w-full">
        <OpenAiSideBar />
        <ChatComponent />
      </div>
    </>
  );
}

export default App;
