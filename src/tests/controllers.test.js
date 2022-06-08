import {describe, expect, it} from "@jest/globals";
import request from "supertest";
import app from "../app";


const url = "/boleto/21290001192110001210904475617405911172000010000"
describe("Teste de Rota", () => {
    it("solicitação de boleto ", async () => {
        const response = await request(app).get(url);

        expect(response.statusCode).toBe(200);
    })
})
