import Announcemets from "@/app/components/Announcemets";
import AttendanceChartContainer from "@/app/components/AttendanceChartContainer";
import CountChartContainer from "@/app/components/CountChartContainer";
import EventCalendarContainer from "@/app/components/EventCalendarContainer";
import FinanceChart from "@/app/components/FinanceChart";
import UserCard from "@/app/components/UserCard";

const AdminPage = ({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className=" flex gap-4 justify-between flex-wrap">
          {/* USER CARDS */}
          <UserCard type="admin" />
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
        </div>

        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChartContainer />
          </div>
          {/* ATTENDENCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChartContainer />
          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className="w-full h-[400px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full md:w-1/3 flex flex-col gap-8">
        <EventCalendarContainer searchParams={searchParams} />
        <Announcemets />
      </div>
    </div>
  );
};

export default AdminPage;
