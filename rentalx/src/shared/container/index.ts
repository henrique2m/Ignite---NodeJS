import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICreateCategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoryRepository",
  CategoriesRepository
);
