import FunctionBox from "@/components/functionalBox";
import { FaPlus } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { PiRecordFill } from "react-icons/pi";
import { RiCalendarScheduleLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="w-full">
      <section className="p-10 rounded bg-hero h-fit w-full  bg-cover">
        <div className="p-[10px] glassmorphism text-[14px] w-fit text-white-2 rounded">
          Upcoming meeting at 12:30 pm
        </div>

        <h1 className="text-white-1 font-extrabold text-[40px] uppercase mt-[40px] ">
          09:19 am
        </h1>

        <p className="text-white-2 text-[14px] capitalize">
          wednesday, march 27,2024
        </p>
      </section>

      <section className="grid grid-cols-4 gap-[20px] mt-[30px] max-md:grid-cols-2 max-[500px]:grid-cols-1">
        {/* box1 */}
        <FunctionBox
          icon={<FaPlus />}
          heading="new meeting"
          subtxt="Start an instant meeting"
          bg="bg-orange-1"
        />

        {/* box2 */}
        <FunctionBox
          icon={<IoPersonAddOutline />}
          heading="Join meeting"
          subtxt="Via invitation link"
          bg="bg-blue-1"
        />

        {/* box3 */}
        <FunctionBox
          icon={<RiCalendarScheduleLine />}
          heading="schedule meeting"
          subtxt="Plan your meeting"
          bg="bg-purple-1"
        />

        {/* box4 */}
        <FunctionBox
          icon={<PiRecordFill />}
          heading="view recordings"
          subtxt="Meeting recording"
          bg="bg-yellow-1"
        />
      </section>
    </div>
  );
}
