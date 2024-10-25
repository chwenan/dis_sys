import axios from "axios";
import { useState } from "react";

const PostUser = () => {
    const [user, setUser] = useState({name:'',age:'',email:''});
    const createUser = async () => {
        await axios.post("http://localhost:8080/api/form",
        user,
        {
            headers:{
            'Content-Type':'application/x-www-form-urlencoded'
            }
        })
        .then((response) => {
            setUser({name:'', age:'', email:''});
            console.log(response);
            return alert("User Create: " + `${JSON.stringify(response.data,null,4)}`);
        })
        .catch((err)=>{
            return alert(err)
        });
    };
};

const onchageForm = (e) => {}

return(
<div> 
  <div> 
    <div> 
      <h1> Create User</h1>
      <form>
        <div>
          
          <div>
            <label>Name</label>
            <input tpye="text" value={user.name} onChange={()=>onchageForm()} name="name" id="name" placeholder="Name">
          </div>
          
          <div>
            <label>Age</label>
            <input tpye="text" value={user.age} onChange={()=>onchageForm()} name="age" id="age" placeholder="age">
          </div>
          
          <div>
            <label>Email</label>
            <input tpye="text" value={user.email} onChange={()=>onchageForm()} name="email" id="email" placeholder="email">
          </div>
          
        </div>
        <button type="button" onclick={()=>createUser()}>Create</button>
      </form>
    </div>
  </div>
</div>
);

export default PostUser;