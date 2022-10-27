import http from "../http-common";

const getAll = () => {
  return http.get("/weighings");
};

const get = (id) => {
  return http.get(`/weighings/${id}`);
};

const create = (data) => {
  return http.post("/weighings", data);
};

const update = (id, data) => {
  return http.put(`/weighings/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/weighings/${id}`);
};

const removeAll = () => {
  return http.delete(`/weighings`);
};

const findByTitle = (title) => {
  return http.get(`/weighings?title=${title}`);
};

const WeighingService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default WeighingService;