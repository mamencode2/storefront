import { Tabs } from 'antd-mobile'
import React from 'react'

export default function WishListItems() {
    return (
        <div>

<TabsElements
wishListcount={2}
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
                '--active-title-color': '#000'
            }}

        >
            <Tabs.Tab key='items'
                title={
                    <div>
                        {wishListcount} items
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