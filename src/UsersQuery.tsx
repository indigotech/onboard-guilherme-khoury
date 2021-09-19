import {gql} from '@apollo/client';


export const USERS_QUERY = gql`
    query Users{
        users(pageInfo:{
            offset:0
        }){
            nodes{
                id
                name
                email
            }
        }
    }`;