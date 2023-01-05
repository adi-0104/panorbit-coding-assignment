import LandingPage from "./pages/LandingPage";

export const config = {
  endpoint: "https://panorbit.in/api/users.json"
}

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
