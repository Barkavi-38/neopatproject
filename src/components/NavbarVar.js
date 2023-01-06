import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Search,Gear,LayoutSplit,Justify} from "react-bootstrap-icons";
import "./component.css"

const NavbarVar = ({sideBarProp,clickEventTog,searchKey,searchKeyUpdate}) => {
 
  return (
    <div>
    <Navbar  expand="lg" className="md-0" >
      <Container fluid className='mt-0 '>
        <div >
            <button 
             type="button" 
             className="btn btn-white btn-sm rounded-circle border-0 searchButton" 
             onClick={() =>clickEventTog(1)}
             > 
             <span type="button" > <Justify  size ={30} color="#888c89"/></span>
             </button>
        </div>
       
        <Navbar.Brand  href="#">Keep</Navbar.Brand> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Form className="d-flex w-75 " >
            <Form.Control
              type="search"
              placeholder="Search"
              className="input-lg me-2 border-0 "
              aria-label="Search"
              size="lg"
              bg="grey"
              style={{
                background:"#f5f7f5"
              }}
              value={searchKey} 
              onChange={(e) => searchKeyUpdate(e.target.value)}
            />
            <div>
            <button  
              type="button" 
              className="btn btn-white btn-sm rounded-circle border-0 searchButton "
              > <span> 
              <Search  size ={20} color="#888c89"/></span></button>
            </div>

            
            <div >
            <button  
              type="button" 
              className="btn btn-white btn-sm rounded-circle border-0 searchButton"
              > <span> <Gear  size ={20} color="#888c89"/></span></button>
              
            </div>
            
            <div >
            <button  type="button" className="btn btn-white btn-sm rounded-circle border-0 searchButton" > <span> <LayoutSplit  size ={20} color="#888c89"/></span></button>
            </div>
            </Form>
          
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    <hr className="hr mt-0 mb-0" />
   
    </div>
  )
}

export default NavbarVar
