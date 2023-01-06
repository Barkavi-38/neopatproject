import CardDisp from "./CardDisp"
const Trash = ({ notes,Lightbulb,Trash,setNote,setDelete}) => {
  return (
    <div>
      <div className="mt-3"> <center>Notes in Trash are deleted after 7 days</center></div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {notes?.map((note) => (
          note.trashFlag &&
          <div key={note.id}>
            <CardDisp note={note} Ico1={Lightbulb} Ico2={Trash} set1={setNote} set2={setDelete}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trash
