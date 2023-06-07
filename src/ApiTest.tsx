import axios from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';

export default function ApiTest() {
  const useGetDetailList = () => {
    return useQuery(['subscriptDetail'], async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`);
      return data;
    });
  };

  const { data: todoData } = useGetDetailList();
  console.log(todoData)

  const [asdf, setData] = useState(todoData)
  console.log(asdf)

  return (
    <div>
      <form>
        <div>
          email
          <input type="text" onChange={(e) => setData({...asdf, email: e.target.value})}/>
        </div>
        <div>
          name
          <input type="text" onChange={(e) => setData({...asdf, name: e.target.value})}/>
        </div>
        <button type='submit'>btn</button>
      </form>
    </div>
  )
}