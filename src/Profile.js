import * as React from "react";
import "./styles.css";


export default function Profile() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/2");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <div className="Profile">
      <h1>Hello ImageScopic users!</h1>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
                <p>
                  <strong>{user.last_name}</strong>
                </p>
        
              </div>
              
            );
          })}
          
      </div>
 
    </div>
  );
}


