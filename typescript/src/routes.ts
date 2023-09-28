import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWord(request: Request, response: Response){
    const user = createUser({
        name: 'Nicholas', 
        email: 'nicholas@kenzie.com.br', 
        password: '1234',
        techs: [
            'Node.js', 
            'Reacts', 
            'React Native',
            { title: 'JS', experience: 100 },
        ]
    });

}

export default helloWord;