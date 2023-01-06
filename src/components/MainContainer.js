import Tra from "./Tra"
import Note from "./Note"
import Arc from "./Arc"
import SearchScreen from "./SearchScreen"

const MainContainer = ({
    curContent,
    notes,
    noteAddfn,
    setArc,
    setNote,
    setTrash,
    setDelete,
    Lightbulb,
    Archive,
    Trash,
    searchKey
    
    }) => {

      let Comp

      if (searchKey != '')
      {
        Comp = <SearchScreen notes={notes} searchKey={searchKey} Lightbulb={Lightbulb} Archive={Archive} Trash={Trash}/>
      }
      
      else if (curContent == 1)
      {
          Comp = <Note notes={notes} noteAddfn={noteAddfn} Archive={Archive} Trash={Trash} setArc={setArc} setTrash={setTrash}/>
      }
      else if(curContent == 2)
      {
          Comp = <Arc notes={notes}  Lightbulb={Lightbulb} Trash={Trash} setNote={setNote} setTrash={setTrash}/>
      }
      else if(curContent == 3)
      {
          Comp = <Tra notes={notes}  Lightbulb={Lightbulb} Trash={Trash} setNote={setNote} setDelete={setDelete} />
      }

    return (
      <div>
        {Comp}
      </div>
    )
  }

export default MainContainer
