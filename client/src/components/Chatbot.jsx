import React, { useEffect } from "react";
import { Button, Card, Input, Typography, message } from "antd";
import { useState } from "react";
import sendBtn from "../images/send-message.png";
// import { Flex } from "antd";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [cancel, setCancel] = useState(false);

  const [botText, setBotText] = useState("");
  const [sendText, setSendText] = useState(false);
  const [input, setInput] = useState([]);
  const [newInput, setNewInput] = useState('');
  

  useEffect(() => {
    setBotText("Hello are you fine ! Ask your Questions. 🩺");
  }, []);

  const handleText = () =>{
    setSendText(true);
    if(newInput.trim() !== ''){
      setInput([...input, {text: newInput}]);
      setNewInput('');
    }
  }

  return (
    <>
      <Card
        title="Chat AI welcomes you"
        style={{ width: 350, borderColor: "blue", zIndex: 5}}
      >
        <Card style={{ width: 300, marginBottom: 4, borderColor:"blue", }} bordered="false">
          <Card
            style={{
              width: 200,
              backgroundColor: "#F0F0F0",
              position: "relative",
              right: "10%",
              marginLeft: 7,
            }}
          >
            <Typography>{botText}</Typography>
          </Card>
          {sendText && input.map((input,index) =>(
            <Card
              style={{
                width: 200,
                position: "relative",
                left: "10%",
                margin: 2,
                marginLeft: 40,
                backgroundColor: "#D3D3D3",
              }}
            >
              <Typography>
                <div key={index}>
                  {input.text}
                </div>
              </Typography>
            </Card>
          ))}
        </Card>
        {/* <Flex> */}
          <Input placeholder="Ask Questions" style={{ width: 260, borderColor:"blue" }} value={newInput} onChange={(e) =>{
              setNewInput(e.target.value);
            }} 
            />
          <img
            src={sendBtn}
            alt="sendbtn"
            style={{ width: 30, opacity: 0.8, marginLeft: 6 }}
            onClick={handleText}
          />
        {/* </Flex> */}
      </Card>
    </>
  );
}

export default ChatBot;
