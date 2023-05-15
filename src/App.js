import { useEffect, useRef, useState } from "react";
import { Typography, Container } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BoxScreen } from './globalStyles'

import Table from "./pages/table";
import User from "./pages/user";

import io from "socket.io-client";

const ENDPOINT = `http://${window.location.hostname}:3003`;

const App = () => {
  const socketIo = useRef(null);
  const [client, setClient] = useState(null);
  const [inputData, setInputData] = useState([]);

  useEffect(() => {
    socketIo.current = io(ENDPOINT);

    socketIo.current.on(
      "client-connected",
      (client) => client && setClient(client)
    );

    socketIo.current.on("market-data", (data) => {
      console.log("recieved market data", data);
      setInputData((oldData) => [...oldData, data]);
    });

    return () => socketIo.current.disconnect();
  }, []);

  if (!client) {
    return <Typography>There's no client connected at moment</Typography>;
  }

  return (
    <BoxScreen maxWidth >
      {/* <Typography>Client Connected: {client?.first_name}</Typography> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/table" />} />
          <Route path="/table" element={<Table inputData={inputData} clientName={client?.first_name}/>} />
          <Route path="/user" element={<User client={client} />} />
        </Routes>
      </BrowserRouter>
    </BoxScreen>
  );
};

export default App;
