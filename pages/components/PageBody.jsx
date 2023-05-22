import SideNav from "./SideNav";
import GenerationArea from "./GenerationArea";

const PageBody = () => {
  return (
    <div className="grid grid-cols-7 ">
      <div className="col-span-2">
        <SideNav />
      </div>
      <div className="col-span-5">
        <GenerationArea />
      </div>
    </div>
  );
};

export default PageBody;
