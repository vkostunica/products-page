import { FC } from 'react';
import Image from 'next/image';

import { Product } from '@/types/models';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export interface Props {
  product: Product;
}

const ProductListItem: FC<Props> = ({ product }) => {
  const { name, image, description, tags, price } = product;

  return (
    <Card className="grid grid-cols-[14rem,3fr,1fr,14rem] items-center gap-16 p-4 rounded-lg">
      <div className="flex items-center gap-2">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <h2 className="text-lg font-semibold whitespace-nowrap">{name}</h2>
      </div>

      <p className="text-sm text-muted-foreground truncate">{description}</p>

      <div className="flex items-center gap-2">
        {tags.map((tag, index) => (
          <Badge key={index} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex justify-end items-center gap-2">
        <div className="text-lg font-bold">${price.toFixed(2)}</div>
        <Button variant="outline">View Details</Button>
      </div>
    </Card>
  );
};

export default ProductListItem;
