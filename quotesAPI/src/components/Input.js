import React,{useState} from 'react';
import axios from 'axios';
const Input = (props) => {
    const [quote, setQuote] = useState([]);
    const onClick = e => {
        axios.get('https://type.fit/api/quotes').then(response=>{
                return response.data;
            })
            .then(data => {
                // this code iterates over all the indexes of the json and returns the
                // first 10 objects or quotes
                var newArr=[];
                for (var i = 0; i < 10; i++){
                    var obj = data[i];
                    newArr.push(obj);
                }
                setQuote(newArr);
            })
            .catch(err => {
                console.log(err);
            });
    }
 
    return (
        <div>
            <div className="quote">{quote.map((quot, i) => (
                <div key={i}>
                    <div class="blockquote-wrapper">
                <div class="blockquote">
                    <h1>
                    {quot.text}
                    </h1>
                    <h4>&mdash;{quot.author}</h4>
                </div>
                </div>
                      
                    </div>
                ))}
                </div>
                

                <input type="submit" onClick={onClick}/>
        </div>
    );
}
export default Input;