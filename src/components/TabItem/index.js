import './index.css'

const TabItem = props => {
  const {tabItem, selectTab, isSelectedTab} = props
  const {tabId, displayText} = tabItem

  const onSelectTab = () => {
    selectTab(tabId)
  }

  return (
    <li className="tab-item">
      <button
        className={`tab-item-btn  ${isSelectedTab ? 'selected-tab' : ''}`}
        onClick={onSelectTab}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
