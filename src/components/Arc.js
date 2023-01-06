
import CardDisp from "./CardDisp"

const Arc = ({notes,Lightbulb,Trash,setNote,setTrash}) => {
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap"  }}>
        {notes?.map((note) => (
          note.arcFlag &&
          <div key={note.id}>
            <CardDisp note={note} Ico1={Lightbulb} Ico2={Trash} set1={setNote} set2={setTrash}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Arc
