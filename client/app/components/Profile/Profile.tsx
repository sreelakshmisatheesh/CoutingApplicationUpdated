// //wroking code == without submit button
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

//   if (typeof window !== "undefined") {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 85) {
//         setScroll(true);
//       } else {
//         setScroll(false);
//       }
//     });
//   }

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

//       {active === 2 && (
//         <div className="w-full h-full bg-transparent mt-[80px]">
//           <GiveCount />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;


// "use client";
// import React, { FC, useEffect, useState } from "react";
// import SideBarProfile from "./SideBarProfile";
// import { useLogOutQuery } from "../../../redux/features/auth/authApi";
// import { signOut } from "next-auth/react";
// import ProfileInfo from "./ProfileInfo";
// import ChangePassword from "./ChangePassword";
// import CourseCard from "../Course/CourseCard";
// import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";

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

//   if (typeof window !== "undefined") {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 85) {
//         setScroll(true);
//       } else {
//         setScroll(false);
//       }
//     });
//   }

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
//         <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-[80px]">
//           {courses.length === 0 ? (
//             <>
//               {/* First Card */}
//               <div className="bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
//                 <h2 className="text-lg font-semibold mb-2">First Card Title</h2>
//                 <p className="text-gray-600">First card content goes here...</p>
//               </div>

//               {/* Second Card */}
//               <div className="bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
//                 <h2 className="text-lg font-semibold mb-2">Second Card Title</h2>
//                 <p className="text-gray-600">Second card content goes here...</p>
//               </div>

//               {/* Third Card */}
//               <div className="bg-white dark:bg-slate-900 shadow-md rounded-lg p-6">
//                 <h2 className="text-lg font-semibold mb-2">Third Card Title</h2>
//                 <p className="text-gray-600">Third card content goes here...</p>
//               </div>
//             </>
//           ) : (
//             <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
//               {courses.map((item: any, index: number) => (
//                 <CourseCard item={item} key={index} isProfile={true} />
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;


//sbmit button============
// "use client";
// import React, { FC, useEffect, useState } from "react";
// import SideBarProfile from "./SideBarProfile";
// import { useLogOutQuery } from "../../../redux/features/auth/authApi";
// import { signOut } from "next-auth/react";
// import ProfileInfo from "./ProfileInfo";
// import ChangePassword from "./ChangePassword";
// import CourseCard from "../Course/CourseCard";
// import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";

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
//   const [selectedPreferences, setSelectedPreferences] = useState({
//     breakfast: false,
//     lunch: false,
//     dinner: false,
//   });

//   const logOutHandler = async () => {
//     setLogout(true);
//     await signOut();
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
//     setSelectedPreferences((prevPreferences) => ({
//       ...prevPreferences,
//       [meal.toLowerCase()]: !prevPreferences[meal.toLowerCase()],
//     }));
//   };

//   const handleSubmit = () => {
//     // Logic to handle form submission with user's selected choices
//     console.log("Submit clicked!");
//     console.log("Selected Preferences:", selectedPreferences);
//     // Here you can access the selected choices and process them
//   };

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
//         <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-[80px] flex justify-between">
//           {/* Breakfast */}
//           <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-2">Breakfast</h2>
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={selectedPreferences.breakfast}
//                 onChange={() => handleCheckboxChange("Breakfast")}
//                 className="form-checkbox h-5 w-5 text-blue-500"
//               />
//               <span className="ml-2">Choose</span>
//             </label>
//           </div>

//           {/* Lunch */}
//           <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-2">Lunch</h2>
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={selectedPreferences.lunch}
//                 onChange={() => handleCheckboxChange("Lunch")}
//                 className="form-checkbox h-5 w-5 text-blue-500"
//               />
//               <span className="ml-2">Choose</span>
//             </label>
//           </div>

//           {/* Dinner */}
//           <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-2">Dinner</h2>
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={selectedPreferences.dinner}
//                 onChange={() => handleCheckboxChange("Dinner")}
//                 className="form-checkbox h-5 w-5 text-blue-500"
//               />
//               <span className="ml-2">Choose</span>
//             </label>
//           </div>
//         </div>
//       )}

//       {/* Submit Button */}
//       <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-4">
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;


