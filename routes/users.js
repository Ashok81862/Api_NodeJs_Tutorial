import express from 'express'
const router  = express.Router();
import { v4 as uuidv4 } from 'uuid';

let users = []

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req,res) => {
    const user = req.body;
    const userId = uuidv4();

    const userWithId  = { ...user, id: userId};
   users.push(userWithId);

    res.json(user);
})

router.get('/:id', (req,res) => {
    const { id } = req.params;

    const userDetail = users.find((user) => user.id === id ); 

    res.send(userDetail);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.json("User Deleted");
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName ,lastName , age, sex} = req.body;

    const user = users.find((user) => user.id === id ); 

    if(firstName) user.firstName = firstName
    if(lastName) user.lastName = lastName
    if(age) user.age = age
    if(sex) user.sex = sex

    res.json(user);
})

export default router;