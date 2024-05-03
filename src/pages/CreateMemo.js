import { Link } from 'react-router-dom';
import { TiArrowBackOutline } from "react-icons/ti";


const CreateMemo = () => {
    return (
        <section>
            <header className='create-memo__header'>
                <Link to="/" className="btn"><TiArrowBackOutline/></Link>
                <button className='btn lg primary'>Save</button>
            </header>
            <form className='create-memo__form'>
                <input type="text" placeholder="Title" autoFocus />
                <textarea rows="28" placeholder="Note details..."></textarea>
            </form>
        </section>
    );
    }


export default CreateMemo;