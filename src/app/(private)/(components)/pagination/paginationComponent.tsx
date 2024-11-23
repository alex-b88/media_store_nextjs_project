"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {FC, useState} from "react";
import {useSearchParams} from "next/navigation";
import {IResponseModel} from "@/app/(private)/models/IResponseModel";

type Props = {
    obj: IResponseModel
}

const PaginationComponent:FC<Props> = ({obj}) => {

    const [pageNum, setPageNum] = useState<number | null>();
    const [query, setQuery] = useSearchParams()
    setPageNum(obj.page)

    // // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    // //     setPageNum(value);
    // // };
    //
    // const [query, setQuery] = useSearchParams({page:'1'})

    const onClickHandler = () => {
        console.log(pageNum)
    }

    return (
        <Stack spacing={2}>
            {/*<Pagination count={10} shape="rounded" />*/}
            <Pagination count={obj.total_results} variant="outlined" shape="rounded" onClick={onClickHandler}/>
        </Stack>
    );
}

export default PaginationComponent;