import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { fetchDetails } from '../../utilities/fetchGists';
import './index.css';

const md = require('markdown-it')();

const GistDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDetails(id).then((data) => {
      setIsLoading(false);
      console.log('data', data);
      setDetails(data);
      setFiles(Object.entries(data.files));
    });
  }, [id]);

  return (
    <div>
      <Link to="/">Back to Search</Link>
      <p>{isLoading ? 'Loading...' : ''}</p>
      <h2>{details && details.description}</h2>
      {files &&
        files.map((file) => (
          <div key={file[1].filename} className="card">
            <h4>{file[1].filename}</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: md.render(file[1].content),
              }}
            ></div>
          </div>
        ))}
    </div>
  );
};

export default GistDetail;
