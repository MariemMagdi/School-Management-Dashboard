import Announcemets from "@/app/components/Announcemets";
import BigCalendar from "@/app/components/BigCalendar";
import PerformanceChart from "@/app/components/PerformanceChart";
import Image from "next/image";
import Link from "next/link";
import "react-big-calendar/lib/css/react-big-calendar.css";

const SingleStudentPage = () => {
  return (
    <div className="flex-1 flex flex-col xl:flex-row gap-4 p-4">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="font-semibold text-xl">Mina Adel</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap font-medium text-xs">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>01221150061</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex flex-wrap gap-4 justify-between">
            {/* CARD */}
            <div className="flex gap-4 p-4 bg-white rounded-md w-full md:w-[48%] xl:w-[35%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">94%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white rounded-md w-full md:w-[48%] xl:w-[35%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">6th</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white rounded-md w-full md:w-[48%] xl:w-[35%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">18</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white rounded-md w-full md:w-[48%] xl:w-[35%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class Name</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="bg-white rounded-md mt-4 p-4 h-[800px]">
          <h1 className="text-xl font-semibold">Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white rounded-md p-4">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="flex flex-wrap gap-4 text-xs text-gray-500 mt-4">
            <Link
              href={`/dashboard/list/lessons?classId=2`}
              className="bg-lamaSkyLight p-3 rounded-md"
            >
              Student&apos;s Lessons
            </Link>
            <Link
              href={`/dashboard/list/teachers?classId=2`}
              className="bg-lamaPurpleLight p-3 rounded-md"
            >
              Student&apos;s Teachers
            </Link>
            <Link
              href={`/dashboard/list/results?studentId=student2`}
              className="bg-lamaYellowLight p-3 rounded-md"
            >
              Student&apos;s Results
            </Link>
            <Link
              href={`/dashboard/list/exams?classId=2`}
              className="bg-pink-50 p-3 rounded-md"
            >
              Student&apos;s Exams
            </Link>
            <Link
              href={`/dashboard/list/assignments?classId=2`}
              className="bg-lamaSkyLight p-3 rounded-md"
            >
              Student&apos;s Assignments
            </Link>
          </div>
        </div>
        <PerformanceChart />
        <Announcemets />
      </div>
    </div>
  );
};

export default SingleStudentPage;
