import React,{useContext,useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from '../Contextt/GlobalState'
import {
    Button, Form, FormGroup,
    Label, Input,
} from 'reactstrap';

const EditUsers = (props) => {
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name:''
    })
    const { users, editUsers } = useContext(GlobalContext)
    const history = useHistory()
    const currentUserId = props.match.params.id
    useEffect(() => {
        const userId = currentUserId
        const selectedUser = users.find(user => user.id === Number(userId))
        setSelectedUser(selectedUser)
    },[currentUserId,users])

    const onSubmit = () => {
        editUsers(selectedUser)
        
        history.push('/')
    }

    const onChange = (e) => {
     setSelectedUser({...selectedUser, [e.target.name] : e .target.value})        
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label >Name</Label>
                <Input type="text" name='name' value={selectedUser.name} onChange={onChange} placeholder="  Enter Name..."></Input>
            </FormGroup>
            <Button type="submit" color="secondary">Edit Name</Button>
            <Link to='/'className="btn btn-danger ml-2" >Cancel</Link>
        </Form>
    )
}

export default EditUsers
