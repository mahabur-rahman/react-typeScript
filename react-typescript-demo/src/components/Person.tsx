 
type PersonProps = {
   name : {
      first: string
      last: string
   }
}

export const Person = (props:PersonProps) =>{
   return <>
   <h1>First: {props.name.first} and Last: {`${props.name.last}`}</h1>
   </>
}