import Navbar from "./NavbarVar";
import Sidebar from "./Sidebar";
import { useState ,useEffect} from "react";
import { Lightbulb, Archive, Trash } from "react-bootstrap-icons";
import { db } from "./firebase-config";
import { collection,getDocs,addDoc,updateDoc,doc,deleteDoc } from "firebase/firestore";

const Header = () => {
  const buttonNameList = [
    <h5 style={{ paddingRight: "16px" }}>Notes</h5>,
    <h5>Archive</h5>,
    <h5 style={{ paddingRight: "20px" }}>Trash</h5>,
  ];
  const[searchKey,setSerachKey] = useState("")
  const notesCollectionRef = collection(db,"db_notes")
  const [sideIcons, updateSideIcon] = useState([
    {
      id: 1,
      bg: "#f7ce6d",
      buttonName: "",
      buttonClassName: "rounded-circle searchButton",
      iconName: Lightbulb,
    },
    {
      id: 2,
      bg: "white",
      buttonName: "",
      buttonClassName: "rounded-circle searchButton",
      iconName: Archive,
    },
    {
      id: 3,
      bg: "white",
      buttonName: "",
      buttonClassName: "rounded-circle searchButton",
      iconName: Trash,
    },
  ]);



  const [sideBarProp, updateSideBarProp] = useState([
    {
      className: "",
      flag: false,
      width: "width100",
    },
  ]);

  const [notes, updateNotes] = useState([]);

  const addNote = async (note) => {

    try {
      const docRef = await addDoc(notesCollectionRef, {
        title: note.inputTitle,
        data: note.inputData,
        noteFlag: true,
        arcFlag: false,
        trashFlag: false
      });
    
      console.log("Document written with ID: ", docRef.id);

      const newNote = {
        id: docRef.id,
        title: note.inputTitle,
        data: note.inputData,
        noteFlag: true,
        arcFlag: false,
        trashFlag: false,
      };
      updateNotes([...notes, newNote]);
    } catch (e) {
      alert("Error.....")
    }
  
  };
  const [curContent, updateCurContent] = useState(1);
  const changeSideBar = (id) => {
    updateSideBarProp(
      sideBarProp.map((s) => {
        return s.flag === false
          ? {
              ...s,
              className: "shadow-lg p-3 mb-5 bg-white rounded",
              flag: true,
              width: "width200",
            }
          : { ...s, className: "", flag: false, width: "width100" };
      })
    );
    updateSideIcon(
      sideIcons.map((sideIcon) =>
        sideBarProp[0].flag === true
          ? {
              ...sideIcon,
              buttonClassName: "rounded-circle searchButton",
              buttonName: "",
            }
          : {
              ...sideIcon,
              buttonClassName: "rounded searchButton2 btnAtEx",
              buttonName: buttonNameList[sideIcon.id - 1],
            }
      )
    );
  };

  const changeBg = (id) => {
    updateSideIcon(
      sideIcons.map((sideIcon) =>
        sideIcon.id === id
          ? { ...sideIcon, bg: "#f7ce6d" }
          : { ...sideIcon, bg: "white" }
      )
    );
    updateCurContent((s) => id);
    setSerachKey("")
   
  };

  const setArc = (id) =>{
    updateNotes(
      notes.map((note) =>
      
        note.id === id
        ?{...note,noteFlag:false,arcFlag:true,trashFlag:false}
        :note
      
      )
    )
    updateOnDb(id,2)
  }

  const updateOnDb = async (id,flag) =>{
    const userNote = doc(db,"db_notes",id)
    if (flag === 1)
    {
      try{
      const newFileds = {
        noteFlag:true,
        arcFlag:false,
        trashFlag:false
      }
      await updateDoc(userNote,newFileds)
    }
    catch(e)
    {
      alert("Changes Not Saved")
    }
    }
  else if  (flag === 2)
    {
      try{
      const newFileds = {
        noteFlag:false,
        arcFlag:true,
        trashFlag:false
      }
      await updateDoc(userNote,newFileds)
    }
    catch(e)
    {
      alert("Changes Not Saved")
    }
    }
    else if  (flag === 3)
    {
      try{
      const newFileds = {
        noteFlag:false,
        arcFlag:false,
        trashFlag:true
      }
      await updateDoc(userNote,newFileds)
    }
    catch(e)
  {
    alert("Changes Not Saved")
  }
  }

  else if  (flag === 4)
    try
    {
      await deleteDoc(userNote)
    }
    catch(e)
    {
      alert("Changes Not Saved")
    }
  }
  
  

  const setNote = (id) =>{
    updateNotes(
      notes.map((note) =>
      
        note.id === id
        ?{...note,noteFlag:true,arcFlag:false,trashFlag:false}
        :note
      
      )
    )
    updateOnDb(id,1)
  }

  const setTrash = (id) =>{
    updateNotes(
      notes.map((note) =>
      
        note.id === id
        ?{...note,noteFlag:false,arcFlag:false,trashFlag:true}
        :note      
      )
    )
    updateOnDb(id,3)
    
  }

  const setDelete = (id) =>{
    updateNotes(
      notes.map((note) =>
      
        note.id === id
        ?{...note,noteFlag:false,arcFlag:false,trashFlag:false}
        :note
      
      )
    )
    updateOnDb(id,4)
  }

  const updateSerachKey = (data) =>{
    setSerachKey(data)
    
  }

  //quering from db(read)

  useEffect(() => {
    const getNotes = async () =>{
          const data = await getDocs(notesCollectionRef)
          updateNotes(data.docs.map((doc) => ({...doc.data(),id:doc.id})))
    }
    getNotes()
  },[])
  


  return (
    <div>
      <Navbar 
        sideBarProp={sideBarProp} 
        clickEventTog={changeSideBar} 
        searchKey ={searchKey}
        searchKeyUpdate={updateSerachKey}
        />
      <Sidebar
        sideIcons={sideIcons}
        clickEvent={changeBg}
        sideBarProp={sideBarProp}
        curContent={curContent}
        notes={notes}
        noteAdd={addNote}
        arcSet={setArc}
        noteSet={setNote}
        trashSet={setTrash}
        deleteSet={setDelete}
        Lightbulb={Lightbulb}
        Archive={Archive}
        Trash={Trash}
        searchKey ={searchKey}
 
      />
    </div>
  );
};

export default Header;
