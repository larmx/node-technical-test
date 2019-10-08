import axios from 'axios';
import ResponseFormat from '../utils/responseFormat';
import config from '../config';

// Get all players
async function getPlayers(req, res) {
  try {
    const response = await axios.get(config.dataUrl);
    const { data } = response;
    const sortedPlayers = data.players.sort((pl1, pl2) => pl1.id > pl2.id);

    return new ResponseFormat(res).success(sortedPlayers).send();
  } catch (e) {
    return new ResponseFormat(res).error('Une erreur est survenue lors de la récupération des données.').send();
  }
}

// Get a player info by id
async function getPlayerInfos(req, res) {
  const { id } = req.params;

  try {
    const response = await axios.get(config.dataUrl);
    const { data } = response;

    const player = data.players.find((pl) => pl.id === Number(id));

    if (!player) {
      return new ResponseFormat(res).notFound('Cet identifiant ne correspond à aucun joueur connu').send();
    }
    return new ResponseFormat(res).success(player).send();
  } catch (e) {
    return new ResponseFormat(res).error('Une erreur est survenue lors de la récupération des données.').send();
  }
}

export default {
  getPlayers,
  getPlayerInfos,
};
