import React, {useState} from 'react';
import './App.css';


function App() {
  
  const adminUser ={
    
    email: "admin@admin.com",
    password: "admin123",
}

  const [user, setUser] =  useState({email:"", password:""});
  const [error, setError] = useState("");
  
  const Login = details => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in");
    } else {
      console.log("Caracteres no Validos");
      setError("Por favor vuelva a intentarlo, sus credenciales son inválidas")
    }
  }
  
const Logout = () =>{
  setUser({email:"", password:""});
}

return(
<div className="App">
{(user.email !== "") ? (
<div className="welcome">
<h2>Welcome, <span>{user.email}</span></h2>
<button onClick={Logout}>Logout</button>
</div>

  ) : (
    <Login Login={Login} error={error}/>
  )
  }
</div>
)}
export default App;
