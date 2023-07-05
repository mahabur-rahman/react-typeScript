
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first : 'mahabur',
    last: 'rahman'
  }


  const nameList = [
    {first: 'annur', last: 'rahman'},
    {first: 'sakib', last: 'nazmux'},
    {first: 'al', last: 'noman'}
  ]

  return (
    <>
    <Greet name={'sakib'} messageCount={10} isLoggedIn={true} />
    <Person name={personName} />
    <PersonList names={nameList} />
    </>
  );
}

export default App;
 