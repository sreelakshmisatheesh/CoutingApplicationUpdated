//sample plate- sreelakshmi code
// import React, { useEffect, useState } from "react";

// type YourTokenProps = {
//     expirationTime: number; // Expiration time in hours
// };

// const YourToken: React.FC<YourTokenProps> = ({ expirationTime }) => {
//     // Calculate the expiration time at 1:55 AM
//     const calculateExpiration = () => {
//         const now = new Date();
//         const expirationDate = new Date(now);
//         expirationDate.setHours(1, 59, 0, 0); // Set expiration time to 1:55 AM
//         const differenceInSeconds = Math.floor((expirationDate.getTime() - now.getTime()) / 1000);
//         return differenceInSeconds;
//     };

//     const [remainingTime, setRemainingTime] = useState(calculateExpiration());
//     const [expiredMeals, setExpiredMeals] = useState({
//         Breakfast: false,
//         Lunch: false,
//         Dinner: false,
//     });

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setRemainingTime((prevTime) => {
//                 if (prevTime > 0) {
//                     return prevTime - 1; // Decrease remaining time by 1 second
//                 } else {
//                     return 0;
//                 }
//             });
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     useEffect(() => {
//         if (remainingTime === 0) {
//             // Mark all meals as expired when remainingTime reaches 0
//             setExpiredMeals({
//                 Breakfast: true,
//                 Lunch: true,
//                 Dinner: true,
//             });
//         }
//     }, [remainingTime]);

//     const formatTime = (time: number) => {
//         const hours = Math.floor(time / 3600);
//         const minutes = Math.floor((time % 3600) / 60);
//         const seconds = time % 60;
//         return `${hours}h ${minutes}m ${seconds}s`;
//     };

//     return (
//         <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
//             <div style={{ ...boxStyle, backgroundColor: "#ffd966", textDecoration: expiredMeals.Breakfast ? "line-through" : "none" }}>
//                 <div>Breakfast</div>
//                 <div style={expirationStyle}>Expires in {formatTime(remainingTime)} </div>
//             </div>
//             <div style={{ ...boxStyle, backgroundColor: "#a5d6a7", textDecoration: expiredMeals.Lunch ? "line-through" : "none" }}>
//                 <div>Lunch</div>
//                 <div style={expirationStyle}>Expires in {formatTime(remainingTime)} </div>
//             </div>
//             <div style={{ ...boxStyle, backgroundColor: "#90caf9", textDecoration: expiredMeals.Dinner ? "line-through" : "none" }}>
//                 <div>Dinner</div>
//                 <div style={expirationStyle}>Expires in {formatTime(remainingTime)} </div>
//             </div>
//         </div>
//     );
// };

// const boxStyle: React.CSSProperties = {
//     width: "200px",
//     height: "120px",
//     border: "2px solid #ccc",
//     borderRadius: "8px",
//     padding: "10px",
//     textAlign: "center",
// };

// const expirationStyle: React.CSSProperties = {
//     fontSize: "14px",
//     marginTop: "10px",
//     color: "#555",
// };

// export default YourToken;

///////seconds adjusting timer
// import React, { useEffect, useState } from "react";

// type YourTokenProps = {
//     breakfastExpiration: number; // Expiration time for breakfast in seconds
//     lunchExpiration: number; // Expiration time for lunch in seconds
//     dinnerExpiration: number; // Expiration time for dinner in seconds
// };

// const YourToken: React.FC<YourTokenProps> = ({ breakfastExpiration, lunchExpiration, dinnerExpiration }) => {
//     const calculateExpiration = (expiration: number) => {
//         const now = new Date();
//         const expirationDate = new Date(now.getTime() + expiration * 1000);
//         const differenceInSeconds = Math.floor((expirationDate.getTime() - now.getTime()) / 1000);
//         return differenceInSeconds;
//     };

//     const [remainingTime, setRemainingTime] = useState({
//         breakfast: calculateExpiration(breakfastExpiration),
//         lunch: calculateExpiration(lunchExpiration),
//         dinner: calculateExpiration(dinnerExpiration),
//     });

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setRemainingTime((prevTime) => ({
//                 breakfast: prevTime.breakfast > 0 ? prevTime.breakfast - 1 : 0,
//                 lunch: prevTime.lunch > 0 ? prevTime.lunch - 1 : 0,
//                 dinner: prevTime.dinner > 0 ? prevTime.dinner - 1 : 0,
//             }));
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     const formatTime = (time: number) => {
//         const hours = Math.floor(time / 3600);
//         const minutes = Math.floor((time % 3600) / 60);
//         const seconds = time % 60;
//         return `${hours}h ${minutes}m ${seconds}s`;
//     };

//     return (
//         <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
//             <div style={{ ...boxStyle, backgroundColor: "#ffd966" }}>
//                 <div>Breakfast</div>
//                 <div style={expirationStyle}>Expires in {formatTime(remainingTime.breakfast)}</div>
//             </div>
//             <div style={{ ...boxStyle, backgroundColor: "#a5d6a7" }}>
//                 <div>Lunch</div>
//                 <div style={expirationStyle}>Expires in {formatTime(remainingTime.lunch)}</div>
//             </div>
//             <div style={{ ...boxStyle, backgroundColor: "#90caf9" }}>
//                 <div>Dinner</div>
//                 <div style={expirationStyle}>Expires in {formatTime(remainingTime.dinner)}</div>
//             </div>
//         </div>
//     );
// };

// const boxStyle: React.CSSProperties = {
//     width: "200px",
//     height: "120px",
//     border: "2px solid #ccc",
//     borderRadius: "8px",
//     padding: "10px",
//     textAlign: "center",
// };

// const expirationStyle: React.CSSProperties = {
//     fontSize: "14px",
//     marginTop: "10px",
//     color: "#555",
// };

// export default YourToken;


// import React, { useEffect, useState } from "react";
// import { FaTimes } from "react-icons/fa";

// type YourTokenProps = {
//     breakfastExpiration: number; // Expiration time for breakfast in seconds
//     lunchExpiration: number; // Expiration time for lunch in seconds
//     dinnerExpiration: number; // Expiration time for dinner in seconds
// };

// const YourToken: React.FC<YourTokenProps> = ({ breakfastExpiration, lunchExpiration, dinnerExpiration }) => {
//     const [remainingTime, setRemainingTime] = useState({
//         breakfast: breakfastExpiration,
//         lunch: lunchExpiration,
//         dinner: dinnerExpiration,
//     });

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setRemainingTime((prevTime) => ({
//                 breakfast: prevTime.breakfast > 0 ? prevTime.breakfast - 1 : 0,
//                 lunch: prevTime.lunch > 0 ? prevTime.lunch - 1 : 0,
//                 dinner: prevTime.dinner > 0 ? prevTime.dinner - 1 : 0,
//             }));
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     const formatTime = (time: number) => {
//         const hours = Math.floor(time / 3600);
//         const minutes = Math.floor((time % 3600) / 60);
//         const seconds = time % 60;
//         return `${hours}h ${minutes}m ${seconds}s`;
//     };

//     return (
//         <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px", position: "relative" }}>
//             <div style={{ ...boxStyle, backgroundColor: remainingTime.breakfast === 0 ? "lightgray" : "#ffd966" }}>
//                 <div>Breakfast</div>
//                 <div style={expirationStyle}>Expires in {formatTime(remainingTime.breakfast)}</div>
//                 {remainingTime.breakfast === 0 && <FaTimes style={crossStyle} />}
//             </div>
//             <div style={{ ...boxStyle, backgroundColor: remainingTime.lunch === 0 ? "lightgray" : "#a5d6a7" }}>
//                 <div>Lunch</div>
//                 <div style={expirationStyle}>Expires in {formatTime(remainingTime.lunch)}</div>
//                 {remainingTime.lunch === 0 && <FaTimes style={crossStyle} />}
//             </div>
//             <div style={{ ...boxStyle, backgroundColor: remainingTime.dinner === 0 ? "lightgray" : "#90caf9" }}>
//                 <div>Dinner</div>
//                 <div style={expirationStyle}>Expires in {formatTime(remainingTime.dinner)}</div>
//                 {remainingTime.dinner === 0 && <FaTimes style={crossStyle} />}
//             </div>
//         </div>
//     );
// };

// const boxStyle: React.CSSProperties = {
//     width: "200px",
//     height: "120px",
//     border: "2px solid #ccc",
//     borderRadius: "8px",
//     padding: "10px",
//     textAlign: "center",
//     cursor: "pointer",
//     position: "relative",
// };

// const expirationStyle: React.CSSProperties = {
//     fontSize: "14px",
//     marginTop: "10px",
//     color: "#555",
// };

// const crossStyle: React.CSSProperties = {
//     position: "absolute",
//     top: "5px",
//     right: "5px",
//     color: "red",
//     fontSize: "1.5rem",
// };

// export default YourToken;

//big cross button working codee ============
// import React, { useEffect, useState } from "react";

// type YourTokenProps = {
//     breakfastExpiration: number; // Expiration time for breakfast in seconds
//     lunchExpiration: number; // Expiration time for lunch in seconds
//     dinnerExpiration: number; // Expiration time for dinner in seconds
// };

// const YourToken: React.FC<YourTokenProps> = ({ breakfastExpiration, lunchExpiration, dinnerExpiration }) => {
//     const calculateExpiration = (expiration: number) => {
//         const now = new Date();
//         const expirationDate = new Date(now.getTime() + expiration * 1000);
//         const differenceInSeconds = Math.floor((expirationDate.getTime() - now.getTime()) / 1000);
//         return differenceInSeconds;
//     };

//     const [remainingTime, setRemainingTime] = useState({
//         breakfast: calculateExpiration(breakfastExpiration),
//         lunch: calculateExpiration(lunchExpiration),
//         dinner: calculateExpiration(dinnerExpiration),
//     });

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setRemainingTime((prevTime) => ({
//                 breakfast: prevTime.breakfast > 0 ? prevTime.breakfast - 1 : 0,
//                 lunch: prevTime.lunch > 0 ? prevTime.lunch - 1 : 0,
//                 dinner: prevTime.dinner > 0 ? prevTime.dinner - 1 : 0,
//             }));
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     const formatTime = (time: number) => {
//         const hours = Math.floor(time / 3600);
//         const minutes = Math.floor((time % 3600) / 60);
//         const seconds = time % 60;
//         return `${hours}h ${minutes}m ${seconds}s`;
//     };

//     return (
//         <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px", position: "relative" }}>
//             <div style={{ ...boxStyle, backgroundColor: "#ffd966" }}>
//                 <div>Breakfast</div>
//                 <div style={expirationStyle}>Expires in {formatTime(remainingTime.breakfast)}</div>
//                 {remainingTime.breakfast === 0 && <div style={crossStyle}>X</div>}
//             </div>
//             <div style={{ ...boxStyle, backgroundColor: "#a5d6a7" }}>
//                 <div>Lunch</div>
//                 <div style={expirationStyle}>Expires in {formatTime(remainingTime.lunch)}</div>
//                 {remainingTime.lunch === 0 && <div style={crossStyle}>X</div>}
//             </div>
//             <div style={{ ...boxStyle, backgroundColor: "#90caf9" }}>
//                 <div>Dinner</div>
//                 <div style={expirationStyle}>Expires in {formatTime(remainingTime.dinner)}</div>
//                 {remainingTime.dinner === 0 && <div style={crossStyle}>X</div>}
//             </div>
//         </div>
//     );
// };

// const boxStyle: React.CSSProperties = {
//     width: "200px",
//     height: "120px",
//     border: "2px solid #ccc",
//     borderRadius: "8px",
//     padding: "10px",
//     textAlign: "center",
//     position: "relative", // Ensure the cross is positioned correctly
// };

// const expirationStyle: React.CSSProperties = {
//     fontSize: "14px",
//     marginTop: "10px",
//     color: "#555",
// };

// const crossStyle: React.CSSProperties = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     fontSize: "96px", // Increased font size for larger cross
//     color: "darkred",
//     width: "120px", // Increased width
//     height: "120px", // Increased height
//     lineHeight: "120px", // Center the cross vertically
//     textAlign: "center", // Center the cross horizontally
// };



// export default YourToken + onTouch every box will genrate cross button;
// import React, { useEffect, useState } from "react";

// type YourTokenProps = {
//     breakfastExpiration: number; // Expiration time for breakfast in seconds
//     lunchExpiration: number; // Expiration time for lunch in seconds
//     dinnerExpiration: number; // Expiration time for dinner in seconds
// };

// const YourToken: React.FC<YourTokenProps> = ({ breakfastExpiration, lunchExpiration, dinnerExpiration }) => {
//     const calculateExpiration = (expiration: number) => {
//         const now = new Date();
//         const expirationDate = new Date(now.getTime() + expiration * 1000);
//         const differenceInSeconds = Math.floor((expirationDate.getTime() - now.getTime()) / 1000);
//         return differenceInSeconds;
//     };

//     const [remainingTime, setRemainingTime] = useState({
//         breakfast: calculateExpiration(breakfastExpiration),
//         lunch: calculateExpiration(lunchExpiration),
//         dinner: calculateExpiration(dinnerExpiration),
//     });

//     const [cardClicked, setCardClicked] = useState(false); // State variable to track if the card is clicked

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setRemainingTime((prevTime) => ({
//                 breakfast: prevTime.breakfast > 0 ? prevTime.breakfast - 1 : 0,
//                 lunch: prevTime.lunch > 0 ? prevTime.lunch - 1 : 0,
//                 dinner: prevTime.dinner > 0 ? prevTime.dinner - 1 : 0,
//             }));
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     const formatTime = (time: number) => {
//         const hours = Math.floor(time / 3600);
//         const minutes = Math.floor((time % 3600) / 60);
//         const seconds = time % 60;
//         return `${hours}h ${minutes}m ${seconds}s`;
//     };

//     const handleCardClick = () => {
//         setCardClicked(true);
//     };

//     return (
//         <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px", position: "relative" }}>
//             <div
//                 style={{
//                     ...boxStyle,
//                     backgroundColor: "#ffd966",
//                     position: "relative",
//                 }}
//                 onClick={handleCardClick}
//             >
//                 <div>Breakfast</div>
//                 {remainingTime.breakfast === 0 || cardClicked ? ( // Display cross if timer is zero or card is clicked
//                     <div style={crossStyle}>✖</div>
//                 ) : (
//                     <div style={expirationStyle}>Expires in {formatTime(remainingTime.breakfast)}</div>
//                 )}
//             </div>
//             <div
//                 style={{
//                     ...boxStyle,
//                     backgroundColor: "#a5d6a7",
//                     position: "relative",
//                 }}
//                 onClick={handleCardClick}
//             >
//                 <div>Lunch</div>
//                 {remainingTime.lunch === 0 || cardClicked ? ( // Display cross if timer is zero or card is clicked
//                     <div style={crossStyle}>✖</div>
//                 ) : (
//                     <div style={expirationStyle}>Expires in {formatTime(remainingTime.lunch)}</div>
//                 )}
//             </div>
//             <div
//                 style={{
//                     ...boxStyle,
//                     backgroundColor: "#90caf9",
//                     position: "relative",
//                 }}
//                 onClick={handleCardClick}
//             >
//                 <div>Dinner</div>
//                 {remainingTime.dinner === 0 || cardClicked ? ( // Display cross if timer is zero or card is clicked
//                     <div style={crossStyle}>✖</div>
//                 ) : (
//                     <div style={expirationStyle}>Expires in {formatTime(remainingTime.dinner)}</div>
//                 )}
//             </div>
//         </div>
//     );
// };

// const boxStyle: React.CSSProperties = {
//     width: "200px",
//     height: "120px",
//     border: "2px solid #ccc",
//     borderRadius: "8px",
//     padding: "10px",
//     textAlign: "center",
//     cursor: "pointer",
// };

// const expirationStyle: React.CSSProperties = {
//     fontSize: "14px",
//     marginTop: "10px",
//     color: "#555",
// };

// const crossStyle: React.CSSProperties = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     fontSize: "48px",
//     color: "darkred",
// };

// export default YourToken;

//cross on touch but timer 0 aavmbl cross veranilla
// import React, { useEffect, useState } from "react";

// type YourTokenProps = {
//     breakfastExpiration: number; // Expiration time for breakfast in seconds
//     lunchExpiration: number; // Expiration time for lunch in seconds
//     dinnerExpiration: number; // Expiration time for dinner in seconds
// };

// const YourToken: React.FC<YourTokenProps> = ({ breakfastExpiration, lunchExpiration, dinnerExpiration }) => {
//     const calculateExpiration = (expiration: number) => {
//         const now = new Date();
//         const expirationDate = new Date(now.getTime() + expiration * 1000);
//         const differenceInSeconds = Math.floor((expirationDate.getTime() - now.getTime()) / 1000);
//         return differenceInSeconds;
//     };

//     const [remainingTime, setRemainingTime] = useState({
//         breakfast: calculateExpiration(breakfastExpiration),
//         lunch: calculateExpiration(lunchExpiration),
//         dinner: calculateExpiration(dinnerExpiration),
//     });

//     const [clickedBox, setClickedBox] = useState("");

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setRemainingTime((prevTime) => ({
//                 breakfast: prevTime.breakfast > 0 ? prevTime.breakfast - 1 : 0,
//                 lunch: prevTime.lunch > 0 ? prevTime.lunch - 1 : 0,
//                 dinner: prevTime.dinner > 0 ? prevTime.dinner - 1 : 0,
//             }));
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     const formatTime = (time: number) => {
//         const hours = Math.floor(time / 3600);
//         const minutes = Math.floor((time % 3600) / 60);
//         const seconds = time % 60;
//         return `${hours}h ${minutes}m ${seconds}s`;
//     };

//     const handleBoxClick = (boxName: string) => {
//         setClickedBox(boxName);
//     };

//     return (
//         <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
//             <div
//                 style={{
//                     ...boxStyle,
//                     backgroundColor: "#ffd966",
//                     position: "relative",
//                     textDecoration: clickedBox === "breakfast" ? "line-through" : "none",
//                 }}
//                 onClick={() => handleBoxClick("breakfast")}
//             >
//                 <div>Breakfast</div>
//                 {clickedBox === "breakfast" ? (
//                     <div style={crossStyle}>✖</div>
//                 ) : (
//                     <div style={expirationStyle}>Expires in {formatTime(remainingTime.breakfast)}</div>
//                 )}
//             </div>
//             <div
//                 style={{
//                     ...boxStyle,
//                     backgroundColor: "#a5d6a7",
//                     position: "relative",
//                     textDecoration: clickedBox === "lunch" ? "line-through" : "none",
//                 }}
//                 onClick={() => handleBoxClick("lunch")}
//             >
//                 <div>Lunch</div>
//                 {clickedBox === "lunch" ? (
//                     <div style={crossStyle}>✖</div>
//                 ) : (
//                     <div style={expirationStyle}>Expires in {formatTime(remainingTime.lunch)}</div>
//                 )}
//             </div>
//             <div
//                 style={{
//                     ...boxStyle,
//                     backgroundColor: "#90caf9",
//                     position: "relative",
//                     textDecoration: clickedBox === "dinner" ? "line-through" : "none",
//                 }}
//                 onClick={() => handleBoxClick("dinner")}
//             >
//                 <div>Dinner</div>
//                 {clickedBox === "dinner" ? (
//                     <div style={crossStyle}>✖</div>
//                 ) : (
//                     <div style={expirationStyle}>Expires in {formatTime(remainingTime.dinner)}</div>
//                 )}
//             </div>
//         </div>
//     );
// };

// const boxStyle: React.CSSProperties = {
//     width: "200px",
//     height: "120px",
//     border: "2px solid #ccc",
//     borderRadius: "8px",
//     padding: "10px",
//     textAlign: "center",
//     cursor: "pointer",
// };

// const expirationStyle: React.CSSProperties = {
//     fontSize: "14px",
//     marginTop: "10px",
//     color: "#555",
// };

// const crossStyle: React.CSSProperties = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     fontSize: "48px",
//     color: "darkred",
// };

// export default YourToken;

import React, { useEffect, useState } from "react";

type YourTokenProps = {
    breakfastExpiration: number; // Expiration time for breakfast in seconds
    lunchExpiration: number; // Expiration time for lunch in seconds
    dinnerExpiration: number; // Expiration time for dinner in seconds
};

const YourToken: React.FC<YourTokenProps> = ({ breakfastExpiration, lunchExpiration, dinnerExpiration }) => {
    const calculateExpiration = (expiration: number) => {
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiration * 1000);
        const differenceInSeconds = Math.floor((expirationDate.getTime() - now.getTime()) / 1000);
        return differenceInSeconds;
    };

    const [remainingTime, setRemainingTime] = useState({
        breakfast: calculateExpiration(breakfastExpiration),
        lunch: calculateExpiration(lunchExpiration),
        dinner: calculateExpiration(dinnerExpiration),
    });

    const [clickedBox, setClickedBox] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => ({
                breakfast: prevTime.breakfast > 0 ? prevTime.breakfast - 1 : 0,
                lunch: prevTime.lunch > 0 ? prevTime.lunch - 1 : 0,
                dinner: prevTime.dinner > 0 ? prevTime.dinner - 1 : 0,
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (remainingTime.breakfast === 0) {
            setClickedBox("breakfast");
        }
        if (remainingTime.lunch === 0) {
            setClickedBox("lunch");
        }
        if (remainingTime.dinner === 0) {
            setClickedBox("dinner");
        }
    }, [remainingTime]);

    const formatTime = (time: number) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${hours}h ${minutes}m ${seconds}s`;
    };

    const handleBoxClick = (boxName: string) => {
        setClickedBox(boxName);
    };

    return (
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
            <div
                style={{
                    ...boxStyle,
                    backgroundColor: "#ffd966",
                    position: "relative",
                    textDecoration: clickedBox === "breakfast" ? "line-through" : "none",
                }}
                onClick={() => handleBoxClick("breakfast")}
            >
                <div>Breakfast</div>
                {clickedBox === "breakfast" ? (
                    <div style={crossStyle}>✖</div>
                ) : (
                    <div style={expirationStyle}>Expires in {formatTime(remainingTime.breakfast)}</div>
                )}
            </div>
            <div
                style={{
                    ...boxStyle,
                    backgroundColor: "#a5d6a7",
                    position: "relative",
                    textDecoration: clickedBox === "lunch" ? "line-through" : "none",
                }}
                onClick={() => handleBoxClick("lunch")}
            >
                <div>Lunch</div>
                {clickedBox === "lunch" ? (
                    <div style={crossStyle}>✖</div>
                ) : (
                    <div style={expirationStyle}>Expires in {formatTime(remainingTime.lunch)}</div>
                )}
            </div>
            <div
                style={{
                    ...boxStyle,
                    backgroundColor: "#90caf9",
                    position: "relative",
                    textDecoration: clickedBox === "dinner" ? "line-through" : "none",
                }}
                onClick={() => handleBoxClick("dinner")}
            >
                <div>Dinner</div>
                {clickedBox === "dinner" ? (
                    <div style={crossStyle}>✖</div>
                ) : (
                    <div style={expirationStyle}>Expires in {formatTime(remainingTime.dinner)}</div>
                )}
            </div>
        </div>
    );
};

const boxStyle: React.CSSProperties = {
    width: "200px",
    height: "120px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    cursor: "pointer",
};

const expirationStyle: React.CSSProperties = {
    fontSize: "14px",
    marginTop: "10px",
    color: "#555",
};

const crossStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "48px",
    color: "darkred",
};

export default YourToken;
