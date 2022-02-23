import React, { useEffect, useState } from 'react'
import {  Accordion, Badge, Button, Card } from 'react-bootstrap';
import MainScreen from '../../components/MainScreen'
import {Link} from "react-router-dom"
import axios from "axios"

const MyNotes = () => {

  const[notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if(window.confirm("Are you sure?")){

    }
  };

  console.log(notes);

  const fetchNotes = async() => {
    const {data}=await axios.get('/api/notes');
    setNotes(data);
  }

  useEffect(() => {
    fetchNotes();
  }, [])

  return (
    <MainScreen title='Welcome Tanya Gangegedara..'>
      <Link to='createnote'>
        <Button style={{marginLeft: 10, marginBottom: 6}} size="lg">
          Create New Todo
        </Button>
        
      </Link>
        {
          notes.map(=> (
         <Accordion key={note._id}>
           <Card style={{margin: 10}}>
            <Card.Header style={{display: "flex"}}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: "1",
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                  {note.title}
                 
               
              </span>
          
            <div>
              <Button href={`/note/${note._id}`}>Edit</Button>
              <Button variant='danger' className='mx-2' onClick={() => deleteHandler(note._id)}>Delete</Button>
            </div>
            </Card.Header>
           
            <Card.Body>
              <h4>
                <Badge variant='success'>
                  Category - {note.category}
                </Badge>
              </h4>
            <blockquote className="blockquote mb-0">
              <p>
                {note.content}
              </p>
              <footer className="blockquote-footer">
               Created on Date
              </footer>
            </blockquote>
            </Card.Body>
          </Card>
         </Accordion>
              
        

          ))
        }
          
      
    </MainScreen>
  );
};

export default MyNotes
