import { FC } from 'react';
import Image from 'next/image';

import { Product } from '@/types/product';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  const { id, name, image, description, color, price } = product;

  return (
    <Card key={id} className="overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="h-48 w-full object-cover"
      />
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">{name}</h3>
          <span className="font-bold">${price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex gap-2">
          <Badge variant="secondary">Tech</Badge>
          <Badge variant="secondary">{color}</Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="secondary">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
