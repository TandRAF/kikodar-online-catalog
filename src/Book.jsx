import HTMLFlipBook from "react-pageflip";

import Page1 from './assets/Catalog.png';
import Page4 from './assets/Catalog4.png';
import Page5 from './assets/Catalog5.png';
import Page6 from './assets/Catalog6.png';
import Page7 from './assets/Catalog7.png';
import Page8 from './assets/Catalog8.png';
import Page9 from './assets/Catalog9.png';
import Page10 from './assets/Catalog10.png';
import Page11 from './assets/Catalog11.png';
import Page12 from './assets/Catalog12.png';
import Page13 from './assets/Catalog13.png';
import Page14 from './assets/Catalog14.png';
import Page15 from './assets/Catalog15.png';
import Page16 from './assets/Catalog16.png';
import Page17 from './assets/Catalog17.png';
import Page18 from './assets/Catalog18.png';

const pages = [
  Page1, Page4, Page5, Page6, Page7,
  Page8, Page9, Page10, Page11, Page12, Page13,
  Page14, Page15, Page16, Page17, Page18
];

const Book = () => {
  return (
    <HTMLFlipBook
      width={650}
    height={874}
    minWidth={375}
    maxWidth={650}
    minHeight={504}
    maxHeight={874}
    size="stretch"
      showCover={true}
      drawShadow={true}
    >
      {pages.map((page, index) => (
        <div className={"page"} key={index}>
          <img src={page}alt={`Page ${index + 1}`} />
        </div>
      ))}
    </HTMLFlipBook>
  );
};

export default Book;
