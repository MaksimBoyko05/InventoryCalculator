import styles from "../craftStation.module.css"

export default function RecipeCard({recipes, currentResources, handleCraft, handleDeleteRecipe }) {
  return (
    <>
      <div className={styles.cardscontainer}>
        {recipes.map(recipe => {
          const canCraft = recipe.requirements.every(req => {
            const resourceInfo = currentResources.find(res => res.id === req.resourceId);
            return req.requiredQty <= resourceInfo.quantity;
          })
          return (
            <div
              className={styles.itemcard}
              key={recipe.id}>
              <div className={styles.recipetitle}><span>{recipe.resultIcon}</span>
                <p>{recipe.resultName}</p>
              </div>
              <div>
                {recipe.requirements.map(item => {
                  const resourceInfo = currentResources.find(res => res.id === item.resourceId);
                  const hasEnough = resourceInfo.quantity >= item.requiredQty;
                  return (
                    <div
                      key={item.resourceId}
                      className={styles.requirements}>
                      <p>{resourceInfo.icon} {resourceInfo.name}: </p>
                      <p className={hasEnough ? styles.enoughreq : styles.notenoughreq}>{resourceInfo.quantity} / {item.requiredQty}</p>
                    </div>
                  )
                })}
              </div>
              <button
                className={styles.craftbt}
                disabled={!canCraft}
              onClick={()=> handleCraft(recipe)}
              >
                {canCraft ? "Скрафтити" : "Недостатньо ресурсів"}
              </button>
              <button className={styles.deletebtn} onClick={() => handleDeleteRecipe(recipe.id)}>Видалити</button>
            </div>
          )
        })}
      </div>
    </>
  )
}