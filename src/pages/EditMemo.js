import { Link } from 'react-router-dom';
import { TiArrowBackOutline } from "react-icons/ti";
import { TbHttpDelete } from "react-icons/tb";

const EditMemo = () => {
    return (
        <section>
            <header className="create-memo__header">
                <Link to="/" className="btn"><TiArrowBackOutline/></Link>
                <button className='btn lg primary save__btn'>Save</button>
                <button className='btn danger'><TbHttpDelete/></button>
            </header>
            <form className='create-memo__form'>
                <input type="text" placeholder="Title" autoFocus />
                <textarea rows="28" placeholder="Memo details..."></textarea>
            </form>
        </section>
    );
    }

export default EditMemo;