import '.././styles/Modal.css'
import DataDisplay from './DataDisplay'


function Modal({children}){

  return (
    <div className="modal-backdrop">
      <div className='modal'>
        {children}
      </div>
    </div>
  )
}

export default Modal