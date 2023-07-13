import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
<Navbar title="AKASH TextUtils" home="Home" about="About"/>
<div className="container my-3">
{/* <TextForm heading="Enter the text to analyze below"/> */}
<About></About>
</div>
    </>
  );
}

export default App;
