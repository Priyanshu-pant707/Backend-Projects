import { OpenAI } from "openai"   // importing OpenAI class from the openai package

const key="your key"



const client = new OpenAI({    // creating object of OpenAI class  , and calling constructor
    apiKey:key
})


const response = await  client.responses.create({   // api call start   , create()  it create a request  http post request to the OpenAi server
    input :"apple color is ",
    model :"gpt-4o-mini"
});


console.log(response.output_text);






