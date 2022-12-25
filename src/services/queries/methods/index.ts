import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// * GITHUB START

//? user to search profile in api github
const userName = 'Luzia-Silva';

export const GetProfile = () => {
    useQuery(['user'], () => {
        axios.get(`https://api.github.com/users/${userName}`);
    });
};

// ! GITHUB END
