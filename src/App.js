import Header from './layouts/Header'
import Main from './layouts/Main';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="App overflow-hidden relative flex flex-col h-screen bg-gray-100">
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;