import React from 'react'
import { Button, Form, Table } from 'react-bootstrap'

export default function CreateStudent() {
  return (
    <>
        <div className="container">
            <h1 className="text-center mt-5">CreateStudent</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter Student Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Button variant="primary" type="button">
                Submit
                </Button>
            </Form>
            <br>
            </br>
            <hr>
            </hr>
            <br>
            </br>
            <h1 className='text-center'>Student Table</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th> Name</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>studentA</td>
                        <td >
                            <button className='btn btn-primary btn-sm me-1'>view</button>
                            <button className='btn btn-success btn-sm me-1'>update</button>
                            <button className='btn btn-danger btn-sm'>delete</button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </>
  )
}
