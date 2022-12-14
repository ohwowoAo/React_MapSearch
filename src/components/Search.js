import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addsearch } from "./../store/store";

let timer;
const Search = () => {
    //redux store 가져와줌
    let search = useSelector((state) => state.search );
    console.log(search);
    let dispatch = useDispatch();
  
    
    const [value, setValue] = useState();

    const chageInput = (e) => {
      setValue(e.target.value)
    }
    useEffect(() => {
        if (value !== undefined) {
            timer = setTimeout(async () => {
                dispatch(addsearch(value))
            }, 500);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [value]);

    return (
            <InputForm onSubmit={(e)=> e.preventDefault()}>
                <Input 
                    value={value}
                    onChange={chageInput}
                />
            </InputForm>
    );
};


const InputForm = styled.form`
    margin: 15px 0;
    text-align:center;
`;
const Input = styled.input`

`


export default Search;