import React, { useState ,forwardRef,useRef,useImperativeHandle} from "react";
import css from "./AddCard.module.css";
const AddCardModal= forwardRef(function AddCardModal ({ prop,visible, onClose, handleCardAdd },ref){
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const dialog=useRef()
  useImperativeHandle(
    ref,
    () => {
      return {
        open(){
            dialog.current.showModal();
        }
      }
    },
  )
  return (
    <dialog ref={dialog} className={css.dialog}>
      <div className={css.container}>
        <div>
          <span className={css.label}>Card Title</span>
          <input
            type="text"
            className={css.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <span className={css.label}>Detail </span>
          <textarea
            rows={10}
            className="css.input"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>
        <div className={css.buttons}>
        <button
          className={css.saveButton}
          disabled={title === "" && detail === ""}
          onClick={() => {
            handleCardAdd(title, detail,prop);
            setDetail("");
            setTitle("");
            dialog.current.close()
          }}
        >
          Add
        </button>
        <button className={css.closeButton} onClick={()=>{dialog.current.close()}}>
            Close
        </button>
        </div>
      </div>
    </dialog>
  );
}
)

export default AddCardModal;