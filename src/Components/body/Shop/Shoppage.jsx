import React, { useState } from 'react';
import {
  Countbar,
  FirstPart,
  Image,
  Ratebar,
  Rated,
  Sizebar,
  Button,
} from './styled';
import { card } from '../../../Mock/mock';
import GreenTitle from '../../generics/greenTitle/GreenTitle';

function Shoppage() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <FirstPart>
        <FirstPart.ImgBar>
          <FirstPart.ImgBar.Imgs>
            {card[0].src.map((value) => (
              <Image key={value.id} src={value.src} />
            ))}
          </FirstPart.ImgBar.Imgs>
          <FirstPart.ImgBar.Img>
            <img src={card[0].src[0].src} />
          </FirstPart.ImgBar.Img>
        </FirstPart.ImgBar>
        <FirstPart.DescriptionBar>
          <h2>{card[0].title}</h2>

          <Ratebar>
            <GreenTitle fontsize={'16px'} bold={'bold'}>
              ${card[0].price}.00
            </GreenTitle>

            <p>
              <Rated allowHalf defaultValue={4} />
              19 Customer Review
            </p>
          </Ratebar>
          <h4>Short Discription:</h4>
          <p className='description'>{card[0].description}</p>
          <h4>Size:</h4>
          <Sizebar>
            <Sizebar.Sizes>S</Sizebar.Sizes>
            <Sizebar.Sizes>M</Sizebar.Sizes>
            <Sizebar.Sizes>L</Sizebar.Sizes>
            <Sizebar.Sizes>XL</Sizebar.Sizes>
          </Sizebar>
          <Countbar>
            <Button onClick={() => setCount(count - 1)}>-</Button>
            <Countbar.Count>{count}</Countbar.Count>
            <Button onClick={() => setCount(count + 1)}>+</Button>
          </Countbar>
        </FirstPart.DescriptionBar>
      </FirstPart>
    </div>
  );
}

export default Shoppage;
