
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
import { List } from './generics/List';
import { RandomNumber } from './restrictions/RandomNumber';
import { Toast } from './templateLiterals/TemplateLiterals';
import { Button } from './html/Button';
import { Input } from './html/Input';

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
    

    {/* <Private isLoggedIn={true} Component={Profile} /> */}

{/* 
    <List items={['sajib', 'mahabur', 'rakib']} onClick={item => console.log(item)}/> */}

    {/* <List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}

    {/* <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={item => console.log(item)}
      /> */}


      {/* <RandomNumber value={10} isZero /> */}

      {/* <Toast position='center'/> */}

      {/* <Button variant="primary" onClick={() => console.log('clicked')}>
      button label
      </Button> */}


      <Input />
    </>
  );
}

export default App;
 