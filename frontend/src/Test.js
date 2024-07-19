import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {

  const [users, setUsers] = useState([]);
  const moji = 'testttt';

  // 先ほど作成したLaravelのAPIのURL
  const url = "http://localhost:8000/api/users";

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        setUsers(res.data.users);
        return;
      } catch (e) {
        return e;
      }
    })();
  }, []);

  return (
    <h1>{moji}</h1>
  );

  // return (
  //   <>
  //     {users.map((post)=> {
  //       return (
  //         <div key={post.id}>
  //           <h1>{post.name}</h1>
  //           <p>{post.email}</p>
  //         </div>
  //       );
  //     })}
  //   </>
  // );
}

export default Test;