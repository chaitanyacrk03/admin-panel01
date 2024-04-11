import Board, {
    moveCard,
    moveColumn,
    removeCard,
    addCard,
  } from "@asseinfo/react-kanban";
  import "@asseinfo/react-kanban/dist/styles.css";
  import "./Board.css";
  import {boardActions} from '../../store/Calendar'
  import {useSelector,useDispatch} from 'react-redux';
  import { RxCross2 } from "react-icons/rx";
  import { IoMdAdd } from "react-icons/io";
  import AddCardModal from "../../Components/AddCardModal/AddCardModal";
  import { useState ,useRef} from "react";
  
  const Boards = () => {
    let board=useSelector(state=>state.board.boardData)
    const [one,setOne]=useState(false)
    const [two,setTwo]=useState(false)
    const [three,setThree]=useState(false)
    const [four,setFour]=useState(false)
    const dispatch=useDispatch()
    const d1=useRef();
    const d2=useRef();
    const d3=useRef();
    const d4=useRef();
  function getVisible(id){
    if (id==1){
        return one
    }
    if (id==2){
        return two
    }
    if (id==3){
        return three
    }
    if (id==4){
        return four
    }
    return true
  }
  function checkDialog(id){
    console.log(id)
    if (id==1){
        return d1
    }
    if (id==2){
        return d2
    }
    if (id==3){
        return d3
    }
    if (id==4){
        return d4
    }
  }
  function setModalVisible(id){
    if (id==1){
         setOne((value)=>!value)
    }
    if (id==2){
        setTwo((value)=>!value)
    }
    if (id==3){
        setThree((value)=>!value)
    }
    if (id==4){
        setFour((value)=>!value)
    }
  }
  function openModal(id){
    if (id==1){
        d1.current.open()
   }
   if (id==2){
    d2.current.open()
   }
   if (id==3){
    d3.current.open()
   }
   if (id==4){
    d4.current.open()
   }
  }
  
    const handleColumnMove = (_card, source, destination) => {
      const updatedBoard = moveColumn(board, source, destination);
      dispatch(boardActions.setBoardData(updatedBoard)) 
    };
  
    const handleCardMove = (_card, source, destination) => {
      const updatedBoard = moveCard(board, source, destination);
      dispatch(boardActions.setBoardData(updatedBoard)) 
    };
  
    const getColumn = (card) => {
      const column = board.columns.filter((column) =>
        column.cards.includes(card)
      );
      return column[0];
    };
  
    const getGradient = (card) => {
      const column = getColumn(card);
      const title = column.title;
      if (title === "TODO") {
        return {
          background:
            "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 189, 220) 163.54%)",
        };
      } else if (title === "Doing") {
        return {
          background:
            "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(220, 48, 48) 163.54%)",
        };
      } else if (title === "Completed") {
        return {
          background:
            "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 220, 86) 163.54%)",
        };
      } else if (title === "Backlog") {
        return {
          background:
            "linear-gradient(65.35deg, rgba(65, 65,65, 0.67) -1.72%,rgba(134, 48, 220) 163.54%)",
        };
      }
    };
  
    return (
      <div className="board-container">
        <span></span>
        <span>Create Your List</span>
        <Board
          allowAddColumn
          allowRenameColumn
          allowRemoveCard
          onCardDragEnd={handleCardMove}
          onColumnDragEnd={handleColumnMove}
          renderCard={(props) => (
            <div className="kanban-card" style={getGradient(props)}>
              <div>
                <span>{props.title}</span>
                <button
                  className="remove-button"
                  type="button"
                  onClick={() => {
                    const updatedBoard = removeCard(
                      board,
                      getColumn(props),
                      props
                    );
                    dispatch(boardActions.setBoardData(updatedBoard)) 
                  }}
                >
                  <RxCross2 color="white" size={15} />
                </button>
              </div>
              <span>{props.description}</span>
            </div>
          )}
          renderColumnHeader={(props) => {
            const handleCardAdd = (title, detail,prop) => {

              const card = {
                id: new Date().getTime(),
                title,
                description: detail,
              };
  
              const updatedBoard = addCard(board, prop, card);
              dispatch(boardActions.setBoardData(updatedBoard)) 
              setModalVisible(props.id);
            };
  
            return (
              <div className="column-header">
                <span>{props.title}</span>
                <IoMdAdd
                  color="white"
                  size={25}
                  title="Add card"
                  onClick={() => {openModal(props.id)}}
                />
                <AddCardModal
                  ref={checkDialog(props.id)}
                  prop={props}
                  handleCardAdd={handleCardAdd}
                  onClose={() => setModalVisible(props.id)}
                />
              </div>
            );
          }}
        >
          {board}
        </Board>
      </div>
    );
  };
  
  export default Boards;