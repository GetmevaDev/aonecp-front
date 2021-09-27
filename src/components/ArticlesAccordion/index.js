import React from 'react';
import { AccordionWrapper, AccordionItem } from 'custom-react-accordion';
import 'custom-react-accordion/dist/Accordion.css';
import './style.modules.css';
import Collapsible from 'react-collapsible';
import ReactMarkdown from 'react-markdown';

import 'react-accessible-accordion/dist/fancy-example.css';

const ArticlesAccordion = ({ data }) => {
  console.log(data);

  return (
    <div className="container">
      <div className="articles ">
        <div className="left">
          {data.articles.map(({ open, titleBottom, titleArticle, img, text, descBottom }) => (
            <Collapsible trigger={titleArticle} open={open === true ? true : false}>
              <div className="right">
                <div className="title">{titleArticle}</div>
                <div className="text">
                  <ul style={{ paddingLeft: 0 }}>
                    <ReactMarkdown>{text}</ReactMarkdown>
                  </ul>
                </div>

                <div className="text">
                  <div className="title">{titleBottom}</div>
                  <div className="titleunder">
                    <ReactMarkdown className="desc">{descBottom}</ReactMarkdown>

                    <div className="articleImg">
                      <img src={img[0].url} alt="articleMan" />
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
