import styles from "../inventory.module.css"

export default function ResourceCard({resources}) {
  return (
    <>
      <div className={styles.cardscontainer}>
        {resources.map(resource => (
          <div
            className={styles.itemcard}
            key={resource.id}>
            <div className={styles.itemtitle}>
              <span>{resource.icon}</span>
              <p>{resource.name}</p>
            </div>
            <p className={styles.itemquantity}>{resource.quantity}</p>
            <div className={styles.btncontainer}>
              <button disabled={resource.quantity < 1}>-</button>
              <button>+</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}