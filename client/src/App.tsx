import { AuthProvider, AuthContext } from "./context/AuthContext";
import { RoomProvider } from "./context/RoomProvider";
import JoinPage from "./page/JoinPage";
import ChatPage from "./page/ChatPage";

const App = () => {
  return (
    <AuthProvider>
      <RoomProvider>
        <AuthContext.Consumer>{({ isAuth }) => (isAuth ? <ChatPage /> : <JoinPage />)}</AuthContext.Consumer>
      </RoomProvider>
    </AuthProvider>
  );
};

export default App;
