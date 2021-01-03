import React from 'react'
import {Modal, Button, TextInput} from 'react-materialize'

export default function Talk() {
    return (
        <div>
            <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">
            Close
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header="Hire Me"
        id="Modal-0"
        open={false}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: "4%",
        }}
        trigger={<Button node="button">Hire Me</Button>}
      >
        
        <form action="mailto: ajalaeniola454@gmail.com">
          <TextInput id="TextInput-4" label="Name" />
          <TextInput email id="TextInput-4" label="Email" validate />
          <Button node="button" type="submit" waves="light">
            Talk To Me
          </Button>
        </form>
      </Modal>
    </div>
        
    )
}
