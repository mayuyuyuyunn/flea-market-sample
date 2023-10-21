import { Item } from "src/entities/item.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateItemDto } from "./dto/create-item.dto";
import { ItemStatus } from "./item-status.enum";

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  // 非同期だからasync
  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const { name, price, description } = createItemDto;
    const item = this.create({
      name,
      price,
      description,
      status: ItemStatus.ON_SALE,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    await this.save(item);

    return item;
  }
}
