import CardDisp from "./CardDisp";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Collapse from "react-bootstrap/Collapse";
import { Search } from "react-bootstrap-icons";
import { useState } from "react";
const Note = ({ notes,noteAddfn ,Archive,Trash,setArc,setTrash}) => {
  const [open, setOpen] = useState(false);
  const [inputTitle,setInputTitle] = useState('')
  const [inputData,setInputData] = useState('')

  const  onClickInputButton = () =>{
    
    if(!inputData)
    {
      alert("Please add Note")
      return
    }
    noteAddfn({inputTitle,inputData})
    setInputData("")
    setInputTitle("")
  }

  return (
    <div>
      <div className="col text-center ">
        <button
          type="button"
          className="btn btn-white btn-lg rounded  mt-4 shadow p-3 mb-1 bg-white rounded "
          style={{ height: "60px", width: "18rem" }}
          onClick={() => setOpen(!open)}
          aria-controls="inputCard"
          aria-expanded={open}
        >
          Take a note...
        </button>
      </div>
      <Collapse in={open}>
        <Card
          id="inputCard"
          className="mx-auto"
          style={{ width: "18rem", margin: "0px",backgroundColor:"#f5f7f5" }}
        >
          <Card.Body>
            <Form >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="Title"  value={inputTitle} onChange={(e) => setInputTitle(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" rows={3} value={inputData} onChange={(e) => setInputData(e.target.value)}/>
              </Form.Group>
            </Form>
            <Button type="submit" className="float-end" onClick={onClickInputButton}>
              Add
            </Button>
          </Card.Body>
        </Card>
      </Collapse>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {notes?.map((note) => (
          note.noteFlag &&
          <div key={note.id}>
            <CardDisp note={note} Ico1={Archive} Ico2={Trash} set1={setArc} set2={setTrash}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
