import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { addItem } from '../reducer/Reducer';
import { deleteItem } from '../reducer/Reducer';

const TodoCard = () => {
  const {id} = useParams();  
  const useID = id;
  const cards = useSelector(state=>state.cardReducer.cardz);
  const navigate = useNavigate();  

    const goBack = () =>{
        navigate('/todocards')
    }

  const [itemText,setItemText] = useState("")  
  const dispatch = useDispatch();  

  const dispatchItem = () => {
    let item = itemText;
    dispatch(addItem({id,item}))
    setItemText("");
  }

  const dispatchDelItem = (e) => {
    let item_id = Number(e.currentTarget.getAttribute("id"));
    let object_id = Number(useID);
    dispatch(deleteItem({object:object_id,item:item_id}))
  }
 
  useEffect(()=>{
    window.scroll(0,0)
  },[])

  return (
      <div>
        <div className='container_4'>
            <div className='center-title'>
            {cards[id].title}
            </div>
           <div className="top_back"> 
                <button className="back_btn hover:bg-red-600" onClick={()=>goBack()}>
               <i className="fas fa-arrow-left"></i>
              &nbsp; Back</button>
           </div>
        </div>
     
            <div className="center_card " >
                     <div className="insideDiv" >
                        <ul id="ul">
                           { cards[id].list.map((cur,ind)=>{
                              return( 
                                  <li key={ind} className="li-center relative mb-2">
                                  {cur}
                                  <button onClick={(e)=>dispatchDelItem(e)} id={ind} className='del-item relative top-2 left-3'>
                                    <span className='relative del-span'>delete</span>
                                    </button>
                                  </li>
                                  )
                           })}
                        </ul>
                     </div>
            </div>

        <div className='flex justify-evenly mx-auto w-1/3 relative bottom-12'>
            <input onChange={(e)=>setItemText(e.target.value)} type="text" value={itemText} className='w-80 h-10 rounded-md text-xl'/>
            <button className='btn btn-success hover:bg-green-800' onClick={()=>dispatchItem()}>
            <i className="fas fa-plus" id="p"></i> &nbsp; <span className='text-lg'>Item</span>
            </button>
        </div>

    </div>   

  )
}

export default TodoCard