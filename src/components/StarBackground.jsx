import { useEffect, useState } from "react"

//x,y size, animation duration,opacity
const StarBackground = ()=>{
    const [stars, setStars] = useState([]);
     const [meteors, setMeteors] = useState([]);

    useEffect(()=>{
        generateStars();
        generateMeteors();
    },[])

     const generateStars = () => {
       const noOfStars = Math.floor(
         (window.innerWidth * window.innerHeight) / 5000
       );
       const starsArray = [];

       for (let i = 0; i < noOfStars; i++) {
         starsArray.push({
           id: i,
           size: Math.random() * 3 + 1,
           x: Math.random() * window.innerWidth,
           y: Math.random() * window.innerHeight,
           opacity: Math.random() * 0.8 + 0.2,
           animationDuration: Math.random() * 4 + 2,
         });
       }

       setStars(starsArray);
     };

      const generateMeteors = () => {
        const noOfMeteors = 6;
        const meteorsArray = [];

        for (let i = 0; i < noOfMeteors; i++) {
          meteorsArray.push({
            id: i,
            size: Math.random() * 2 + 1,
            x: Math.random() * 100,
            y: Math.random() * 20,
            delay: Math.random() * 15,
            animationDuration: Math.random() * 5 + 3,
          });
        }

        setMeteors(meteorsArray);
      };

    return (
      <div className="fixed inset-0 overflow-hidden pointer-event-none z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star animate-pulse-subtle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.y}px`,
              left: `${star.x}px`,
              opacity: star.opacity,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}
        {meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="meteor animate-meteor"
            style={{
              width: meteor.size * 50 + "px",
              height: meteor.size * 1 + "px",
              top: meteor.y + "%",
              left: meteor.x + "%",
              animationDelay: meteor.delay,
              animationDuration: `${meteor.animationDuration}s`,
            }}
          />
        ))}
      </div>
    );
}
export default StarBackground