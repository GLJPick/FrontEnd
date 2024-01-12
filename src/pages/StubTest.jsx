import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardSection from './CardSection';

const StubTest = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://api.example.com/data');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <CardSection data={data} />
    </div>
  );
}

export default StubTest;
