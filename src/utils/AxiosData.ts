import axios from 'axios';
import {Exer} from '../interface/exe';

export const getTarget = async () => {
    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/targetList',
        headers: {
          'X-RapidAPI-Key': 'b2582d15eemsh42a169c2510fc1ap1ed92cjsncba0eecbfad3',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };


    try {
        const response = await axios.request<string[]>(options);        
        return response.data
    } catch (error) {
        return "error"
    }
}

export const getByTarget = async (target : string)  => {

    const options = {
    method: 'GET',
    url: `https://exercisedb.p.rapidapi.com/exercises/target/${target}`,
    params: {limit: '10'},
    headers: {
        'X-RapidAPI-Key': 'b2582d15eemsh42a169c2510fc1ap1ed92cjsncba0eecbfad3',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request<Exer[]>(options);
        return response.data
    } catch (error) {        
        return "error"
    }


}
    