import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import JoinPage from "./pages/JoinPage";
import ChatPage from "./pages/ChatPage";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import { RoomContext } from "./contexts/RoomContext";

function App() {
   const [user, setUser] = useState("maria");

   const [roomName, setRoomName] = useState("");
   const [roomUsersList, setRoomUsersList] = useState<string[]>([]);

   return (
      <UserContext.Provider value={{ user, setUser }}>
         <RoomContext.Provider
            value={{ roomName, setRoomName, roomUsersList, setRoomUsersList }}
         >
            <Router>
               <Switch>
                  <Route exact path="/" component={JoinPage} />
                  <Route exact path="/chat" component={ChatPage} />
               </Switch>
            </Router>
         </RoomContext.Provider>
      </UserContext.Provider>
   );
}

export default App;
