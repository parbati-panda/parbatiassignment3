import { Fragment } from 'react';
import ReactDOM  from 'react-dom';
import classess from './Modal.module.css';

const Backdrop=props=>{
    return <div className={classess.backdrop} onClick={props.onClose}></div>
};

const ModalOverdelay=props=>{
    return ( <div className={classess.modal}>
        <div className={classess.content}>{props.children}</div>
    </div>
    );
};
const portalElement=document.getElementById('overlays');
const Modal=props=>{
return <Fragment>

    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
    {ReactDOM.createPortal(<ModalOverdelay>{props.children}</ModalOverdelay>,portalElement)}

    </Fragment>
};

export default Modal;