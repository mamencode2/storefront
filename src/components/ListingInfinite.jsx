'use client'
import React, { useState } from 'react';
import { InfiniteScroll, List, Grid } from 'antd-mobile';
import { mockRequest } from '@/utils/helper';
import WishItem from './WishItem';
//import { mockRequest } from './mock-request';
export default function ListingInfinite() {
    const [data, setData] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    async function loadMore() {
        const append = await mockRequest();
        setData(val => [...val, ...append]);
        setHasMore(append.length > 0);
    }
    return (
        <>

            <Grid columns={2} gap={8}
                style={{
                    background: '#f1f1f1'
                }}
            >

                {data.map((item) => (
                    <WishItem
                        key={item.key}
                        item={item}
                    />
                ))}

            </Grid>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </>
    );
};
