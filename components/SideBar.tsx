import NewChat from "./NewChat";


const SideBar = () => {
  return <div className="bg-black text-white flex flex-col p-2 h-screen ">
    <div className="flex-1">
        <div>
        <NewChat/>
        <div>AI Model selecttion </div>
        {/* map through chat rows */}
        </div>
    </div>
  </div>;
};

export default SideBar;
