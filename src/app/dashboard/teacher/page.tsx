import Announcemets from "@/app/components/Announcemets";
import BigCalendarContainer from "@/app/components/BigCalendarContainer";
import { currentUserId } from "@/lib/utils";
import "react-big-calendar/lib/css/react-big-calendar.css";

const TeacherPage = () => {
  return (
    <div className="flex-1 flex flex-col xl:flex-row gap-4 p-4">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="bg-white h-full rounded-md p-4">
          <h1 className="font-semibold text-xl">Schedule</h1>
          <BigCalendarContainer type="teacherId" id={currentUserId!} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcemets />
      </div>
    </div>
  );
};

export default TeacherPage;
