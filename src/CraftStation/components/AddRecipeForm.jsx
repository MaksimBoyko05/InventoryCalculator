import styles from '../craftStation.module.css'
import {useState} from "react";
import {X} from "lucide-react";

export default function AddRecipeForm({inventory, handleCreateRecipe, onClose}) {
  const INITIAL_RECIPE = {id: '', resultName: '', resultIcon: '', requirements: []};
  const [recipeData, setRecipeData] = useState(INITIAL_RECIPE);
  const [selectedResourceId, setSelectedResourceId] = useState('')
  const [reqQuantity, setReqQuantity] = useState(1)
  const [isAddingReq, setIsAddingReq] = useState(false)
  const handleClose = () => {
    setRecipeData(INITIAL_RECIPE)
    onClose(false)
  }
  const handleAddReq = (selectedResourceId, reqQuantity) => {
    if (!selectedResourceId) return;
    const isReqExist = recipeData.requirements.some(item => item.resourceId === selectedResourceId)
    if(isReqExist){
      setRecipeData({
        ...recipeData,
        requirements: recipeData.requirements.map(item =>{
          if(item.resourceId === selectedResourceId){
            return {...item, requiredQty: Number(item.requiredQty) + Number(reqQuantity)}
          }else{
            return item;
          }
        })
      })
    }else{
      setRecipeData({
        ...recipeData,
        requirements: [...recipeData.requirements, {resourceId: selectedResourceId, requiredQty: Number(reqQuantity)}]
      })
    }
    setSelectedResourceId("")
    setReqQuantity(1)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!recipeData.id || !recipeData.resultName || !recipeData.resultIcon || recipeData.requirements.length === 0) {
      alert("Заповніть всі поля")
      return;
    }
    handleCreateRecipe(recipeData);
    setRecipeData(INITIAL_RECIPE)
  }
  return (
    <div className={styles.formwrapper}>
      <div className={styles.formcontainer}>
        <X
          className={styles.closebtn}
          color={"#fffff"}
          onClick={handleClose}/>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputcontainer}>
            <input
              type={"text"}
              value={recipeData.id}
              onChange={(e) => setRecipeData({...recipeData, id: e.target.value})}
              placeholder={"id"}/>
            <input
              type={"text"}
              value={recipeData.resultName}
              onChange={(e) => setRecipeData({...recipeData, resultName: e.target.value})}
              placeholder={"Назва"}/>
            <input
              type={"text"}
              value={recipeData.resultIcon}
              onChange={(e) => setRecipeData({...recipeData, resultIcon: e.target.value})}
              placeholder={"Іконка"}/>
          </div>
          <div>
            <div className={styles.reqtitle}><p>Вимоги:</p><p onClick={() => setIsAddingReq(true)}>+</p></div>
            <div className={styles.reqbagescontainer}>
              {recipeData.requirements.map(item => {
                const resourceInfo = inventory.find(res => res.id === item.resourceId);
                return(
                  <div className={styles.reqbage} key={item.resourceId}>{resourceInfo.icon} {item.requiredQty}</div>
                )
              })}
            </div>
          </div>
          {isAddingReq && (
            <div className={styles.addreqsection}>
              <div className={styles.reqfields}><select
                value={selectedResourceId}
                onChange={(e) => setSelectedResourceId(e.target.value)}>
                <option
                  value=""
                  disabled>Оберіть ресурс
                </option>
                {inventory.map(item => (
                  <option
                    key={item.id}
                    value={item.id}>{item.name}</option>
                ))}
              </select>
                <input
                  type={"number"}
                  min="1"
                  value={reqQuantity}
                  onChange={(e) => setReqQuantity(e.target.value)}
                  placeholder={"к-ть"}/></div>
              <button
                onClick={() => handleAddReq(selectedResourceId, reqQuantity)}
                type={"button"}>Додати вимогу
              </button>
            </div>
          )}
          <button>Додати рецепт</button>
        </form>
      </div>

    </div>
  )
}