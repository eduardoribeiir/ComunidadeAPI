import express from 'express';
import userRoutes from './presentation/routes/userRoutes';
import postRoutes from './presentation/routes/postRoutes';
import commentRoutes from './presentation/routes/commentRoutes';

const app = express();
const PORT = 3001;

app.use(express.json());

app.use('/eduardowebapi', userRoutes);
app.use('/eduardowebapi', postRoutes);
app.use('/eduardowebapi', commentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/eduardowebapi`);
});