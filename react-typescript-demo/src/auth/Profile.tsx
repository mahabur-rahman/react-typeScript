export type ProfileProps = {
   name: string
} 
 
 const Profile = ({name}: ProfileProps) =>{
   return (
      <>
      <h1>Private Profile component. Name is : {name}</h1>
      </>
   )
}


export default Profile;  