import {describe, expect, it} from "@jest/globals";
import request from "supertest";
import app from "../app";


const url = "/boleto"
describe("Teste de Rota", () => {
    it("Com sequencia valida ", async () => {
        const paramValid = "21290001192110001210904475617405911172000010000"
        const response = await request(app).get(`${url}/${paramValid}`);

        expect(response.statusCode).toBe(200);
    });

    it("Com sequencia invalida com letras ou caracter especial ", async () => {
        const paramInvalid = "21@90001192110001210904475617405911172000010000"
        const response = await request(app).get(`${url}/${paramInvalid}`);

        expect(response.statusCode).toBe(400);
    })

    it("Com sequencia de tamanho invalido", async () => {
        const paramInvalid = "21475617405911172000010000"
        const response = await request(app).get(`${url}/${paramInvalid}`);

        expect(response.statusCode).toBe(400);
    })
})
