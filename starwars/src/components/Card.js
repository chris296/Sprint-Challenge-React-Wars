import React from 'react';
import {
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText,
    Col
} from 'reactstrap';

const PeopleCard = (props) => {
  return (
    <div>
    <Col>
        <Card>
            <CardHeader>Character Name: {props.person.name}</CardHeader>
            <CardBody>
            <CardText>Name: {props.person.name}</CardText>
            <CardText>Height: {props.person.height}</CardText>
            <CardText>mass: {props.person.mass}</CardText>
            <CardText>Hair Color: {props.person.hair_color}</CardText>
            <CardText>Skin Color: {props.person.skin_color}</CardText>
            <CardText>Eye Color: {props.person.eye_color}</CardText>
            <CardText>Birth Year: {props.person.birth_year}</CardText>
            <CardText>Gender: {props.person.gender}</CardText>
         </CardBody>
        </Card>
    </Col>
    </div>
  );
};

export default PeopleCard;