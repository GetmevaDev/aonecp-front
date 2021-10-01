import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../../../node_modules/rc-tabs/assets/index.css';
import BeatLoader from 'react-spinners/BeatLoader';

import moment from 'moment';

import Tabs, { TabPane } from 'rc-tabs';

import './styles.css';

const TabAccordion = ({ data, loading, error }) => {
  if (loading)
    return (
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <BeatLoader />
      </div>
    );
  if (error) return <p>error</p>;

  function callback(e) {
    console.log(e);
  }

  const sortArticles = [...data.articles].sort(
    (a, b) => moment(b.createdAt).valueOf() - moment(a.createdAt).valueOf(),
  );

  const reversed = sortArticles.reverse();

  return (
    <div className="container article-tab">
      <Tabs tabPosition="left" onChange={callback} tabBarGutter={10}>
        {reversed.map(({ id, titleBottom, titleArticle, img, text, descBottom }) => (
          <TabPane tab={titleArticle} key={id}>
            <div className="right">
              <div className="title">{titleArticle}</div>{' '}
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
                    <img src={img[0]?.url} alt="articleMan" />
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default TabAccordion;
