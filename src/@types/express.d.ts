import BilletType from "../services/interface"

declare global {
    namespace Express{
        interface Request {
            lastOutput?: BilletType;
            params: string;
        };
    };
};