// "use client";
// import React, { FC, useEffect, useState } from "react";
// import SideBarProfile from "./SideBarProfile";
// import { useLogOutQuery } from "../../../redux/features/auth/authApi";
// import { signOut } from "next-auth/react";
// import ProfileInfo from "./ProfileInfo";
// import ChangePassword from "./ChangePassword";
// import CourseCard from "../Course/CourseCard";
// import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";

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
//   const [selectedPreferences, setSelectedPreferences] = useState({
//     breakfast: false,
//     lunch: false,
//     dinner: false,
//   });

//   const logOutHandler = async () => {
//     setLogout(true);
//     await signOut();
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
//     setSelectedPreferences((prevPreferences) => ({
//       ...prevPreferences,
//       [meal.toLowerCase()]: !prevPreferences[meal.toLowerCase()],
//     }));
//   };

//   const handleSubmit = () => {
//     // Logic to handle form submission with user's selected choices
//     console.log("Submit clicked!");
//     console.log("Selected Preferences:", selectedPreferences);
//     // Here you can access the selected choices and process them
//   };

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
//         <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-[80px] flex justify-between">
//           {/* Breakfast */}
//           <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-2">Breakfast</h2>
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={selectedPreferences.breakfast}
//                 onChange={() => handleCheckboxChange("Breakfast")}
//                 className="form-checkbox h-5 w-5 text-blue-500"
//               />
//               <span className="ml-2">Choose</span>
//             </label>
//           </div>

//           {/* Lunch */}
//           <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-2">Lunch</h2>
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={selectedPreferences.lunch}
//                 onChange={() => handleCheckboxChange("Lunch")}
//                 className="form-checkbox h-5 w-5 text-blue-500"
//               />
//               <span className="ml-2">Choose</span>
//             </label>
//           </div>

//           {/* Dinner */}
//           <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-2">Dinner</h2>
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={selectedPreferences.dinner}
//                 onChange={() => handleCheckboxChange("Dinner")}
//                 className="form-checkbox h-5 w-5 text-blue-500"
//               />
//               <span className="ml-2">Choose</span>
//             </label>
//           </div>
//         </div>
//       )}

//       {/* Submit Button */}
//       <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-4 flex justify-end">
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// submit button- not alligened

// "use client";
// import React, { FC, useEffect, useState } from "react";
// import SideBarProfile from "./SideBarProfile";
// import { useLogOutQuery } from "../../../redux/features/auth/authApi";
// import { signOut } from "next-auth/react";
// import ProfileInfo from "./ProfileInfo";
// import ChangePassword from "./ChangePassword";
// import CourseCard from "../Course/CourseCard";
// import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";

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
//   const [selectedPreferences, setSelectedPreferences] = useState({
//     breakfast: false,
//     lunch: false,
//     dinner: false,
//   });

//   const logOutHandler = async () => {
//     setLogout(true);
//     await signOut();
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
//     setSelectedPreferences((prevPreferences) => ({
//       ...prevPreferences,
//       [meal.toLowerCase() as "breakfast" | "lunch" | "dinner"]: !prevPreferences[meal.toLowerCase() as "breakfast" | "lunch" | "dinner"],
//     }));
//   };


//   const handleSubmit = () => {
//     // Logic to handle form submission with user's selected choices
//     console.log("Submit clicked!");
//     console.log("Selected Preferences:", selectedPreferences);
//     // Here you can access the selected choices and process them
//   };

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
//         <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-[80px] flex justify-between">
//           {/* Breakfast */}
//           <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-2">Breakfast</h2>
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={selectedPreferences.breakfast}
//                 onChange={() => handleCheckboxChange("Breakfast")}
//                 className="form-checkbox h-5 w-5 text-blue-500"
//               />
//               <span className="ml-2">Choose</span>
//             </label>
//           </div>

//           {/* Lunch */}
//           <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-2">Lunch</h2>
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={selectedPreferences.lunch}
//                 onChange={() => handleCheckboxChange("Lunch")}
//                 className="form-checkbox h-5 w-5 text-blue-500"
//               />
//               <span className="ml-2">Choose</span>
//             </label>
//           </div>

//           {/* Dinner */}
//           <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
//             <h2 className="text-lg font-semibold mb-2">Dinner</h2>
//             <label className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={selectedPreferences.dinner}
//                 onChange={() => handleCheckboxChange("Dinner")}
//                 className="form-checkbox h-5 w-5 text-blue-500"
//               />
//               <span className="ml-2">Choose</span>
//             </label>
//           </div>
//         </div>
//       )}

