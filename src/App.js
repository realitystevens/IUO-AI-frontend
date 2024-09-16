import React, { useEffect, useState} from 'react'
import ai_bot from './ai_bot.svg'


function App() {
  const [introContent, setIntroContent] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    let visitCount = localStorage.getItem('visitCount');

    if (!visitCount) {
      visitCount = 1;
      localStorage.setItem('visitCount', visitCount);
    } else {
      visitCount = parseInt(visitCount) + 1;
      localStorage.setItem('visitCount', visitCount);
    }

    setVisitCount(visitCount)

    if (visitCount <= 3) {
      setIntroContent(true)
    }
  }, []);

  return (
    <div>
      <div className="items-center justify-center min-h-screen bg-gray-100">
        <img src={ai_bot} alt="AI Bot" className="w-1/256" />
        {introContent && (
          <h2>This is the Intro Content(will only show for my first 3 visit to this webpage)</h2>
        )}
        <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS in React!</h1> 
      </div> 
    </div>
  );

  
}

export default App;
