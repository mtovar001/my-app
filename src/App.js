import logo from './logo.svg';
import './App.css';
import Genre from './components/Genre';
import Container from './components/Container';
import Movie from './components/Movie';


function App() {
  return (
    <div className="App">
      <Container header="Movie app"/>
      <Container mtypes="comedy and romance"/>
      <Movie title="React JS"/>
      <Movie yrnote="the title is a nested prop"/>
      <Genre name="TBA"/>
      <Genre description="total surprise"/>
      <Genre mtitle1="Surprise"/>
      <Genre mtitle2="wasn't expected"/>        
    </div>
  );
}

export default App;