//       {/* Submit Button */}
//       <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-4 flex justify-end">
//         <button
//           onClick={handleSubmit}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;


// Profile.tsx
// import React, { FC, useEffect, useState } from "react";
// import SideBarProfile from "./SideBarProfile";
// import { useLogOutQuery } from "../../../redux/features/auth/authApi";
// import { signOut } from "next-auth/react";
// import ProfileInfo from "./ProfileInfo";
// import ChangePassword from "./ChangePassword";
// import CourseCard from "../Course/CourseCard";
// import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
// import GiveCount from "./GiveCount";

// type Props = {
//   user: any;
// };

// type Preferences = {
//   breakfast: boolean;
//   lunch: boolean;
//   dinner: boolean;
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
//   const [selectedPreferences, setSelectedPreferences] = useState<Preferences>({
//     breakfast: false,
//     lunch: false,
//     dinner: false,
//   });

//   const logOutHandler = async () => {
//     setLogout(true);
//     await signOut();
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

//   const handleCheckboxChange = (meal: keyof Preferences) => {
//     setSelectedPreferences((prevPreferences) => ({
//       ...prevPreferences,
//       [meal]: !prevPreferences[meal],
//     }));
//   };

//   const handleSubmit = () => {
//     console.log("Submit clicked!");
//     console.log("Selected Preferences:", selectedPreferences);
//   };

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
//       <div
//         className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-[80px]"
//         style={{ maxWidth: "calc(100% - 310px)" }}
//       >
//         <ProfileInfo user={user} />
//         <div className="w-full flex flex-col gap-6 mt-6">
//           <div className="w-full bg-white dark:bg-slate-900 shadow-md rounded-lg p-6">
//             <h2 className="text-lg font-semibold mb-2">My Courses</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {courses.map((course: any) => (
//                 <CourseCard key={course._id} course={course} />
//               ))}
//             </div>
//           </div>
//           <GiveCount onGiveCount={handleCheckboxChange} />
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             onClick={handleSubmit}
//           >
//             Submit
//           </button>
//         </div>
//       </div>
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
import CourseCard from "../Course/CourseCard";
import { useGetUsersAllCoursesQuery } from "@/redux/features/courses/coursesApi";
import GiveCount from "./GiveCount";

type Props = {
  user: any;
};

const Profile: FC<Props> = ({ user }) => {
  const [scroll, setScroll] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [logout, setLogout] = useState(false);
  const [courses, setCourses] = useState([]);
  const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});

  const { } = useLogOutQuery(undefined, {
    skip: !logout ? true : false,
  });

  const [active, setActive] = useState(1);

  const logOutHandler = async () => {
    setLogout(true);
    await signOut();
  };

  useEffect(() => {
    if (data) {
      const filteredCourses = user.courses
        .map((userCourse: any) =>
          data.courses.find((course: any) => course._id === userCourse._id)
        )
        .filter((course: any) => course !== undefined);
      setCourses(filteredCourses);
    }
  }, [data]);

  const handleCheckboxChange = (meal: string) => {
    // Logic to handle the checkbox change for breakfast, lunch, dinner
    console.log(`Selected ${meal}`);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  return (
    <div className="w-[85%] flex mx-auto">
      <div
        className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-opacity-90 border bg-white dark:border-[#ffffff1d] border-[#00000014] rounded-[5px] shadow-sm dark:shadow-sm mt-[80px] mb-[80px] sticky ${scroll ? "top-[120px]" : "top-[30px]"
          } left-[30px]`}
      >
        <SideBarProfile
          user={user}
          active={active}
          avatar={avatar}
          setActive={setActive}
          logOutHandler={logOutHandler}
        />
      </div>
      {active === 1 && (
        <div className="w-full h-full bg-transparent mt-[80px]">
          <ProfileInfo avatar={avatar} user={user} />
        </div>
      )}

      {active === 2 && (
        <div className="w-full h-full bg-transparent mt-[80px]">
          <ChangePassword />
        </div>
      )}

      {active === 3 && (
        <div className="w-full h-full bg-transparent mt-[80px]">
          <GiveCount />
        </div>
      )}
    </div>
  );
};

export default Profile;
