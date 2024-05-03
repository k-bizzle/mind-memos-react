import { BsSearchHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import NoteItem from "../components/MemoItem";

const Memos = ({notes}) => {
    return (
        <section> 
            <header className="memos__header">
                <h2>My Memos</h2>
                {/*  <input type="text" autoFocus placeholder="Keyword..." />  */}
                <button className='btn'><BsSearchHeart/></button>
            </header>
            <div className="memos__container"> 
                {  
                    notes.map((note) => <NoteItem key={note.id} note={note} />)  
                }
            </div>
            <Link className='btn add__btn'><FaPlus/></Link>
        </section>
    )
    }

export default Memos;