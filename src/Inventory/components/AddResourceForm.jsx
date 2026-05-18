import {useState} from "react";
import styles from "../inventory.module.css"
import {X} from 'lucide-react';

const INITIAL_STATE = {id: "", icon: "", name: "", quantity: 0};

export default function AddResourceForm({handleCraftResource, onClose}) {
  const [data, setData] = useState(INITIAL_STATE)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.id || !data.name) return;
    handleCraftResource(data);
    setData(INITIAL_STATE)
    onClose(false);
  }
  return (
    <>
      <div className={styles.formwrapper}>
        <div className={styles.formcontainer}>
          <X className={styles.closebtn} color={"#fffff"} onClick={() => onClose(false)}/>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputcontainer}>
              <input
                type="text"
                placeholder={"Тип русурсу"}
                value={data.id}
                onChange={(e) => setData({...data, id: e.target.value})}/>
              <input
                type="text"
                placeholder={"Іконка"}
                value={data.icon}
                onChange={(e) => setData({...data, icon: e.target.value})}/>
              <input
                type="text"
                placeholder={"Назва"}
                value={data.name}
                onChange={(e) => setData({...data, name: e.target.value})}
              />
            </div>
            <button>Додати ресурс</button>
          </form>
        </div>
      </div>
    </>
  )
}