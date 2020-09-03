import React, {useEffect,useState} from 'react'
import {Modal,Form,Button} from 'react-bootstrap'




const PlaylistModal = (props)=>{
    const show=props.show
    const hide = props.hide
    const add=props.add
    
    return(
    <>
    <Modal show={show} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>CREATE A NEW PLAYLIST</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control size="sm" type="text" onChange={props.name} placeholder="Small text" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size='sm' onClick={hide}>
            Cancel
          </Button>
          <Button variant="primary" size='sm' onClick={add}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>)
}

export default PlaylistModal