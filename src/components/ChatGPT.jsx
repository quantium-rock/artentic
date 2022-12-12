import React from 'react';
import { ChatGPTAPI } from 'chatgpt'

async function example() {
  const api = new ChatGPTAPI({
    sessionToken: process.env.SESSION_TOKEN,
    clearanceToken: process.env.CLEARANCE_TOKEN,
    userAgent: 'TODO'
  })

  await api.ensureAuth()

  // send a message and wait for the response
  const response = await api.sendMessage(
    'Write a python version of bubble sort.'
  )

  // response is a markdown-formatted string
  console.log(response)
}