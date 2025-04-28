import { Route, Routes } from "react-router"
import TicketForm from "./components/TicketForm"

import GeneratedTicket from "./components/GeneratedTicket"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<TicketForm />} />
        <Route path="/ticket" element={<GeneratedTicket />} />
      </Routes>
    </>
  )
}

export default App
