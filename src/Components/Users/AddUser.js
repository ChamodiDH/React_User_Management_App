import React from "react";
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault()
    }
    return(
        <Card className = {classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="userName">User Name</label>
            <input id="userName" type="text"/>
            <label htmlFor="age">Age(Yrs)</label>
            <input id="age" type="number"/>
            <Button type="submit">Add User</Button>

        </form>
        </Card>
       
    )


}

export default AddUser