// import React from "react";

type GiveCountProps = {
    onGiveCount: (meal: string) => void;
    onSubmit: () => void; // Define a prop for the submit action
};

const GiveCount: React.FC<GiveCountProps> = ({ onGiveCount, onSubmit }) => {
    return (
        <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-[80px] flex justify-between">
            {/* Breakfast */}
            <div className="w-[30%] bg-white dark:bg-slate-900 shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-lg font-semibold mb-2">Breakfast</h2>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        onChange={() => onGiveCount("Breakfast")}
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
                        onChange={() => onGiveCount("Lunch")}
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
                        onChange={() => onGiveCount("Dinner")}
                        className="form-checkbox h-5 w-5 text-blue-500"
                    />
                    <span className="ml-2">Choose</span>
                </label>
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-center">
                <button
                    onClick={onSubmit} // Call the onSubmit function when the button is clicked
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default GiveCount;
