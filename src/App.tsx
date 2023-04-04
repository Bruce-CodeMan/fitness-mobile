/*
 * @Date: 2023-04-04 10:12:00
 * @Author: Bruce
 * @Description: 
 */
import './App.css';
import { useQuery, useMutation } from '@apollo/client';
import { FIND, UPDATE } from './graphql/demo';
import { 
  Form,
  Input,
  Button
 } from 'antd-mobile';

const App = () => {

  const {loading, data} = useQuery(FIND, {
    variables: {
      id: '9becbed5-6474-452c-a277-b59784714a68'
    }
  })

  const [ update ] = useMutation(UPDATE)

  const onClickHandler = (v:any) => {
    update({
      variables: {
        "id": "9becbed5-6474-452c-a277-b59784714a68",
        "params": {
          ...v,
        }
      }
    })
  }

  return <div>
    <p> data: {JSON.stringify(data)}</p>
    <p>loading: {`${loading}`}</p>

    <Form
      layout="horizontal"
      onFinish={onClickHandler}
      footer={(
        <Button block type='submit' color='primary' size='large'>
          提交
        </Button>
      )}
    >
      <Form.Item
        name="name"
        label="姓名"
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name="desc"
        label="描述"
      >
        <Input/>
      </Form.Item>
    </Form>
  </div>
}

export default App
