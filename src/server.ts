import { app } from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then((): void => {
  console.log("Database Connected");
  const PORT: number = Number(process.env.PORT);
  app.listen(PORT, async () => {
    console.log(`App running on port ${PORT}`);
  });
});
