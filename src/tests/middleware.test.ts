import { NextFunction, Request, Response,} from 'express';
import validateBarCode from '../middlewares';

describe("test services of validate", () => {
    const mockReq: Partial<Request> = {};
    const mockRes: Partial<Response> = {};
    const nextFn: Partial<NextFunction> = jest.fn();

    beforeEach(()=>{
        mockRes.json = jest.fn().mockReturnValue(mockRes);
        mockRes.status = jest.fn().mockReturnValue(mockRes); 
    });


    it("Sequencia de numero invalido", () => {
        mockReq.params = {
            barcode: "2-290001192110001210904475617405911172000010000"
        };
        validateBarCode(
            mockReq as Request,
            mockRes as Response,
            nextFn as NextFunction
        );
        const statusCode = 400;

        expect(mockRes.status).toBeCalledWith(statusCode)
        expect(mockRes.json).toBeCalledWith({message: "Only numbers are allowed."})
    });

    it("Tamanho da Sequencia de numero invalido", () => {
        mockReq.params = {
            barcode: "17405911172000010000"
        };

        validateBarCode(
            mockReq as Request,
            mockRes as Response,
            nextFn as NextFunction
        );
        const statusCode = 400;

        expect(mockRes.status).toBeCalledWith(statusCode)
        expect(mockRes.json).toBeCalledWith({message: "Enter a valid code, the default is a numerical string of 44 to 48 characters."})
        
    });
});