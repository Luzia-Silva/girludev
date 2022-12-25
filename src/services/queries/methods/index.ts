import { response } from 'express';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// * GITHUB START

//? user to search profile in api github
const userName = 'Luzia-Silva';

export const GetProfile = () => {
    return useQuery(['user'], () =>
        axios
            .get('https://api.github.com/users/Luzia-Silva')
            .then((response) => response.data)
    );
};

// ! GITHUB END
