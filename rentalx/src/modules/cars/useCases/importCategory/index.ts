import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./importCategoryController";
import { ImportCategoryUseCase } from "./importCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const importCategoryUserCase = new ImportCategoryUseCase(categoriesRepository);

const importCategoryController = new ImportCategoryController(
  importCategoryUserCase
);

export { importCategoryController };
