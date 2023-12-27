import React, { useState } from 'react';
import CardsView from "./CardsView";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";

function Store({ products }) {
    const cards = products.map((cards) => cards);
    const items = products.map((items) => items);
    const iconViewList = <span className="material-icons">view_list</span>;
    const iconViewModule = <span className="material-icons">view_module</span>;
    const [icon, setIcon] = useState(iconViewList);
    const onIconSwitch = () => {
        console.log(icon.props.children)
        icon.props.children === "view_list" ? setIcon(iconViewModule) : setIcon(iconViewList)
    }
    const View = icon.props.children === "view_list" ? CardsView : ListView;
    return (
        <div className="container">
            <IconSwitch icon={icon} onSwitch={onIconSwitch} />
            <View items={items} cards={cards} />
        </div>
    )
}

export default Store;