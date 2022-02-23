import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import "./ProfileScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/userActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const ProfileScreen = () => {

  return (
    <MainScreen title="EDIT PROFILE">
      <div>
        <Row className="profileContainer">
          <Col md={6}>
            <Form >
             
              
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                 // value={name}
                  //onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  //value={email}
                  //onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  //value={password}
                  //onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  //value={confirmPassword}
                  //onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "}
             
              <Form.Group controlId="pic">
                <Form.Label>Change Profile Picture</Form.Label>
                <Form.File
                 // onChange={(e) => postDetails(e.target.files[0])}
                  id="custom-file"
                  type="image/png"
                  label="Upload Profile Picture"
                  custom
                />
              </Form.Group>
              <Button type="submit" varient="primary">
                Update
              </Button>
            </Form>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
           
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default ProfileScreen;
