import style from "./MainCard.module.css"
function MainCard({children}) {

  return (
    <div className={style.card}>
      {children}
    </div>
  )
}

export default MainCard
