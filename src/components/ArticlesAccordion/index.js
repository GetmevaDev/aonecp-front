import React from 'react';
import { AccordionWrapper, AccordionItem } from 'custom-react-accordion';
import 'custom-react-accordion/dist/Accordion.css';
import './style.modules.css';
import Collapsible from 'react-collapsible';

import 'react-accessible-accordion/dist/fancy-example.css';

const ArticlesAccordion = ({ data }) => {
  console.log(data);

  return (
    <div className="container">
      <div className="articles ">
        <div className="left">
          {data.articles.map(({ titleRight, desc, titleArticle, img, ItemList }) => (
            <Collapsible trigger={titleArticle}>
              <div className="right">
                <div classname="">
                  <div className="title">{titleRight}</div>
                  <div className="text">
                    <span>
                      {desc}
                      <ul>
                        <li>{ItemList}</li>
                        {/* <li>Et harum qudem rerum facilis est </li>
                        <li>Rerum necessiatatibus saepe eveniet</li>
                        <li>Neque porro quisquam est</li>
                        <li>Quis autem vel eum iure reprehenderit</li> */}
                      </ul>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime et
                      reprehenderit obcaecati expedita a atque quae at tenetur quo aliquid
                      veritatis, aspernatur ut omnis iste animi assumenda distinctio. Quisquam
                      sapiente similique fugit at quia repudiandae ratione? Reprehenderit minus, in
                      excepturi soluta laborum, debitis molestiae voluptatem quaerat asperiores
                      blanditiis maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quis aliquid libero aliquam enim quaerat blanditiis iste. Est nesciunt rerum
                      consequuntur doloremque quia, sit saepe, maxime labore tempore, blanditiis
                      dignissimos beatae.
                    </span>

                    <span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ullam
                      quidem praesentium corporis facere vitae architecto illum non, beatae
                      doloremque perferendis laboriosam molestiae rerum qui, itaque nulla rem,
                      mollitia alias. Rerum distinctio natus molestiae dolorem fugit veritatis,
                      quisquam sunt, asperiores vel rem delectus. Obcaecati possimus, officia
                      similique sapiente alias consequatur.
                    </span>
                  </div>

                  <div className="text">
                    <div className="title">Ut enim ad minim veniam</div>
                    <div className="titleunder">
                      <div className="desc">
                        <span>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et sapiente iure
                          quasi qui. At, illo! Fugit esse quia iure ipsum non pariatur, quod
                          deleniti nihil eum error dolore aliquid consequatur cumque et doloremque.
                          Iure veritatis nisi fugiat, saepe voluptas exercitationem.
                        </span>

                        <span>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et sapiente iure
                          quasi qui. At, illo! Fugit esse quia iure ipsum non pariatur, quod
                          deleniti nihil eum error dolore aliquid consequatur cumque et doloremque.
                          Iure veritatis nisi fugiat, saepe voluptas exercitationem.
                        </span>
                      </div>
                      <div className="articleImg">
                        <img src={img.url} alt="" width="367px" height="379px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </div>
  );
};

{
  /* <AccordionWrapper>
  {data.articles.map(({ titleArticle }, index) => (
    <AccordionItem key={index} index={index} title={titleArticle} description={desc} />
  ))}
</AccordionWrapper>; */
}

export default ArticlesAccordion;
