"use client"
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useCallback} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";


const PaginationComponent = () => {

    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )


    const onClickHandler = (_: React.ChangeEvent<unknown>, value: number) => {
        router.push(pathname + '?' + createQueryString('page', value.toString()))
    }

    return (
        <Stack spacing={2}>
            <Pagination count={500}  variant="outlined" shape="rounded" onChange={onClickHandler}/>
        </Stack>
    );
}

export default PaginationComponent;