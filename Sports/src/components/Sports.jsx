// import React from 'react';
// import Nav from '../Nav';

// class Sports extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       equipments: [
//         { id: 1, name: "BTWIN", price: "$20", description: "High-quality football for professional players.", image: "public/images/image.png" },
//         { id: 2, name: "Basketball", price: "$25", description: "Official size basketball suitable for indoor and outdoor play.", image: "public/images/OIP.jpg" },
//         { id: 3, name: "Tennis Ball", price: "$5", description: "Pack of 3 tennis balls for tennis enthusiasts.", image: "tennis_ball.jpg" },
//         { id: 4, name: "Golf Club", price: "$100", description: "Premium golf club for improving your game.", image: "golf_club.jpg" },
//         { id: 5, name: "Baseball Bat", price: "$30", description: "Durable baseball bat for recreational and competitive play.", image: "baseball_bat.jpg" },
//         { id: 6, name: "Golf Club", price: "$100", description: "Premium golf club for improving your game.", image: "golfs_club.jpg" },
//         { id: 7, name: "Baseball Bat", price: "$30", description: "Durable baseball bat for recreational and competitive play.", image: "baseballs_bat.jpg" },
//         { id: 8, name: "Golf Club", price: "$100", description: "Premium golf club for improving your game.", image: "golf_club.jpg" },
//         { id: 9, name: "Baseball Bat", price: "$30", description: "Durable baseball bat for recreational and competitive play.", image: "baseball_bat.jpg" },
//         { id: 10, name: "Baseball Bat", price: "$30", description: "Durable baseball bat for recreational and competitive play.", image: "baseball_bat.jpg" },

//       ]
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Nav/>
//         <h1>Top deals on Cycle</h1>
//         <div className="equipment-container">
//           {this.state.equipments.map(equipment => (
//             <div key={equipment.id} className="equipment-box">
//               <img src={equipment.image} alt={equipment.name} />
//               <div className="equipment-details">
//                 <h3>{equipment.name}</h3>
//                 <p>{equipment.description}</p>
//                 <p>Price: {equipment.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default Sports;


import React, { useState, useEffect } from 'react';
import Nav from '../Nav';

function Women() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuestions() {
            try {
                const response = await fetch("https://sports-kya6.onrender.com/req-questions?category=sport"); // Fetch data from the backend
                if (!response.ok) {
                    throw new Error('Failed to fetch questions');
                }
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        }

        fetchQuestions();
    }, []);

    return (
        <>
        <Nav/>
        
        <div className='sports'>
        
            {/* <h1>Questions</h1> */}
            <ul>
                {questions.map(question => (
                    <li key={question._id}>
                       
                        
                        <img src={question.image} alt={question.topic} />
                        <h2>{question.topic}</h2>
                        <p>{question.description}</p>
                        <p>Price: {question.price}</p>
                        <p>Category: {question.category}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default Women;

