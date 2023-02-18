import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import user from '../../../constants';

//? user to search profile in api github
const userName = user.login.user_name;

export const GetProfile = () => {
    return useQuery(['user'], () =>
        axios
            .get(`https://api.github.com/users/${userName}`)
            .then((response) => response.data)
    );
};
