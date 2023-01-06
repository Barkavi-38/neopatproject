import MainContainer from "./MainContainer";
const Sidebar = ({sideIcons,
                  clickEvent,
                  sideBarProp,
                  curContent,
                  notes,
                  noteAdd,
                  arcSet,
                  noteSet,
                  trashSet,
                  deleteSet,
                  Lightbulb,
                  Archive,
                  Trash,
                  searchKey
                }) => {
    
    return (
        <div style={{display:"flex"}}>
      <div 
        id="iconDiv"
        className=  {sideBarProp[0].width.concat (" ",sideBarProp[0].className)}
       
        >
        
        {
        
        sideIcons?.map((sideIcon =>(
            <div 
            key={sideIcon.id} 
            className="pt-1"
            >
            <button   type="button"  onClick={() =>clickEvent(sideIcon.id)} className= {"btn btn-white btn-sm border-0 ".concat(sideIcon.buttonClassName)} style={{background:sideIcon.bg}} > <span> < sideIcon.iconName size ={20} color="#0f0f0f"/></span>{sideIcon.buttonName}</button>
        </div>
        )))}
        
       
       
      </div>
       <div className="container" >
       <MainContainer 
          curContent={curContent} 
          notes={notes} 
          noteAddfn={noteAdd}
          setArc={arcSet}
          setNote={noteSet}
          setTrash={trashSet}
          setDelete={deleteSet}
          Lightbulb={Lightbulb}
          Archive={Archive}
          Trash={Trash}
          searchKey={searchKey}
          />
   </div>

   </div>
    )
  }
  
  export default Sidebar