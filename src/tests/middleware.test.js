import {
    describe,
    jest,
    beforeEach,
    it,
    expect,    
} from '@jest/globals';
import validateBarCode from '../middlewares';

describe("test services of validate", () => {
    const mockReq = {};
    const mockRes = {};
    const nextFn = jest.fn();

    beforeEach(()=>{
        mockRes.json = nextFn.mockReturnValue(mockRes);
        mockRes.status = nextFn.mockReturnValue(mockRes); 
    });


    it("Sequencia de numero invalido", () => {
        mockReq.params = {
            barcode: "2-290001192110001210904475617405911172000010000"
        };
        validateBarCode(mockReq, mockRes, nextFn);
        const statusCode = 400;

        expect(mockRes.status).toBeCalledWith(statusCode)
    });

    it("Tamanho da Sequencia de numero invalido", () => {
        mockReq.params = {
            barcode: "17405911172000010000"
        };

        validateBarCode(mockReq, mockRes, nextFn);
        const statusCode = 400;

        expect(mockRes.status).toBeCalledWith(statusCode)
    });
});