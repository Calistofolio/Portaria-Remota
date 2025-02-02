import { useContext } from "react"
import { VisitContext } from "../../context"
import style from "./VisitsTable.module.css"
import Button from "../button"
import VisitStatus from "../visit-status"

function VisitsTable() {
    const {visitInfo, cancelVisit, nav} = useContext(VisitContext)

    return (
        <table>
            <thead className={style.head}>
                <tr className={style.thead}>
                    <th>Visitante</th>
                    <th>Data</th>
                    <th>Hora</th>
                    <th colSpan={2}> </th>
                    <th colSpan={2}> </th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {visitInfo.map((c, i) =>
                <tr key={i} className={style.tbody}> 
                    <td> {c.name} </td> 
                    <td className={style.colorFont}>{c.date} </td>
                    <td className={style.colorFont}> {c.hour}</td> 
                    <td colSpan={2}> {c.status == true ? <Button onclick = {() => nav("/visitData/" + i)} title="Editar"/> : " "}</td>
                    <td colSpan={2}> {c.status == true ? <Button onclick = {() => cancelVisit(i)} title="Cancelar visita"/> : " "}</td>
                    <td> <VisitStatus visit={c.status}/></td>
                </tr>)}
            </tbody>
          </table>
        )
    }

export default VisitsTable
