import React, { useEffect } from 'react'
 
const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)
 
    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with Bot",
        "botConversationDescription": "This chatbot is built by Team Emmet",
        "botId": "3a6d890c-de2e-4c6e-b9f3-2c9c851838bf",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "3a6d890c-de2e-4c6e-b9f3-2c9c851838bf",
        "webhookId": "434e8f02-d7bb-4422-a432-82354e98b9a9",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "bookMySlot",
        // "avatarUrl": "https://botnation.ai/site/en/best-chatbot/",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "enableConversationDeletion": true,
        "theme": "prism",
        "themeColor": "#2563eb",
        
      })
    }
  }, [])
 
  return <div id="webchat" />
}
 
export default Chatbot;