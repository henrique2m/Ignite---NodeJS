import { ICategoriesRepository } from "../../repositories/ICreateCategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUserCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category Already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUserCase };