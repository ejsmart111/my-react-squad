import Field from "./Components/Field";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import playersAction from "./Store/ActionCreators.js/playersAction";
import { useEffect, useState } from "react";
import PlayerForm from "./Components/PlayerForm";
import PlayersModal from "./Components/PlayersModal";

function App() {
  const players = useSelector(state => state.players)
  const modalState = useSelector(state => state.modal)
  
  const dispatch = useDispatch()
  const {fetchPlayers} = bindActionCreators(playersAction, dispatch)

  useEffect(() => {
    fetchPlayers()
  }, [])


  
  return (
    <div className="App">
      { modalState.show && <PlayersModal position={modalState.position} players={players}/> }
      <Field/>
      {/* <PlayerForm/> */}
    </div>
  );
}

export default App;
