import {OpenAI} from "openai"

import dotenv from 'dotenv'

dotenv.config();


const client = new OpenAI({
    apiKey :  process.env.key
})


// using instruction

// const response = await client.responses.create({
//  // instructions:'give result in one word',

//     input: "your input",
//     model : "gpt-4o-mini" 
// });





// using roles
const response = await client.responses.create({


    input: [
        {role: 'system',content :'answer in hindi language'},
        {role: 'developer',content :'give a basic example in js'},
        {role: 'user',content :'what is ai'},
    ],
    model : "gpt-4o-mini" 
});




console.log(response.output_text)