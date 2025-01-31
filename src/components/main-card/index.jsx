import style from "./MainCard.module.css"
function MainCard({children}) {

  return (
    <div className={style.relative}>
      <div className={style.card}>
        {children}
      </div>
    </div>
  )
}

export default MainCard