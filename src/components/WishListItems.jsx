import { Tabs } from 'antd-mobile'
import React,{useState} from 'react'
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
    const [activeTab, setActiveTab]= useState('items')
    
    return (
        <Tabs
            activeKey={activeTab}
            stretch
            style={{
                '--active-line-color': '#000',
                '--active-title-color': '#000',
                '--active-line-height':'3px',
                fontSize:'14px',
                color:'#767676',
                fontWeight:'bold'
            }}

            onChange={(key)=>{
                setActiveTab(key)
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