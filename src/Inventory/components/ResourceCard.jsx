import styles from "../inventory.module.css"

export default function ResourceCard({resources, addQuantity, removeQuantity}) {
  return (
    <>
      <div className={styles.cardscontainer}>
        {resources.map(resource => (
          <div
            className={styles.itemcard}
            key={resource.id}>
            <div className={styles.itemtitle}>
              <span>{resource.icon} {resource.name}</span>
            </div>
            <p className={styles.itemquantity}>{resource.quantity}</p>
            <div className={styles.btncontainer}>
              <button
                onClick={() => removeQuantity(resource.id)}
                disabled={resource.quantity < 1}>-
              </button>
              <button onClick={() => addQuantity(resource.id)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}