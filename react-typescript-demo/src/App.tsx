
import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import Box from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Counter } from './components/state/Counter';
import LoggedIn from './components/state/LoggedIn';
// import User from './components/state/User';
import {UserInfo} from './components/context/UserInfo';
import { UserContextProvider } from './components/context/UserContext';
import DomRef from './components/refs/DomRef';
import { MutableRef } from './components/refs/MutableRef';
import Private from './auth/Private';
import Profile from './auth/Profile';

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

    {/* <User /> */}
    {/* <Counter /> */}

    {/* <ThemeContextProvider>
      <Box />
    </ThemeContextProvider> */}

    {/* <UserContextProvider>
        <UserInfo />
    </UserContextProvider> */}

    {/* <DomRef /> */}

{/* <MutableRef /> */}
    

    <Private isLoggedIn={true} Component={Profile} />
    </>
  );
}

export default App;
 