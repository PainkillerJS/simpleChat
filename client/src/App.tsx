import { AuthProvider, AuthContext } from "./context/AuthContext";
import JoinPage from "./page/JoinPage";

const App = () => {
  return (
    <AuthProvider>
      <AuthContext.Consumer>{({ isAuth }) => !isAuth && <JoinPage />}</AuthContext.Consumer>
    </AuthProvider>
  );
};

export default App;
