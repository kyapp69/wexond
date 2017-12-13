import React from 'react'

import { observer } from 'mobx-react'

import Store from '../../store'

import { addTabGroup } from '../../actions/tabs'

import TabGroupsMenuItem from '../TabGroupsMenuItem'

@observer
export default class TabGroupsMenu extends React.Component {
  render () {
    const onAddClick = () => {
      addTabGroup()
      Store.app.tabGroupsMenu.refreshHeight()
      Store.editingTabGroup = -1
    }

    return (
      <div className='tab-groups-menu'>
        {Store.tabGroups.map((item, key) => {
          return <TabGroupsMenuItem tabGroup={item} key={key}></TabGroupsMenuItem>
        })}
        <div className='add-group' onClick={onAddClick}>Add new group</div>
        <div style={{clear: 'both'}}></div>
      </div>
    )
  }
}