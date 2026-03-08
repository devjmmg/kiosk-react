import { Outlet } from 'react-router-dom';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import Sidebar from '../components/Sidebar';
import Summary from '../components/Summary';
import useKiosk from '../hooks/useKiosk';
import ModalProduct from '../components/ModalProduct';
import useAuth from '../hooks/useAuth';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.70)' // fondo más oscuro
    }
};

Modal.setAppElement('#root');

export default function layout() {
    
    const { user, error } = useAuth({middleware: 'auth'});
    const { modal } = useKiosk();
    
    return (
        <>
            <div className='flex h-screen'>
                <aside className='w-72'>
                    <Sidebar />
                </aside>
                
                <main className='flex-1 overflow-auto'>
                    <Outlet />
                </main>
                
                <aside className='w-72'>
                    <Summary />
                </aside>
            
            </div>

            <Modal isOpen={modal} style={customStyles}>
                <ModalProduct />
            </Modal>

            <ToastContainer />

        </>
    )
}
