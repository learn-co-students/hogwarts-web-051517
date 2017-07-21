import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const Hog = (props) => (
    <Card >
        <Image src={"./hog-imgs/"+`${props.hog.name.toLowerCase().split(" ").join("_")}` + ".jpg"} alt="" />
        <Card.Content>
            <Card.Header>Name: {props.hog.name}</Card.Header>
            <Card.Meta>Weight: {props.hog.weight}</Card.Meta>
            <Card.Meta>Specialty: {props.hog.specialty}</Card.Meta>
            <Card.Meta>Greased: {props.hog.greased.toString()}</Card.Meta>
            <Card.Meta>highest medal achieved: {props.hog.medal}</Card.Meta>
            <Card.Description>Will Be Bacon: true</Card.Description>
        </Card.Content>
    </Card>
)

export default Hog