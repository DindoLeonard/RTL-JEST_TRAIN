import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ScoopOption from './ScoopOptions';
import { Grid } from '@mui/material';

const Options = ({
  optionType,
}: {
  optionType: string;
}): React.ReactElement => {
  const [items, setItems] = useState<{ name: string; imagePath: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ name: string; imagePath: string }[]>(
          `http://localhost:3030/${optionType}`
        );

        setItems(response.data);
      } catch (e) {
        return;
      }
    };

    fetchData();
  }, [optionType]);

  // TODO: replace null with ToppingOption when available
  const ItemComponent = ({
    name,
    imagePath,
  }: {
    name: string;
    imagePath: string;
  }) => {
    return optionType === 'scoops' ? (
      <ScoopOption name={name} imagePath={imagePath} />
    ) : null;
  };

  const optionItems = items.map((item) => {
    return (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    );
  });

  return <Grid container>{optionItems}</Grid>;
};

export default Options;
