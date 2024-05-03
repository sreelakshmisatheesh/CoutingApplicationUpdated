// import React, { useState } from "react";

// type GiveCountProps = {
//     onGiveCount: (meal: string) => void;
//     onSubmit?: () => void; // Make onSubmit optional
// };

// const GiveCount: React.FC<GiveCountProps> = ({ onGiveCount, onSubmit }) => {
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [selectedMeals, setSelectedMeals] = useState<string[]>([]);
//     const [queue, setQueue] = useState<{ user: string; timestamp: Date }[]>([]);

//     const handleGiveCount = (meal: string) => {
//         // Update selected meals
//         setSelectedMeals((prevSelectedMeals) => [...prevSelectedMeals, meal]);

//         // Add user to the queue with timestamp
//         const user = "User"; // Assuming a generic user identifier for now
//         const timestamp = new Date();
//         setQueue((prevQueue) => [...prevQueue, { user, timestamp }]);

//         // Log user's entry to the queue
//         console.log(`${user} entered the queue at ${timestamp}`);

//         // Call the onGiveCount function
//         onGiveCount(meal);
//     };

//     const handleSubmission = () => {
//         setIsSubmitting(true);
//         // Call the onSubmit function if provided
//         if (onSubmit) onSubmit();

//         // Schedule task to send token message the next day at 9 am
//         const currentDate = new Date();
//         const nextDay = new Date(currentDate);
//         nextDay.setDate(currentDate.getDate() + 1);
//         nextDay.setHours(9, 0, 0, 0);

//         const timeUntilNextDay = nextDay.getTime() - currentDate.getTime();

//         setTimeout(() => {
//             // Send token message to users in the queue
//             console.log("Good morning, meals are ready!");

//             // Log users in the queue and their timestamps
//             queue.forEach(({ user, timestamp }) => {
//                 console.log(`${user} entered the queue at ${timestamp}`);
//             });
//         }, timeUntilNextDay);
//     };

//     return (
//         <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-[80px] flex justify-between">
//             {/* Breakfast */}
//             <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
//                 <h2 className="text-lg font-semibold mb-2">Breakfast</h2>
//                 <label className="flex items-center">
//                     <input
//                         type="checkbox"
//                         onChange={() => handleGiveCount("Breakfast")}
//                         className="form-checkbox h-5 w-5 text-blue-500"
//                     />
//                     <span className="ml-2">Choose</span>
//                 </label>
//             </div>

//             {/* Lunch */}
//             <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
//                 <h2 className="text-lg font-semibold mb-2">Lunch</h2>
//                 <label className="flex items-center">
//                     <input
//                         type="checkbox"
//                         onChange={() => handleGiveCount("Lunch")}
//                         className="form-checkbox h-5 w-5 text-blue-500"
//                     />
//                     <span className="ml-2">Choose</span>
//                 </label>
//             </div>

//             {/* Dinner */}
//             <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
//                 <h2 className="text-lg font-semibold mb-2">Dinner</h2>
//                 <label className="flex items-center">
//                     <input
//                         type="checkbox"
//                         onChange={() => handleGiveCount("Dinner")}
//                         className="form-checkbox h-5 w-5 text-blue-500"
//                     />
//                     <span className="ml-2">Choose</span>
//                 </label>
//             </div>

//             {/* Submit Button */}
//             <div className="w-full flex justify-center">
//                 <button
//                     onClick={handleSubmission} // Call handleSubmission when the button is clicked
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                     Submit
//                 </button>
//             </div>

//             {/* Pop-up Window */}
//             {isSubmitting && (
//                 <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
//                     <div className="bg-white p-6 rounded-lg shadow-lg">
//                         <p className="text-black">You are entering into Sreelakshmi QUEUE.</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default GiveCount;

import React, { useState } from "react";

type GiveCountProps = {
    onGiveCount: (meal: string) => void;
    onSubmit?: () => void; // Make onSubmit optional
    userName: string; // Assuming the userName is provided as a prop
};

const GiveCount: React.FC<GiveCountProps> = ({ onGiveCount, onSubmit, userName }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedMeals, setSelectedMeals] = useState<string[]>([]);
    const [queue, setQueue] = useState<{ user: string; timestamp: Date }[]>([]);

    const handleGiveCount = (meal: string) => {
        // Update selected meals
        setSelectedMeals((prevSelectedMeals) => [...prevSelectedMeals, meal]);

        // Add user to the queue with timestamp
        const timestamp = new Date();
        setQueue((prevQueue) => [...prevQueue, { user: userName, timestamp }]);

        // Log user's entry to the queue
        console.log(`${userName} entered the queue at ${timestamp}`);

        // Call the onGiveCount function
        onGiveCount(meal);
    };

    const handleSubmission = () => {
        setIsSubmitting(true);
        // Call the onSubmit function if provided
        if (onSubmit) onSubmit();

        // Schedule task to send token message the next day at 9 am
        const currentDate = new Date();
        const nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + 1);
        nextDay.setHours(9, 0, 0, 0);

        const timeUntilNextDay = nextDay.getTime() - currentDate.getTime();

        setTimeout(() => {
            // Send token message to users in the queue
            console.log("Good morning, meals are ready!");

            // Log users in the queue and their timestamps
            queue.forEach(({ user, timestamp }) => {
                console.log(`${user} entered the queue at ${timestamp}`);
            });
        }, timeUntilNextDay);
    };

    return (
        <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-[80px] flex justify-between">
            {/* Breakfast */}
            <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-lg font-semibold mb-2">Breakfast</h2>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        onChange={() => handleGiveCount("Breakfast")}
                        className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2">Choose</span>
                </label>
            </div>

            {/* Lunch */}
            <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-lg font-semibold mb-2">Lunch</h2>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        onChange={() => handleGiveCount("Lunch")}
                        className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2">Choose</span>
                </label>
            </div>

            {/* Dinner */}
            <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-lg font-semibold mb-2">Dinner</h2>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        onChange={() => handleGiveCount("Dinner")}
                        className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2">Choose</span>
                </label>
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-center">
                <button
                    onClick={handleSubmission} // Call handleSubmission when the button is clicked
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </div>

            {/* Pop-up Window */}
            {isSubmitting && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-black">You are entering into a QUEUE.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GiveCount;
