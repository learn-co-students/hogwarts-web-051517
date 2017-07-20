import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const PigModal = ({pig, imagePath}) => {
  let key = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
  let key2 = "highest medal achieved"

  return (
    <Modal trigger={<Button>See more pork</Button>}>
    <Modal.Header>{pig.name}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={imagePath} />
      <Modal.Description>
        <Header>PIG STATS</Header>
        <p>Specialty: {pig.specialty}</p>
        <p>Greased: {pig.greased.toString()}</p>
        <p>Weight: {pig[key]}</p>
        <p>Highest Medal: {pig[key2]}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
  )
}


export default PigModal;
