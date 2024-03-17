import { useState } from 'react';
import '../styles/Layout.css'

import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import Modal from './Modal';

import { data } from '../data/dataMerger';
import DataDisplay from './DataDisplay';

function Layout() {
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState();
  const [clickedClassName, setClickedClassName] = useState();

  const toggleModal = (e) => {
    setModalOpen(!modalOpen)
    setClickedClassName(e.target.className)
    const data = filterData(e.target.className)
    setClickedItem(data)
  }

  const filterData = (category) => {
    const result = data[`${category}`]
    return result
  }

  const [menuElements, setMenuElements] = useState([
    {title: 'work', id: 1, displayName: "tapasztalat", beforeImg: "material-symbols-light:work-outline"}, 
    {title: 'schools', id: 2, displayName: "tanulmányok", beforeImg: "material-symbols-light:school-outline"},
    {title: 'techStack', id: 3, displayName: "software", beforeImg: "material-symbols-light:code"},
    {title: 'contact', id: 4, displayName: "kapcsolat", beforeImg: "material-symbols-light:alternate-email"},
    {title: 'intro', id: 5, displayName: "intro", beforeImg: "bi:emoji-smile-upside-down"},
    {title: 'refi1', id: 6, displayName: "referencia", beforeImg: "mdi:show", bgImg: "./imgs/01.png"},
    {title: 'refi2', id: 7, displayName: "referencia", beforeImg: "mdi:show", bgImg: "./imgs/02.png"},
    {title: 'refi3', id: 8, displayName: "referencia", beforeImg: "mdi:show", bgImg: "./imgs/03.png"},
    {title: 'refi4', id: 9, displayName: "referencia", beforeImg: "mdi:show", bgImg: "./imgs/04.png"},
    {title: 'refi5', id: 10, displayName: "referencia", beforeImg: "mdi:show", bgImg: "./imgs/05.png"},
    {title: 'refi6', id: 11, displayName: "referencia", beforeImg: "mdi:show", bgImg: "./imgs/06.png"},
    {title: 'refi7', id: 12, displayName: "referencia", beforeImg: "mdi:show", bgImg: "./imgs/07.png"},
    {title: 'refi8', id: 15, displayName: "referencia", beforeImg: "mdi:show", bgImg: "./imgs/08.png"},
    {title: 'refi9', id: 15, displayName: "referencia", beforeImg: "mdi:show", bgImg: "./imgs/09.png"},
    {title: 'refi10', id: 15, displayName: "referencia", beforeImg: "mdi:show", bgImg: "./imgs/10.png"},
  ])
     
  return (
  
    <div className="Layout">
 
      <Box className="grid-container">
        {menuElements.map((menu) => (
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
