import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../app';

const { expect } = chai;
chai.use(chaiHttp);

function getSortedIds(players) {
  const ids = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const player of players) {
    ids.push(player.ids);
  }
  return ids.sort();
}

describe('Players', () => {
  it('should get all players, sorted', async () => {
    const res = await chai.request(server)
      .get('/api/players');

    expect(res).to.have.status(200);
    expect(getSortedIds(res.body)).to.be.a('array');
  });

  it('should get a player details', async () => {
    const data = await chai.request(server)
      .get('/api/players');

    const res = await chai.request(server)
      .get(`/api/players/${data.body[0].id}`);

    expect(res).to.have.status(200);
    expect(res.body.id).to.be.a('number');
    expect(res.body.firstname).to.be.a('string');
    expect(res.body.lastname).to.be.a('string');
  });
});
