
import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';

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
    {/* <Greet name={'sakib'} messageCount={10} isLoggedIn={true} />
    <Person name={personName} />
    <PersonList names={nameList} /> */}
    {/* <Status status='loading' /> */}
    {/* <Heading>Placeholder text</Heading> */}
    {/* <Oscar>
      <Heading> Oscar goes to leonardo decpario!</Heading>
    </Oscar> */}
    {/* <Greet name="mahabur"   isLoggedIn={true} /> */}

    {/* <LoggedIn /> */}

    <User />
    </>
  );
}

export default App;
 