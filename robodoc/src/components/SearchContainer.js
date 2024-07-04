import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import openai from '../utils/openai';// Make sure to import your OpenAI instance

const SearchContainer = () => {
    const searchText = useRef(null);
    const doctorData = useSelector(store => store.gpt);
    const [gptResult, setGptResult] = useState('');

    const handleGptClick = async () => {
        const gptQuery = `Act as a ${doctorData.doctorRole} and give me some advice for the query: ${searchText.current.value} and give me some medicine's name that will give me relief or cure.  if you are suggesting medicins please suggest it in an array`
        const gptResponse = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        if (!gptResponse.choices) {
            console.log("API Failed to fetch", gptResponse);
        }
        const result = gptResponse.choices?.[0]?.message.content;
        setGptResult(result);
        console.log(result);
        console.log("Result ", gptResponse);
    }

    return (
        <div className="pt-[65%] md:pt-[15%] flex items-center flex-col rounded-lg">
         
            <form className="w-2/3 md:w-2/2 bg-gray-700 grid grid-cols-12 rounded-lg" onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText} type="text" className='p-4 m-4 col-span-9 rounded-lg' placeholder="Search your questions" />
                <button className="col-span-3 m-4 py-2 px-4 bg-blue-700 text-white rounded-lg" onClick={handleGptClick}>Search</button>
            </form>
           
            
           
            {gptResult && (
                <div className="w-2/3 md:w-2/2 bg-gray-100 p-4 mt-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-2">{`${doctorData.doctorRole}'s Response`}</h2>
                    <p >{gptResult}</p>
                </div>
            )}
           
        </div>
    );
}

export default SearchContainer;
