

const TabItem = (props)=>{

    const {tabDetails, updateTabId, isActive} = props;
    const {displayText, tabId} = tabDetails;

    const onChangeTabId = ()=>{
        updateTabId(tabId)
    }

    const btnClassName = isActive  ? "active-tab tab-btn" :"tab-btn";
   

    return(
        <li className="tab-item-container m-1">
            <button
            className={btnClassName}
            onClick={onChangeTabId}
            >
                {displayText}
            </button>
        </li>
    )
}

export default TabItem;