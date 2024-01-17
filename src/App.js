// import Layout from "./components/layout.jsx";
// import TweetAvatarContext from "./context/TweetAvatarContext.js";
// import TweetsData from "./utils/tweetsData.js"

// import('./style/reset.css');
// import('./style/App.css');

// export default function App() {
//   return (
//     <>
//       <TweetsData.Provider>
//         <TweetAvatarContext.Provider>
//           <Layout />
//         </TweetAvatarContext.Provider>
//       </TweetsData.Provider>
//     </>
//   );
// };

import { useState } from 'react';
import Login from './components/login.jsx';
import UserContext from "./context/UserContext.js";
import Layout from './components/layout.jsx';

export default function App() {
    const [pseudo, setPseudo] = useState(null);

    const handleLoginSubmit = (userName) => {
        setPseudo(userName);
    };

    return (
        pseudo ?
            <UserContext.Provider value={{ isLogged: true, pseudo: pseudo }}>
                <Layout />
            </UserContext.Provider>
            :
            <Login onLoginSubmit={handleLoginSubmit} />
    );
};