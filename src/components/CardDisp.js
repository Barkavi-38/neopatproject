import { Card } from "react-bootstrap"
 
const CardDisp = ({note,Ico1,Ico2,set1,set2}) => {
  return (
    
    <Card style={{ width: '18rem' ,margin:"10px"}}>
    <Card.Body>
      <Card.Title>{note.title}</Card.Title>
      <Card.Text>
       {note.data}
      </Card.Text>
      <button   type="button"  onClick={() =>set1(note.id)} className= "btn btn-white btn-sm border-0 float-end" style={{backgroundColor:"white"}} > <span> < Ico1 size ={15} color="black"/></span></button>
      <button   type="button"  onClick={() =>set2(note.id)} className= "btn btn-white btn-sm border-0 float-end" style={{backgroundColor:"white"}} > <span> < Ico2 size ={15} color="black"/></span></button>
    </Card.Body>
  </Card>
      

  )
}

export default CardDisp
