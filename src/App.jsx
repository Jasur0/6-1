import Header from "./components/Header";


import Footer from "./components/Footer";
import ContextProvider from "./context/Context";
import Main from "./components/Main";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Main/>
      <Footer />
    </ContextProvider>
  );
}

export default App;
