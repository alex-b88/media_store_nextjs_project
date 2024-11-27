'use client'
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {FC, useCallback} from "react";
import {ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";


type Props = {
    pagesCount:number;
}

const PaginationComponent:FC<Props> = ({pagesCount}) => {

    const router:AppRouterInstance = useRouter();
    const pathname:string = usePathname()
    const searchParams:ReadonlyURLSearchParams = useSearchParams()
    const pageNum:string = searchParams.get('page') || '1'

    const createQueryString = useCallback(
        (name: string, value: string):string => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    if(pagesCount > 500){
        pagesCount = 500
    }


    const onClickHandler = (_: React.ChangeEvent<unknown>, value: number) => {
        router.push(pathname + '?' + createQueryString('page', value.toString()))
    }

    return (
        <Stack spacing={2}>
            <Pagination count={pagesCount} page={+pageNum} variant="outlined" shape="rounded" onChange={onClickHandler}/>
        </Stack>
    );
}

export default PaginationComponent;