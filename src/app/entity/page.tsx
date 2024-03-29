"use client"

import { useSearchParams } from 'next/navigation'

import { getClient } from "@/lib/client";
import { GET_CURRENT_USER } from '@/gql/queries/user';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { VariablesAreInputTypesRule } from 'graphql';



const Page = () => {
    const params = useSearchParams()
    // const [data, setData] = useState({})
    // useQuery({ query: getUser, variables: { id: params.get('userId') } }).then(
    //     ({ data }) => setData(data)
    // );
    const { loading, data } = useQuery(
        GET_CURRENT_USER,
        // variables are also typed!
        { variables: { id: params.get('userId') } }
    );
    return (
        <div>
            UserId: {params.get('userId')}
            <br />
            OTP: {params.get('otp')}
            <br />
            {
                data?.register_profile_by_pk && (
                    <>
                        data.register_profile_by_pk: {JSON.stringify(data.register_profile_by_pk)}
                    </>
                )
            }
        </div>
    )
}

export default Page;