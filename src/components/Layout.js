import { useState } from 'react';
import '.././styles/Layout.css'

import Box from '@mui/material/Box';
import Modal from './Modal';

import { data } from '../data/dataMerger';
import DataDisplay from './DataDisplay';

function Layout() {
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState();

  const toggleModal = (e) => {
    setModalOpen(!modalOpen)
    const data = filterData(e.target.className)
    setClickedItem(data)
  }

  const filterData = (category) => {
    const result = data[`${category}`]
    return result
  }

  const [menuElements, setMenuElements] = useState([
    {title: 'work', id: 1},
    {title: 'schools', id: 2},
    {title: 'techStack', id: 3},
    {title: 'contact', id: 4},
    {title: 'intro', id: 5},
    {title: 'refi1', id: 6},
    {title: 'refi2', id: 7},
    {title: 'refi3', id: 8},
    {title: 'refi4', id: 9},
    {title: 'refi5', id: 10},
    {title: 'refi6', id: 11},
    {title: 'refi7', id: 12},
    {title: 'refi8', id: 15},
  ])
     
  return (
  
    <div className="Layout">
 
      <Box className="grid-container">
        {menuElements.map((menu) => (
          <div className={menu.title} key={menu.id} onClick={(e) => toggleModal(e)}>
            {menu.title}
          </div>
        ))}
      </Box>

      {modalOpen &&
        <div onClick={toggleModal}>
          <Modal >
            <DataDisplay clickedItem={clickedItem} />
          </Modal>
        </div>
      }

    </div>
  );
}

export default Layout;
