"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./presentation/routes/userRoutes"));
const postRoutes_1 = __importDefault(require("./presentation/routes/postRoutes"));
const commentRoutes_1 = __importDefault(require("./presentation/routes/commentRoutes"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use(express_1.default.json());
app.use('/eduardowebapi', userRoutes_1.default);
app.use('/eduardowebapi', postRoutes_1.default);
app.use('/eduardowebapi', commentRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/eduardowebapi`);
});
