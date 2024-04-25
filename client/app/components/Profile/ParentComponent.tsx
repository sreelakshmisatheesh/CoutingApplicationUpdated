// ParentComponent.tsx
import React from "react";
import GiveCount from "./GiveCount";

const ParentComponent: React.FC = () => {
    const handleGiveCount = (meal: string) => {
        // Handle the logic when a meal is selected
        console.log(`Selected ${meal}`);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <GiveCount onGiveCount={handleGiveCount} />
        </div>
    );
};

export default ParentComponent;
