
// "use client";
// import React, { FC, useEffect, useState } from "react";
// import SideBarProfile from "./SideBarProfile";
// import { useLogOutQuery } from "../../../redux/features/auth/authApi";
// import { signOut } from "next-auth/react";
// import ProfileInfo from "./ProfileInfo";
// import ChangePassword from "./ChangePassword";
// import CourseCard from "../Course/CourseCard";
// import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
// import GiveCount from "./GiveCount";
// //import ParentComponent from "./ParentComponent";

// type Props = {
//   user: any;
// };

// const Profile: FC<Props> = ({ user }) => {
//   const [scroll, setScroll] = useState(false);
//   const [avatar, setAvatar] = useState(null);
//   const [logout, setLogout] = useState(false);
//   const [courses, setCourses] = useState([]);
//   const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});

//   const { } = useLogOutQuery(undefined, {
//     skip: !logout ? true : false,
//   });

//   const [active, setActive] = useState(1);

//   const logOutHandler = async () => {
//     setLogout(true);
//     await signOut();
//   };

//   useEffect(() => {
//     if (data) {
//       const filteredCourses = user.courses
//         .map((userCourse: any) =>
//           data.courses.find((course: any) => course._id === userCourse._id)
//         )
//         .filter((course: any) => course !== undefined);
//       setCourses(filteredCourses);
//     }
//   }, [data]);

//   const handleCheckboxChange = (meal: string) => {
//     // Logic to handle the checkbox change for breakfast, lunch, dinner
//     console.log(`Selected ${meal}`);
//   };

//   if (typeof window !== "undefined") {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 85) {
//         setScroll(true);
//       } else {
//         setScroll(false);
//       }
//     });
//   }

//   return (
//     <div className="w-[85%] flex mx-auto">
//       <div
//         className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-opacity-90 border bg-white dark:border-[#ffffff1d] border-[#00000014] rounded-[5px] shadow-sm dark:shadow-sm mt-[80px] mb-[80px] sticky ${scroll ? "top-[120px]" : "top-[30px]"
//           } left-[30px]`}
//       >
//         <SideBarProfile
//           user={user}
//           active={active}
//           avatar={avatar}
//           setActive={setActive}
//           logOutHandler={logOutHandler}
//         />
//       </div>
//       {active === 1 && (
//         <div className="w-full h-full bg-transparent mt-[80px]">
//           <ProfileInfo avatar={avatar} user={user} />
//         </div>
//       )}

//       {active === 2 && (
//         <div className="w-full h-full bg-transparent mt-[80px]">
//           <ChangePassword />
//         </div>
//       )}

//       {active === 3 && (
//         <GiveCount
//           onGiveCount={(meal) => console.log(`Selected meal: ${meal}`)}
//           onSubmit={() => console.log("Form submitted")}
//           userName={user} // Pass the userName prop
//         />
//       )}

//     </div>
//   );
// };

// export default Profile;

"use client";
import React, { FC, useEffect, useState } from "react";
import SideBarProfile from "./SideBarProfile";
import { useLogOutQuery } from "../../../redux/features/auth/authApi";
import { signOut } from "next-auth/react";
import ProfileInfo from "./ProfileInfo";
import ChangePassword from "./ChangePassword";
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import GiveCount from "./GiveCount";
import YourToken from "./YourToken";

type Props = {
  user: any;
};

const Profile: FC<Props> = ({ user }) => {
  const [scroll, setScroll] = useState(false);
  const [logout, setLogout] = useState(false);
  const { data } = useGetUsersAllCoursesQuery(undefined, {});

  const { } = useLogOutQuery(undefined, {
    skip: !logout,
  });

  const [active, setActive] = useState(1);

  const logOutHandler = async () => {
    setLogout(true);
    await signOut();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   if (data) {
  //     const filteredCourses = user.courses
  //       .map((userCourse: any) =>
  //         data.courses.find((course: any) => course._id === userCourse._id)
  //       )
  //       .filter((course: any) => course !== undefined);
  //     // setCourses(filteredCourses); // No need for courses state, as it's not used
  //   }
  // }, [data]);

  const handleCheckboxChange = (meal: string) => {
    console.log(`Selected ${meal}`);
  };

  return (
    <div className="w-[85%] flex mx-auto">
      <div
        className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-opacity-90 border bg-white dark:border-[#ffffff1d] border-[#00000014] rounded-[5px] shadow-sm dark:shadow-sm mt-[80px] mb-[80px] sticky ${scroll ? "top-[120px]" : "top-[30px]"
          } left-[30px]`}
      >
        <SideBarProfile
          user={user}
          active={active}
          avatar={user.avatar}
          setActive={setActive}
          logOutHandler={logOutHandler}
        />
      </div>
      {active === 1 && (
        <div className="w-full h-full bg-transparent mt-[80px]">
          <ProfileInfo avatar={user.avatar} user={user} />
        </div>
      )}

      {active === 2 && (
        <div className="w-full h-full bg-transparent mt-[80px]">
          <ChangePassword />
        </div>
      )}

      {active === 3 && (
        <GiveCount
          onGiveCount={handleCheckboxChange}
          onSubmit={() => console.log("Form submitted")}
          userName={user.name} // Assuming userName is the correct prop name
        />
      )}
      {active === 4 && (
        <div className="w-full h-full bg-transparent mt-[80px]">
          <YourToken
            breakfastExpiration={5}
            lunchExpiration={15}
            dinnerExpiration={25}
          />
        </div>
      )}



    </div>
  );
};

export default Profile;
