
import { Card } from "react-bootstrap";

const SearchScreen = ({ notes, searchKey,Lightbulb,Archive,Trash }) => {

    let flag = 0
    for(let i =0;i<notes.length;i++)
    {
        if(notes[i].title.includes(searchKey) || notes[i].data.includes(searchKey)) 
        {
            flag = 1
            break
        }
    }

    if(flag == 0)
    {
        return   <div className="mt-3"> <center>No Note Available</center></div>
    }

  return (
    <div>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {notes?.map(
        (note) =>
          (note.data.includes(searchKey) || note.title.includes(searchKey)) && (
            
            <Card  key={note.id} style={{ width: "18rem", margin: "10px" }}>
              <Card.Body>
                <div >
                  <Card.Title>{note.title}</Card.Title>
                  <Card.Text>{note.data}</Card.Text>
                  {note.noteFlag && (
                    <div>
                      <button
                        type="button"
                        className="btn btn-white btn-sm rounded-circle border-0 searchButton float-end"
                      >
                        {" "}
                        <span>
                          {" "}
                          <Lightbulb size={20} color="black" />
                        </span>
                      </button>
                    </div>
                  )}
                  {note.arcFlag && (
                    <div>
                    <button  
                    type="button" 
                    className="btn btn-white btn-sm rounded-circle border-0 searchButton float-end"
                    > <span> <Archive  size ={20} color="black"/></span></button>
                    
                  </div>
                  )}
                  {note.deleteFlag && (
                    <div>
                    <button  
                    type="button" 
                    className="btn btn-white btn-sm rounded-circle border-0 searchButton float-end"
                    > <span> <Trash  size ={20} color="black"/></span></button>
                    
                  </div>
                  )}
                </div>
              </Card.Body>
            </Card>

          )
          
      )}
    </div>
    
    </div>
  );
};

export default SearchScreen;
