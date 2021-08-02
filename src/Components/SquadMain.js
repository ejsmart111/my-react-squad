import Field from "./Field";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import playersAction from "../Store/ActionCreators.js/playersAction";
import { useEffect } from "react";
import PlayersModal from "./PlayersModal";

function SquadMain() {
  const players = useSelector(state => state.players)
  const modalState = useSelector(state => state.modal)
  
  const dispatch = useDispatch()
  const {fetchPlayers} = bindActionCreators(playersAction, dispatch)

  useEffect(() => {
    fetchPlayers()
  }, [])


  
  return (
    <div>
      { modalState.show && <PlayersModal position={modalState.position} players={players}/> }
      <Field/>
    </div>
  );
}

export default SquadMain;
