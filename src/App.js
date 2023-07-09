import MainRoutes from "./router/Routes";
import { MyProvider } from "./store";

function App() {
  return (
    <MyProvider>
      <MainRoutes />
    </MyProvider>
  );
}

export default App;
