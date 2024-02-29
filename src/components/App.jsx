'use client'
import { hideLoading } from '@/redux/slices/cartSlice';
import { hideLoadingFav } from '@/redux/slices/favItemSlice';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { BottomNav } from './bottom-nav';

export default function App({ children }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(hideLoading());
        dispatch(hideLoadingFav())
    }, [dispatch]);
    return (
        <div>
            <BottomNav />
            {children}
        </div>
    )
}
