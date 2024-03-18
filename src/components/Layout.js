import { useEffect, useState } from 'react';
import '../styles/Layout.css'
import { menuElements } from '../data/menuElements';

import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';

import { data } from '../data/dataMerger';
import DataDisplay from './DataDisplay';
import Modal from './Modal';

function Layout() {
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState();
  const [clickedClassName, setClickedClassName] = useState();
  const [menu, setMenu] = useState(menuElements);

  const toggleModal = (e) => {
    setModalOpen(!modalOpen)
    setClickedClassName(e.target.className)
    setClickedItem(filterData(e.target.className))
  }

  const filterData = (category) => {
    return data[`${category}`]
  }
    
  return (
  
    <div className="Layout">
 
      <Box className="grid-container">
        {menu.map((menu) => (
          <div className={menu.title} key={menu.id} onClick={(e) => toggleModal(e)}>
            {menu.bgImg && <img className='bgImg' src={menu.bgImg} alt=''></img>}
            <Icon icon={menu.beforeImg}></Icon>
            <p className='displayName'>{menu.displayName}</p>
          </div>
        ))}
      </Box>

      {modalOpen &&
        <div onClick={toggleModal}>
          <Modal >
            <DataDisplay clickedItem={clickedItem} clickedClassName={clickedClassName}/>
          </Modal>
        </div>
      }

    </div>
  );
}

export default Layout;
