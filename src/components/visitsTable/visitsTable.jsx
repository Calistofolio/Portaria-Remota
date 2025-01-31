import { useContext } from "react"
import { VisitContext } from "../../context/visitContext"
import { NavLink } from "react-router"
import style from "./VisitsTable.module.css"
import Button from "../../components/button"
import VisitStatus from "../visit-status"

function VisitsTable() {
    const {visitInfo} = useContext(VisitContext)

    return (
        <table>
            <thead className={style.head}>
                <tr>
                    <th>Visitante</th>
                    <th>Data</th>
                    <th>Hora</th>
                    <th></th>
                    <th></th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
            {visitInfo.map((c, i) =>
                <tr key={i}> 
                    <td> {c.name} </td> 
                    <td>{c.date} </td>
                    <td> {c.hour}</td> 
                    <td> {c.status == true ? <NavLink to={"/visitData/" + i}><Button title="Editar"/></NavLink> : " "}</td>
                    <td> {c.status == true ? <NavLink to={"/visitData/" + i}><Button title="Cancelar visita"/></NavLink> : " "}</td>
                    <td> <VisitStatus visit={c.status}/></td>
                </tr>)}
            </tbody>
          </table>
        )
    }

export default VisitsTable
