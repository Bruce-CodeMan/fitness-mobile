/*
 * @Date: 2023-04-04 10:12:00
 * @Author: Bruce
 * @Description: 
 */
import './App.css'
import { useQuery, useMutation } from '@apollo/client'
import { FIND, UPDATE } from './graphql/demo'
import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const {loading, data} = useQuery(FIND, {
    variables: {
      id: '9becbed5-6474-452c-a277-b59784714a68'
    }
  })

  const [ update ] = useMutation(UPDATE)

  const onChangeNameHandler = (v: React.ChangeEvent<HTMLInputElement>) => {
    setName(v.target.value);
  }

  const onChangeDescHandler = (v: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(v.target.value);
  }

  const onClickHandler = () => {
    update({
      variables: {
        "id": "9becbed5-6474-452c-a277-b59784714a68",
        "params": {
          name,
          desc
        }
      }
    })
  }

  return <div>
    <p> data: {JSON.stringify(data)}</p>
    <p>loading: {`${loading}`}</p>

    <p>
      name: <input type="text" onChange={onChangeNameHandler}/>
    </p>
    <p>
      desc: <input type="text" onChange={onChangeDescHandler}/>
    </p>
    <p>
      <button onClick={onClickHandler}>Click</button>
    </p>
  </div>
}

export default App
