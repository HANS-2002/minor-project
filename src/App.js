import Main from "./components/main";
import { auth } from "./firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

import Signin from "./components/Signin";

function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <>{loading ? <></> : !user ? <Signin /> : <Main email={user.email} />}</>
  );
}

export default App;
