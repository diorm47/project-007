const mainApiOptions = {
  baseUrl: "http://localhost:3001",

  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
};

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _checkResponseStatus(response) {
    return response.ok
      ? response.json()
      : response.json().then((err) => Promise.reject(err));
  }

  async _sendRequest({
    endpoint,
    method = "GET",
    body,
    requiresToken = false,
  }) {
    const headers = { ...this._headers };

    if (requiresToken) {
      headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }

    const res = await fetch(`${this._baseUrl}${endpoint}`, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    return this._checkResponseStatus(res);
  }

  // Sign actions list
  async authorizationAction(userData) {
    return this._sendRequest({
      endpoint: `/register`,
      method: "POST",
      body: userData,
    });
  }
  async loginAction(userData) {
    return this._sendRequest({
      endpoint: `/login`,
      method: "POST",
      body: userData,
    });
  }
  async getMe(userData) {
    return this._sendRequest({
      endpoint: `/me`,
      method: "GET",
      body: userData,
      requiresToken: true,
    });
  }
  async updateUser(userData) {
    return this._sendRequest({
      endpoint: `/update`,
      method: "POST",
      body: userData,
      requiresToken: true,
    });
  }
  // grids
  async getGridsApi() {
    return this._sendRequest({
      endpoint: `/grids`,
      method: "GET",
    });
  }
  async createGridsApi(userData) {
    return this._sendRequest({
      endpoint: `/grids`,
      method: "POST",
      body: userData,
      requiresToken: true,
    });
  }
  // users
  async getAllUsers() {
    return this._sendRequest({
      endpoint: `/users`,
      method: "GET",
    });
  }
  async getUser(data) {
    return this._sendRequest({
      endpoint: `/user/${data}`,
      method: "GET",
    });
  }
}

export const mainApi = new MainApi(mainApiOptions);
