import { Tabs } from 'antd-mobile'
import React from 'react'
import { useSelector } from 'react-redux'

export default function WishListItems() {
    const {savedItems}= useSelector((state)=> state.favItem)
    return (
        <div>

<TabsElements
wishListcount={savedItems.length}
/>
        </div>
    )
}


function TabsElements({ wishListcount }) {
    let activeKey = 'items'
    return (
        <Tabs
            activeKey={activeKey}
            stretch
            style={{
                '--active-line-color': '#000',
                '--active-title-color': '#000',
                '--active-line-height':'3px',
                fontSize:'14px',
                color:'#767676',
                fontWeight:'bold'
            }}

        >
            <Tabs.Tab key='items'
                title={
                    <div>
                        Items({wishListcount}) 
                    </div>
                }
            />

            <Tabs.Tab key='board'
                title={
                    <div>
                        Boards
                    </div>
                }
            />
        </Tabs>
    )
}