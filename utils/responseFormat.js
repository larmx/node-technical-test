/**
 * Formated API Response for scalability and integrity purpose
 */

export default class ResponseFormat {
  constructor(res) {
    this.res = res;
    this.data = undefined;
    this.payload = {};
  }

  success(data) {
    this.data = data;
    this.res.status(200);

    return this;
  }

  forbidden(data = 'Accès interdit') {
    this.data = data;
    this.res.status(403);

    return this;
  }

  created(data = 'Créé') {
    this.data = data;
    this.res.status(201);

    return this;
  }

  error(data = 'Erreur') {
    this.data = data;
    this.res.status(400);

    return this;
  }

  notFound(data = 'Page introuvable') {
    this.data = data;
    this.res.status(404);

    return this;
  }

  addPayload(payload) {
    this.payload = payload;

    return this;
  }

  send() {
    let result = {};

    if (typeof this.data === 'string') {
      result = {
        message: this.data,
      };
    } else {
      result = this.data;
    }

    result = Object.assign(result, this.payload);

    return this.res.json(result);
  }
}
