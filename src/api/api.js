import http from "./http";

export async function login(params) {
    const res = await http.post("http://10.172.246.232:40001/admin/api/auth/login", params);
    return res;
}