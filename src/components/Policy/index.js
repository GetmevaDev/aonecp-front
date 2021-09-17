import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import { useQuery, gql } from '@apollo/client';

const Policy = () => {
  const EXCHANGE_RATES = gql`
    query GetRightBlock {
      privacyPolicies {
        Title
        desc
        descList
      }
    }
  `;
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading)
    return (
      <div style={{ marginTop: 100, textAlign: 'center' }}>
        <BeatLoader />
      </div>
    );
  if (error) return <p>Error :(</p>;

  console.log(data);
  return (
    <div className="container">
      <div>
        {' '}
        <h1>{data.privacyPolicies[0].Title}</h1>
        <p>{data.privacyPolicies[0].desc}</p>
      </div>

      <div>
        <h2>{data.privacyPolicies[1].Title}</h2>
        <p>{data.privacyPolicies[1].desc}</p>
      </div>

      <div>
        <h2>{data.privacyPolicies[2].Title}</h2>
        <p>{data.privacyPolicies[2].desc}</p>
      </div>

      <div>
        <h2>{data.privacyPolicies[3].Title}</h2>
        <p>{data.privacyPolicies[3].desc}</p>
        <ul>
          <li>{data.privacyPolicies[4].descList}</li>

          <li>{data.privacyPolicies[5].descList}</li>

          <li>{data.privacyPolicies[6].descList}</li>

          <li>{data.privacyPolicies[7].descList}</li>

          <li>{data.privacyPolicies[8].descList}</li>

          <li>{data.privacyPolicies[9].descList}</li>
        </ul>
      </div>

      <div>
        <h2>{data.privacyPolicies[9].Title}</h2>
        <p>{data.privacyPolicies[9].desc}</p>
      </div>

      <div>
        <h2>{data.privacyPolicies[10].Title}</h2>
        <p>{data.privacyPolicies[10].desc}</p>
      </div>

      <div>
        <h2>{data.privacyPolicies[11].Title}</h2>
        <p>{data.privacyPolicies[11].desc}</p>
      </div>

      <div>
        <h2>{data.privacyPolicies[12].Title}</h2>
        <p>{data.privacyPolicies[12].desc}</p>
      </div>

      <div>
        <h2>{data.privacyPolicies[13].Title}</h2>
        <p>{data.privacyPolicies[13].desc}</p>
      </div>

      <div>
        <h2>{data.privacyPolicies[13].Title}</h2>
        <p>{data.privacyPolicies[13].desc}</p>
      </div>

      <div>
        <h2>{data.privacyPolicies[14].Title}</h2>
        <p>{data.privacyPolicies[14].desc}</p>
      </div>
    </div>
  );
};

export default Policy;
