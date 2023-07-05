type PersonNameList = {
   names: {
      first: string
      last: string,
   }[]
}

export const PersonList = (props: PersonNameList) =>{
   return (
      <>
      {props.names.map(person =>{
         return (
            <h1>
               {person.first} & {person.last}
            </h1>
         )
      })}
      </>
   )
}