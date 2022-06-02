import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCard } from '../reducer/Reducer';
import { deleteCard } from '../reducer/Reducer';


const TodoContainer = () => {

    const [msg,setMsg] = useState("No items in the To Do App create card !");
    const [addCardInput,setAddCardInput] = useState("")
    const dispatch = useDispatch();

    const cards = useSelector((state)=>state.cardReducer.cardz)
    const navigate = useNavigate();

    const dispatchAddCard = () => {
        dispatch(addCard(addCardInput));
        console.log(cards.length-1);
        if(cards.length > -1){
            setMsg("");
            setAddCardInput("")
        }
    }

    useEffect(()=>{
        if(cards.length > 0){
            setMsg("");
        }
    },[])

    const goToCard = (id) =>{
        navigate(`/${id}`)
    }

    const dispatchDelete = (e) =>{       
        let id = e.currentTarget.getAttribute("id");
        dispatch(deleteCard(id))
    }

    return (
        <div>
            <div className="container_1 ">
                <div className="top_1"> <strong style={{ "color": "white" }}>Tasks</strong> <span style={{ "fontWeight": "lighter", "color": "rgb(99, 99, 99)", "fontFamily": "sans-serif" }}>Lists</span>  </div>
                <div className="top_2">
                    <button className='w-80 text-2xl p-1 btnborder relative bottom-6 rounded-full bg-green-600 text-white border-none hover:bg-green-700 hover:text-whitesmoke' data-toggle="modal" data-target="#exampleModalCenter">
                        <svg className="w-8 h-8 iconplus relative top-4 left-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                        <span className='relative left-4 bottom-4'> Create Todo Card</span></button></div>
            </div>
            <br />

            <div className="container_2 flex flex-wrap">
                {cards.map((current,index)=>{
                   return(
                        <div className='relative' key={index}>
                        <div className="cards" onClick={()=>goToCard(index)}>
                        <h2 className="title">{current.title}</h2><hr className="hr_style"/>
                        <div className="inDiv" >
                            <ul id="ul">
                                {current.list.map((cur,ind)=>{
                                   return( <li key={ind} className='li'>{cur}</li>)
                                })}
                            </ul></div>
                       </div>
                       <button className="del absolute" id={index} onClick={(e)=>dispatchDelete(e)}>
                       <i className="fas fa-trash-alt " ></i>
                       </button>
                    </div>
                   )
                })}
            </div>

            <div id="showww">{msg}</div>


            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="addCard" >
                            <div className="form2">
                                <span className="add_head">Name Your Todo Card</span>
                                <br /> <br />
                                <form action="#">
                                    <input onChange={(e)=>setAddCardInput(e.target.value)} value={addCardInput} type="text" name="addtext" id="addtext" autoComplete='off' spellCheck='false' className='inputaddbox'/><br />
                                </form>
                                <br />
                                <button onClick={()=>dispatchAddCard()} type="submit" id="addBtn" className="add_btn close hover:bg-red-600" data-dismiss="modal" aria-label="Close">ADD</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>


    )
}

export default TodoContainer